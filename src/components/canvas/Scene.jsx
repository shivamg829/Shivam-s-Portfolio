import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import { useTheme } from '../ThemeContext'
import * as THREE from 'three'

const BackgroundParticles = ({ colors, intensity }) => {
  const mesh = useRef()
  const count = 1000
  
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      dummy.position.set(
        (xFactor + Math.cos(t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (yFactor + Math.sin(t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (zFactor + Math.cos(t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 12, 12]} />
      <meshStandardMaterial color={colors[0]} emissive={colors[0]} emissiveIntensity={intensity} />
    </instancedMesh>
  )
}

const FloatingSpheres = ({ colors }) => {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[5, 2, -10]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <MeshDistortMaterial
            color={colors[1]}
            speed={2}
            distort={0.4}
            radius={1}
          />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
        <mesh position={[-5, -2, -8]}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color={colors[2]}
            speed={1.5}
            distort={0.5}
            radius={1}
          />
        </mesh>
      </Float>
    </>
  )
}

export const Scene = () => {
  const { uniforms } = useTheme()
  const { colors, intensity } = uniforms

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color={colors[0]} />
      <pointLight position={[-10, -10, -10]} intensity={1} color={colors[1]} />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <BackgroundParticles colors={colors} intensity={intensity} />
      <FloatingSpheres colors={colors} />
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
}

export default Scene
