'use client'
import React, { use, useEffect } from 'react'
import { calculateRSI3, checkMACD, checkMACDCrosses, getLength } from '../utils'
import { TimeFrame } from '../constant/enum'
import { useAppSelector } from '@/lib/hooks'
import { useGetPokemonByNameQuery } from '@/lib/createAPI'
import {
  Macd,
  useGetBBQuery,
  useGetMACDCrossBBQuery,
  useGetMACDQuery,
  useGetOHLCVQuery,
  useGetRsiQuery,
} from '@/lib/reducer/rsi'

const c = checkMACD()
export default function Binance() {
  const x = useGetRsiQuery({ symbol: 'ETHUSDT', timeframe: TimeFrame['4h'] })
  const y = useGetMACDQuery({ symbol: 'ETHUSDT', timeframe: TimeFrame['4h'] })
  const z = useGetBBQuery({ symbol: 'ETHUSDT', timeframe: TimeFrame['4h'] })
  const k = useGetOHLCVQuery({ symbol: 'ETHUSDT', timeframe: TimeFrame['4h'] })
  const {
    data = [],
    error,
    isLoading,
  } = useGetMACDCrossBBQuery({
    symbol: 'ETHUSDT',
    timeframe: TimeFrame['4h'],
  })
  const hh = data.filter(item => {
    console.log('item.close < item.bb.lower', item.close, item.bb?.lower)
    return item.close < item.bb?.middle
  })
  console.log('data', hh)
  return <div>new</div>
}
