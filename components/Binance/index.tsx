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
import { binance } from '@/pages/_app'

function Binance() {
  // const x = await binance.fetchTickers()
  const { data, error, isLoading } = useGetMACDCrossBBQuery({
    timeframe: TimeFrame['4h'],
  })
  console.log('datadata', data)
  return <div>new{isLoading}</div>
}
export default Binance
