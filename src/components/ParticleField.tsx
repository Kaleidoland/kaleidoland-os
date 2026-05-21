'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const particles = useMemo(() => {
    const temp = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 10;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 10;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return temp;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#00ffff" size={0.005} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  );
}
