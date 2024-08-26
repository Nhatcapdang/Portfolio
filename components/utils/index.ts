import { rsi, macd, getDetachSourceFromOHLCV } from 'trading-indicator'
import { Int } from 'ccxt/js/src/base/types'
import { formatNumber } from '../common'
import { TimeFrame } from '../constant/enum'
import { binance } from '@/pages/_app'
import { Macd } from '@/lib/reducer/rsi'

export type Iohlcv = {
  open: number
  high: number
  low: number
  close: number
  volume: number
}
export function calculateEMA(data: Iohlcv[], periods: number): number {
  const sma = data.slice(0, periods).reduce((a, b) => a + b.close, 0) / periods
  const ema: number[] = [sma]
  const multiplier = 2 / (periods + 1)
  for (let i = periods; i < data.length; i++) {
    const currentEMA = (data[i].close - ema[i - 1]) * multiplier + ema[i - 1]
    ema.push(currentEMA)
  }

  return ema[0]
}

export function calculateRSI(
  u: number,
  d: number,
): {
  rsi: number
  hint: string
} {
  // U là lợi nhuận trung bình của các nến tăng trong 𝑛 nngày.
  // D là lợi nhuận trung bình của các nến giảm trong 𝑛 nngày.
  // Calculate the Relative Strength (RS) and the Relative Strength Index (RSI)
  // RS = Average Gain / Average Loss or RS = (Sum of Gains over the past 14 periods) / (Sum of Losses over the past 14 periods)
  const rsi = formatNumber(100 - 100 / (1 + u / d))
  let hint = ''
  if (rsi <= 30)
    hint = `RSI ${rsi} it usually shows that the asset is oversold.`

  // RSI từ 30 đến 50: Thường cho thấy tình trạng thị trường "quá bán" (oversold),
  // có thể là dấu hiệu của sự suy giảm về giá đang dần kết thúc và thị trường có thể chuẩn bị cho một pha tăng giá.
  if (rsi > 30 && rsi < 50)
    hint = `RSI ${rsi} is in the normal range, not overbought or oversold , could be a sign that the price decline is gradually coming to an end and the market could be preparing for a bullish phase`

  // RSI từ 50 đến 70: Thường cho thấy tình trạng thị trường "trung lập",
  // không quá mua hoặc quá bán.Đây là khu vực thông tin,
  // trong đó giá có thể tiếp tục di chuyển theo hướng hiện tại hoặc có thể bắt đầu một xu hướng mới.
  if (rsi >= 50 && rsi < 70)
    hint = `RSI ${rsi} is in the neutral range, not overbought or oversold. This is an information area, where the price can continue to move in the current direction or may start a new trend.`

  if (rsi >= 70)
    hint = `RSI ${rsi} crosses 70, it usually shows that the asset is overbought.`
  return {
    rsi,
    hint,
  }
}

export const calculateRSI3 = async ({
  symbol,
  timeframe,
}: {
  symbol: string
  timeframe: TimeFrame
}) => {
  const { input } = await getDetachSourceFromOHLCV(
    'binance',
    symbol,
    timeframe,
    true,
  ) // true if you want to get future market
  const close: number[] = await rsi(14, 'close', input)
  const open: number[] = await rsi(14, 'open', input)
  const high: number[] = await rsi(14, 'high', input)
  return {
    close: hintRsi(close.slice(-1)[0]),
    open: hintRsi(open.slice(-1)[0]),
    high: hintRsi(high.slice(-1)[0]),
  }
}

function hintRsi(rsi: number) {
  let hint = ''
  if (rsi <= 30)
    hint = `RSI ${rsi} it usually shows that the asset is oversold.`

  // RSI từ 30 đến 50: Thường cho thấy tình trạng thị trường "quá bán" (oversold),
  // có thể là dấu hiệu của sự suy giảm về giá đang dần kết thúc và thị trường có thể chuẩn bị cho một pha tăng giá.
  if (rsi > 30 && rsi < 50)
    hint = `RSI ${rsi} is in the normal range, not overbought or oversold , could be a sign that the price decline is gradually coming to an end and the market could be preparing for a bullish phase`

  // RSI từ 50 đến 70: Thường cho thấy tình trạng thị trường "trung lập",
  // không quá mua hoặc quá bán.Đây là khu vực thông tin,
  // trong đó giá có thể tiếp tục di chuyển theo hướng hiện tại hoặc có thể bắt đầu một xu hướng mới.
  if (rsi >= 50 && rsi < 70)
    hint = `RSI ${rsi} is in the neutral range, not overbought or oversold. This is an information area, where the price can continue to move in the current direction or may start a new trend.`

  if (rsi >= 70)
    hint = `RSI ${rsi} crosses 70, it usually shows that the asset is overbought.`
  return {
    rsi,
    hint,
  }
}

export async function calculateMACD({
  symbol,
  timeframe,
}: {
  symbol: string
  timeframe: TimeFrame
}) {
  const { input } = await getDetachSourceFromOHLCV(
    'binance',
    symbol,
    timeframe,
    true,
  ) // true if you want to get future market
  const close: {
    MACD: number
    signal: number
    histogram: number
  }[] = await macd(12, 26, 9, 'close', input)
  const open: {
    MACD: number
    signal: number
    histogram: number
  }[] = await macd(12, 26, 9, 'open', input)
  const high: {
    MACD: number
    signal: number
    histogram: number
  }[] = await macd(12, 26, 9, 'high', input)
  return {
    close: close.slice(-1)[0],
    open: open.slice(-1)[0],
    high: high.slice(-1)[0],
  }
}

export async function fetchOHLCV2(
  symbol: string,
  timeframe?: TimeFrame,
  since?: Int,
  limit?: Int,
  params?: {},
) {
  const res = await binance.fetchOHLCV(symbol, timeframe, since, limit, params)
  return res.map(item => {
    const open = Number(item[1])
    const high = Number(item[2])
    const low = Number(item[3])
    const close = Number(item[4])
    const change = close - open
    return {
      //   time: moment(item[0]).format('YYYY-MM-DD HH:mm:ss'),
      open,
      high,
      low,
      close,
      volume: item[5],
      // amplitude: (Number(item[1]) - Number(item[4])) * 100,
      change: formatNumber(change, {
        fractionDigits: 4,
      }),
      percentage: formatNumber((change / open) * 100),
    }
  })
}

function calculateSlope(histogram: any[]) {
  return histogram[histogram.length - 1] - histogram[histogram.length - 2]
}

/** max length 474 */
export const checkMACDCrosses = (data: Macd[] = []) => {
  let crosses = []
  for (let i = 1; i < data.length; i++) {
    const prev = data[i - 1]
    const curr = data[i]
    if (prev.MACD < prev.signal && curr.MACD > curr.signal) {
      crosses.push({
        index: i,
        MACD: curr.MACD as number,
        signal: curr.signal as number,
      })
    }
  }
  return crosses
}

export const checkMACD = (data: Macd[] = []) => {
  const checkHistogramSlope = () => {
    for (let i = 1; i < data.length; i++) {
      const slope = calculateSlope([data[i - 1].histogram, data[i].histogram])
      console.log(`Histogram slope at index ${i}: ${slope}`)
    }
  }
  /** max length 474 */
  const checkMACDCrosses = (data: Macd[] = []) => {
    let crosses = []
    for (let i = 1; i < data.length; i++) {
      const prev = data[i - 1]
      const curr = data[i]
      if (prev.MACD < prev.signal && curr.MACD > curr.signal) {
        crosses.push({ index: i, MACD: curr.MACD, signal: curr.signal })
      }
    }
    return crosses
  }

  const checkZeroLineCrossovers = () => {
    for (let i = 1; i < data.length; i++) {
      const prev = data[i - 1]
      const current = data[i]

      if (prev.MACD < 0 && current.MACD > 0) {
        console.log(`MACD crossed above zero at index ${i}`)
      } else if (prev.MACD > 0 && current.MACD < 0) {
        console.log(`MACD crossed below zero at index ${i}`)
      }
    }
  }

  const checkZeroLinePullbacks = () => {
    for (let i = 1; i < data.length; i++) {
      const prev = data[i - 1]
      const current = data[i]

      if (prev.MACD > 0 && current.MACD < prev.MACD) {
        console.log(`MACD pullback from above zero at index ${i}`)
      } else if (prev.MACD < 0 && current.MACD > prev.MACD) {
        console.log(`MACD pullback from below zero at index ${i}`)
      }
    }
  }
  return {
    checkHistogramSlope,
    checkMACDCrosses,
    checkZeroLineCrossovers,
    checkZeroLinePullbacks,
  }
}

export const getLength = ({
  close = [],
  bb = [],
  macd = [],
}: {
  close?: any[]
  bb?: any[]
  macd?: any[]
}) => {
  return {
    closeLength: close.length,
    bbLength: macd.length - bb.length,
    macdLength: close.length - macd.length,
  }
}
