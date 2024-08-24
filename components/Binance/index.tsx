'use client'
import React, { use, useEffect } from 'react'
import { calculateRSI3, checkMACD, checkMACDCrosses, getLength } from '../utils'
import { TimeFrame } from '../constant/enum'
import { useAppSelector } from '@/lib/hooks'
import { useGetPokemonByNameQuery } from '@/lib/createAPI'
import {
  Macd,
  useGetBBQuery,
  useGetMACDQuery,
  useGetOHLCVQuery,
  useGetRsiQuery,
} from '@/lib/reducer/rsi'

const c = checkMACD()
export default function Binance() {
  const x = useGetRsiQuery({ symbol: 'BTCUSDT', timeframe: TimeFrame['4h'] })
  const y = useGetMACDQuery({ symbol: 'BTCUSDT', timeframe: TimeFrame['4h'] })
  const z = useGetBBQuery({ symbol: 'BTCUSDT', timeframe: TimeFrame['4h'] })
  const k = useGetOHLCVQuery({ symbol: 'BTCUSDT', timeframe: TimeFrame['4h'] })

  const { bbLength, macdLength } = getLength({
    close: k.data?.close,
    bb: z.data,
    macd: y.data,
  })
  const MACDCrosses = checkMACDCrosses(y.data)
  const g = MACDCrosses.map(item => {
    return {
      ...item,
      close: k.data?.close[item.index + macdLength],
      bb: z.data?.[item.index - bbLength],
    }
  })
  console.log('11111', y.data, z.data, k.data?.close, MACDCrosses, g)

  return <div>new</div>
}
