import React, { Suspense, useRef } from 'react'
import { Application } from '@splinetool/runtime'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

export default function Employment() {
  const cube = useRef<any>()

  function onLoad(spline: Application) {
    const obj = spline.findObjectById('Cube')
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');
    // save it in a ref for later use
    cube.current = obj
  }

  function moveObj() {
    console.log(cube.current) // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

    // move the object in 3D space
    cube.current.position.x += 10
  }
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          onLoad={onLoad}
          scene="https://prod.spline.design/jXAGXzha7kfPIztS/scene.splinecode"
        />
        <button type="button" onClick={moveObj}>
          Move Cube
        </button>
      </Suspense>
    </div>
  )
}
