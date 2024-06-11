'use client'
import React, { use, useEffect } from 'react'
import { calculateRSI3 } from '../utils'
import { TimeFrame } from '../constant/enum'
import { useAppSelector } from '@/lib/hooks'
import { useGetPokemonByNameQuery, useGetUserQuery } from '@/lib/createAPI'

export default function Binance() {
  const x = useGetUserQuery({ symbol: 'BTCUSDT', timeframe: TimeFrame['4h'] })
  console.log(
    process.env.NEXT_PUBLIC_API_KEY,
    process.env.NEXT_PUBLIC_API_SECRET,
    '11111',
    x.data,
  )
  return <div>new</div>
}
