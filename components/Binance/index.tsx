'use client'
import React, { use, useEffect } from 'react'
import { calculateRSI3 } from '../utils'
import { TimeFrame } from '../constant/enum'

export default function Binance() {
  console.log(
    process.env.NEXT_PUBLIC_API_KEY,
    process.env.NEXT_PUBLIC_API_SECRET,
  )
  useEffect(() => {
    async function fetchData() {
      const x = await calculateRSI3({
        symbol: 'BTCUSDT',
        timeframe: TimeFrame['4h'],
      })
      console.log('x', x)
    }
    fetchData()
  }, [])
  return <div>new</div>
}
