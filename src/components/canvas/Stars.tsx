import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points as Pointsd, PointMaterial, Preload } from '@react-three/drei'
import { inSphere } from 'maath/random'
import { BufferGeometry, NormalBufferAttributes, Points } from 'three'

const Stars = () => {
  const ref = useRef<Points<BufferGeometry<NormalBufferAttributes>> | null>(
    null
  )
  const [sphere] = useState(() =>
    inSphere(new Float32Array(5001), { radius: 1.5 })
  )

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 100
      ref.current.rotation.y -= delta / 100
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Pointsd
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Pointsd>
    </group>
  )
}

const StarsCanvas = () => (
  <div
    style={{
      width: '100%',
      height: 'auto',
      position: 'absolute',
      inset: 0,
      zIndex: -1,
    }}
  >
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>

      <Preload all />
    </Canvas>
  </div>
)

export default StarsCanvas
