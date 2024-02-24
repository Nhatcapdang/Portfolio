import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useStyles } from './styles'

const BoxCubic = () => {
  const textRef = useRef<any>()
  useFrame(state => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2
    }
  })
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="yellow">
        <RenderTexture attach="map" sourceFile={undefined}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="color" args={['yellow']} />
          <Text ref={textRef} fontSize={2} color="yellow">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}

export default function Cubic() {
  const { classes } = useStyles()

  return (
    <div className={classes.cubicWrapper}>
      <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
        <OrbitControls autoRotate />
        {/* edges  */}
        <ambientLight intensity={1} />
        {/* directionalLight  = meshStandardMaterial */}
        <directionalLight position={[3, 2, 1]} />
        <BoxCubic />
      </Canvas>
    </div>
  )
}
