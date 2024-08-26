import { macd, bb, getDetachSourceFromOHLCV } from 'trading-indicator'
import { binanceusdm, Tickers } from 'ccxt'
import type { NextApiRequest, NextApiResponse } from 'next'
import { checkMACDCrosses, getLength } from '@/components/utils'
import { compact } from 'lodash'

export const binance = new binanceusdm({
  // options: { defaultType: 'future' },
  apiKey: 'xWe6TpSXPy5yZLYnDzG71lLDhPCqWafWQS0mL1k6ls79qJzaJpUEGsMJuf59RBSe',
  secret: 'oWvRMOFTIgo1npEEI74kzx8kLBZI28DYoSgCv2zDZgbaB4f2z3FlqnjAuNKSTYAJ',
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // secret: process.env.NEXT_PUBLIC_API_SECRET,
  // urls: { www: 'https://fapi.binance.com' },
  // userAgent: 'ccxt/192.168.80.35',
  verbose: true,
  // uid: 'binance',
})
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    result: {
      [x: string]: {
        symbol: string
        close: number
        bb: BollingerBands
        index: number
        MACD: any
        signal: any
      }[]
    }[]
  }>,
) {
  try {
    const tickers = await binance.fetchTickers()
    const symbols = Object.keys(tickers)
      .filter(pair => pair.includes('/USDT:'))
      .map(pair => pair.split(':')[0])
    const resultRespon = symbols.slice(0, 100).map(async item => {
      const symbol = item
      const { input } = await getDetachSourceFromOHLCV(
        'binance',
        symbol,
        '4h',
        true,
      ) // true if you want to get future market
      const close: number[] = input['close']
      const resRes: Macd[] = await macd(12, 26, 9, 'close', input)
      let bbData: BollingerBands[] = await bb(20, 2, 'close', input)
      const MACDCrosses = checkMACDCrosses(resRes)
      const { bbLength, macdLength } = getLength({
        close,
        bb: bbData,
        macd: resRes,
      })
      const macdCrossAndCloseBelowBB = compact(
        MACDCrosses.map(item => {
          const _close = close[item.index + macdLength]
          const bb = bbData[item.index - bbLength]
          return _close < bb?.middle && resRes.length - item.index <= 50
            ? {
                ...item,
                symbol,
                close: _close,
                bb,
              }
            : undefined
        }),
      )
      return {
        [symbol]: macdCrossAndCloseBelowBB,
      }
    })
    const resultFilter = (result, error) =>
      result
        .filter(i => i.status === (!error ? 'fulfilled' : 'rejected'))
        .map(i => (!error ? i.value : i.reason))

    const result = await Promise.allSettled(resultRespon).then(res => res)
    const fulfilled = resultFilter(result, false)
    res.status(200).json({ result: fulfilled })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
