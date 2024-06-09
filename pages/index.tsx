import { Welcome } from '../components/Welcome/Welcome'
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle'
import Home from '@/components/Home'
import { Suspense, useEffect, useState } from 'react'
// import { socket } from '../socket'
export default function HomePage() {
  // const [isConnected, setIsConnected] = useState(false)
  // const [transport, setTransport] = useState('N/A')

  // useEffect(() => {
  //   if (socket.connected) {
  //     onConnect()
  //   }

  //   function onConnect() {
  //     setIsConnected(true)
  //     setTransport(socket.io.engine.transport.nam)

  //     socket.io.engine.on('upgrade', transport => {
  //       setTransport(transport.name)
  //     })
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false)
  //     setTransport('N/A')
  //   }

  //   socket.on('connect', onConnect)
  //   socket.on('disconnect', onDisconnect)

  //   return () => {
  //     socket.off('connect', onConnect)
  //     socket.off('disconnect', onDisconnect)
  //   }
  // }, [])
  return (
    <>
      {/* <p>Status: {isConnected ? 'connected' : 'disconnected'}</p> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <Welcome />
        <ColorSchemeToggle />
      </Suspense>
    </>
  )
}
