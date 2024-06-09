import { METHOD } from '@/components/constant/enum'
import { Button } from '@mantine/core'
import { useCallback, useEffect } from 'react'
// https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Kline-Candlestick-Streams
export default function BinancePage() {
  const ws = new WebSocket('wss://fstream.binance.com/ws')
  useEffect(() => {
    ws.onerror = error => {
      console.error('WebSocket error: ', error)
    }
    ws.onopen = () => {
      const msg = {
        method: METHOD.SUBSCRIBE,
        params: ['btcusdt@kline_4h@miniTicker'],
        id: 1,
      }
      ws.send(JSON.stringify(msg))
    }
    ws.onmessage = function message(event) {
      console.log('received: %s', event.data)
    }
    return () => {
      ws.close()
    }
  }, [])
  const un = useCallback(() => {
    const msg = {
      method: METHOD.UNSUBSCRIBE,
      params: ['btcusdt@kline_4h@miniTicker'],
      id: 1,
    }
    ws.send(JSON.stringify(msg))
  }, [])
  return (
    <>
      <Button
        onClick={() => {
          ws.close()
        }}
      >
        close
      </Button>
      <Button
        onClick={() => {
          const msg = {
            method: METHOD.SUBSCRIBE,
            params: ['btcusdt@kline_4h@miniTicker'],
            id: 1,
          }
          ws.send(JSON.stringify(msg))
        }}
      >
        subscribe
      </Button>
      <Button
        onClick={() => {
          un()
        }}
      >
        unsubscribe
      </Button>
    </>
  )
}
