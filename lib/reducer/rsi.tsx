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
  }),
})

export const { useGetRsiQuery } = rsi
