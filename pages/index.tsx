import { Welcome } from '../components/Welcome/Welcome'
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle'
import Home from '@/components/Home'
import { Suspense } from 'react'

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <Welcome />
        <ColorSchemeToggle />
      </Suspense>
    </>
  )
}
