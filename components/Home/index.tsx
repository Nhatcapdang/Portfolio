import { SPEObject } from '@splinetool/react-spline'
import { Application } from '@splinetool/runtime'
import React, { useRef } from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

export default function Home() {
  const cube = useRef<SPEObject>()
  function onLoad(spline: Application) {
    const obj = spline.findObjectByName('Cube')
    // save the object in a ref for later use
    cube.current = obj
  }
  return (
    <div>
      <Spline
        scene="https://prod.spline.design/jXAGXzha7kfPIztS/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  )
}
