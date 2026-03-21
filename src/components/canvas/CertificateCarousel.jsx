import { useFrame, useThree } from '@react-three/fiber'
import { Float, Text, Image, useScroll, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import { certificates } from '../../data/certificates'

const CertificateCard = ({ url, title, issuer, position, index }) => {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.position.y = position[1] + Math.sin(t + index) * 0.1
    mesh.current.rotation.y = Math.sin(t / 4 + index / 2) * 0.1
    if (hovered) {
      mesh.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1), 0.1)
    } else {
      mesh.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
       <group position={position} ref={mesh}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}>
          {/* Card Base */}
          <mesh>
             <planeGeometry args={[3, 2]} />
             <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.8} />
          </mesh>
          
          {/* Placeholder Image (since URL might not be valid/accessible easily in 3D without proxy) */}
          <mesh position={[0, 0, 0.01]}>
             <planeGeometry args={[2.8, 1.8]} />
             <meshStandardMaterial color="#222" emissive="#fbbf24" emissiveIntensity={hovered ? 0.2 : 0} />
          </mesh>

          {/* Text Labels */}
          <Text
            position={[0, -0.6, 0.05]}
            fontSize={0.12}
            color="white"
            font="https://fonts.gstatic.com/s/outfit/v6/QGYvz_MV7E9Rnsh8H_F8.woff"
            maxWidth={2.5}
            textAlign="center"
          >
            {title}
          </Text>
          <Text
            position={[0, -0.85, 0.05]}
            fontSize={0.08}
            color="#94a3b8"
            font="https://fonts.gstatic.com/s/outfit/v6/QGYvz_MV7E9Rnsh8H_F8.woff"
          >
            {issuer}
          </Text>
          
          {/* Glow Effect */}
          {hovered && (
            <mesh position={[0, 0, -0.1]}>
              <planeGeometry args={[3.4, 2.4]} />
              <meshBasicMaterial color="#fbbf24" transparent opacity={0.1} />
            </mesh>
          )}
       </group>
    </Float>
  )
}

const CertificateCarousel = () => {
  const { width } = useThree((state) => state.viewport)
  
  const positions = useMemo(() => {
    const spacing = 4
    return certificates.map((_, i) => [
      (i - (certificates.length - 1) / 2) * spacing,
      0,
      0
    ])
  }, [certificates.length])

  return (
    <group>
      {certificates.map((cert, i) => (
        <CertificateCard 
          key={cert.id} 
          index={i} 
          position={positions[i]}
          title={cert.title}
          issuer={cert.issuer}
        />
      ))}
    </group>
  )
}

export default CertificateCarousel
