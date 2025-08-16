import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate DNA helix geometry
  const helixGeometry = useMemo(() => {
    const points1: THREE.Vector3[] = [];
    const points2: THREE.Vector3[] = [];
    const connections: THREE.Vector3[] = [];
    
    const segments = 100;
    const height = 8;
    const radius = 2;
    
    for (let i = 0; i < segments; i++) {
      const t = (i / segments) * height;
      const angle1 = (i / segments) * Math.PI * 8; // 4 full rotations
      const angle2 = angle1 + Math.PI; // Opposite side
      
      // First strand
      points1.push(new THREE.Vector3(
        Math.cos(angle1) * radius,
        t - height / 2,
        Math.sin(angle1) * radius
      ));
      
      // Second strand
      points2.push(new THREE.Vector3(
        Math.cos(angle2) * radius,
        t - height / 2,
        Math.sin(angle2) * radius
      ));
      
      // Base pair connections (every 5th point)
      if (i % 5 === 0) {
        connections.push(points1[points1.length - 1]);
        connections.push(points2[points2.length - 1]);
      }
    }
    
    return { points1, points2, connections };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* First DNA strand */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={helixGeometry.points1.length}
            array={new Float32Array(helixGeometry.points1.flatMap(p => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00ffff" linewidth={3} />
      </line>

      {/* Second DNA strand */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={helixGeometry.points2.length}
            array={new Float32Array(helixGeometry.points2.flatMap(p => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00ff00" linewidth={3} />
      </line>

      {/* Base pair connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={helixGeometry.connections.length}
            array={new Float32Array(helixGeometry.connections.flatMap(p => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ff00ff" linewidth={2} opacity={0.7} transparent />
      </lineSegments>

      {/* Nucleotide spheres */}
      {helixGeometry.points1.map((point, index) => (
        <mesh key={`nucleotide1-${index}`} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#004444" 
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
      
      {helixGeometry.points2.map((point, index) => (
        <mesh key={`nucleotide2-${index}`} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial 
            color="#00ff00" 
            emissive="#004400" 
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}
