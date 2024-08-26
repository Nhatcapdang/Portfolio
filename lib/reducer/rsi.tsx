import { macd, bb, getDetachSourceFromOHLCV, ema } from 'trading-indicator'
import { calculateRSI3, checkMACDCrosses, getLength } from '@/components/utils'
import { apiSlicePublic } from '.'
import { TimeFrame } from '@/components/constant/enum'
import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query'
import { Axios } from 'axios'
import { Tickers } from 'ccxt'
import { compact } from 'lodash'

const rsi = apiSlicePublic.injectEndpoints({
  endpoints: builder => ({
    getRsi: builder.query<Rsi, { symbol: string; timeframe: TimeFrame }>({
      queryFn: async params => {
        try {
          const res: Rsi = await calculateRSI3(params)
          // Return the result in an object with a `data` field
          return { data: res }
        } catch (error) {
          // Catch any errors and return them as an object with an `error` field
          return { error } as {
            error?: { status: number; statusText: string; data: string }
            data: any
            meta?: FetchBaseQueryMeta | undefined
          }
        }
      },
    }),
    getBB: builder.query<
      BollingerBands[],
      { symbol: string; timeframe: TimeFrame }
    >({
      queryFn: async ({ symbol, timeframe }) => {
        try {
          // length 301
          const { input } = await getDetachSourceFromOHLCV(
            'binance',
            symbol,
            timeframe,
            true,
          ) // true if you want to get future market
          console.log('input', input)
          let bbData = await bb(200, 2, 'close', input)
          return { data: bbData }
        } catch (error) {
          return { error } as {
            error?: { status: number; statusText: string; data: string }
            data: any
            meta?: FetchBaseQueryMeta | undefined
          }
        }
      },
    }),
    getOHLCV: builder.query<
      FromOHLCV,
      { symbol: string; timeframe: TimeFrame }
    >({
      queryFn: async ({ symbol, timeframe }) => {
        try {
          // length 500
          const { input } = await getDetachSourceFromOHLCV(
            'binance',
            symbol,
            timeframe,
            true,
          ) // true if you want to get future market
          return {
            data: {
              close: input['close'],
              open: input['open'],
              high: input['high'],
              low: input['low'],
              volume: input['volume'],
            },
          }
        } catch (error) {
          return { error } as {
            error?: { status: number; statusText: string; data: string }
            data: any
            meta?: FetchBaseQueryMeta | undefined
          }
        }
      },
    }),
  }),
})

const MACD = apiSlicePublic.injectEndpoints({
  endpoints: builder => ({
    getMACD: builder.query<Macd[], { symbol: string; timeframe: TimeFrame }>({
      queryFn: async ({ symbol, timeframe }) => {
        try {
          // length 475
          const { input } = await getDetachSourceFromOHLCV(
            'binance',
            symbol,
            timeframe,
            true,
          ) // true if you want to get future market
          const res: Macd[] = await macd(12, 26, 9, 'close', input)
          return { data: res }
        } catch (error) {
          // Catch any errors and return them as an object with an `error` field
          return { error } as {
            error?: { status: number; statusText: string; data: string }
            data: any
            meta?: FetchBaseQueryMeta | undefined
          }
        }
      },
    }),
    getMACDCrossBB: builder.query<
      { [key in string]: MACDCrossBB }[],
      { timeframe: TimeFrame }
    >({
      queryFn: async ({ timeframe }) => {
        try {
          const tickers = await new Axios({
            url: window.location.origin,
          })
            .get('/api/hello')
            .then(res => {
              const symbols = Object.keys(JSON.parse(res.data).result)
              return symbols.slice(0, 99).map(async item => {
                const symbol = item.replace(':USDT', '')
                const { input } = await getDetachSourceFromOHLCV(
                  'binance',
                  symbol,
                  timeframe,
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
                    return _close < bb?.middle &&
                      resRes.length - item.index <= 50
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
            })
          const data = await Promise.all(tickers).then(values => {
            return values
          })
          console.log('11111', data)
          return { data }
        } catch (error) {
          // Catch any errors and return them as an object with an `error` field
          return { error } as {
            error?: { status: number; statusText: string; data: string }
            data: any
            meta?: FetchBaseQueryMeta | undefined
          }
        }
      },
    }),
  }),
})

export const { useGetRsiQuery, useGetBBQuery, useGetOHLCVQuery } = rsi
export const { useGetMACDQuery, useGetMACDCrossBBQuery } = MACD
