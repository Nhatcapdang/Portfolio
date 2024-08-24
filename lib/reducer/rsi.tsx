import { macd, bb, getDetachSourceFromOHLCV, ema } from 'trading-indicator'
import { calculateRSI3 } from '@/components/utils'
import { apiSlicePublic } from '.'
import { TimeFrame } from '@/components/constant/enum'
import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query'

export type Rsi = {
  close: {
    rsi: number
    hint: string
  }
  open: {
    rsi: number
    hint: string
  }
  high: {
    rsi: number
    hint: string
  }
}

export type BollingerBands = {
  lower: number
  middle: number
  pb: number
  upper: number
}

export type FromOHLCV = {
  close: number[]
  open: number[]
  high: number[]
  low: number[]
  volume: number[]
}
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

export type Macd = {
  MACD: number
  signal: number
  histogram: number
}
export type Input = {
  close: number[]
  open: number[]
  high: number[]
  low: number[]
  volume: number[]
}
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
  }),
})

export const { useGetRsiQuery, useGetBBQuery, useGetOHLCVQuery } = rsi
export const { useGetMACDQuery } = MACD
