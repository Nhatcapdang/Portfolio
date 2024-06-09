import { Socket } from 'socket.io'
import { io } from 'socket.io-client'

const isBrowser = typeof window !== 'undefined'

export const socket = isBrowser
  ? io('wss://fstream.binance.com/ws', {
      query: {},
    })
  : ({} as Socket)
