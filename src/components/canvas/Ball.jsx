import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'
// import { BallCanvas } from '.'

const BallCanvas=({icon})=>{
  return(
    <Canvas
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense>
        <OrbitControls enableZoom={false}/>
          <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all/>

    </Canvas>
  )
}

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.85}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial color="#fff" polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal position={[0,0,1]} map={decal} rotation={[2*Math.PI,0,6.25]}/>
      </mesh>
    </Float>
  )
}

export default BallCanvas