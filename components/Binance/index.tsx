'use client'
import React, { use, useEffect } from 'react'
import { calculateRSI3 } from '../utils'
import { TimeFrame } from '../constant/enum'
import { useAppSelector } from '@/lib/hooks'
import { useGetPokemonByNameQuery } from '@/lib/createAPI'

export default function Binance() {
  const y = useAppSelector(state => state.test)
  const { data } = useGetPokemonByNameQuery('bulbasaur')
  console.log(
    process.env.NEXT_PUBLIC_API_KEY,
    process.env.NEXT_PUBLIC_API_SECRET,
    data,
  )
  useEffect(() => {
    async function fetchData() {
      const x = await calculateRSI3({
        symbol: 'BTCUSDT',
        timeframe: TimeFrame['4h'],
      })
      console.log('x', x, y)
    }
    fetchData()
  }, [])
  return <div>new</div>
}
