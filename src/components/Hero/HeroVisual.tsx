import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Procedural DNA Double Helix component
function DNAHelix({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const groupRef = useRef<THREE.Group>(null);
  const numBasePairs = 28;
  const radius = 1.35;
  const height = 7.5;
  const turns = 2.2;

  // Generate helix strands and connector data
  const { strandA, strandB, rungs } = useMemo(() => {
    const sA: THREE.Vector3[] = [];
    const sB: THREE.Vector3[] = [];
    const rData: { start: THREE.Vector3; end: THREE.Vector3; colorA: string; colorB: string }[] = [];

    const colors = ["#00f5a0", "#00d2ff", "#7dffd0", "#00c47f"];

    for (let i = 0; i < numBasePairs; i++) {
      const t = (i / (numBasePairs - 1)) * 2 - 1; // -1 to 1
      const y = t * (height / 2);
      const angle = t * Math.PI * turns;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;

      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      const pA = new THREE.Vector3(x1, y, z1);
      const pB = new THREE.Vector3(x2, y, z2);

      sA.push(pA);
      sB.push(pB);

      rData.push({
        start: pA,
        end: pB,
        colorA: colors[i % colors.length]!,
        colorB: colors[(i + 2) % colors.length]!,
      });
    }

    return { strandA: sA, strandB: sB, rungs: rData };
  }, [numBasePairs, radius, height, turns]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // 1 full rotation every ~15 seconds (2*PI / 15 rad/s ~= 0.42 rad/s)
    groupRef.current.rotation.y += delta * 0.42;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current[1] * 0.25 + Math.sin(state.clock.elapsedTime * 0.5) * 0.08,
      0.05
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      mouse.current[0] * 0.25,
      0.05
    );
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Strand A Nodes */}
      {strandA.map((pos, idx) => (
        <mesh key={`a-${idx}`} position={pos}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial
            color="#00f5a0"
            emissive="#00f5a0"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}

      {/* Strand B Nodes */}
      {strandB.map((pos, idx) => (
        <mesh key={`b-${idx}`} position={pos}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial
            color="#00d2ff"
            emissive="#00d2ff"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}

      {/* Nucleotide Base Connector Rungs */}
      {rungs.map((rung, idx) => {
        const mid = new THREE.Vector3().addVectors(rung.start, rung.end).multiplyScalar(0.5);
        const length = rung.start.distanceTo(rung.end);
        const direction = new THREE.Vector3().subVectors(rung.end, rung.start).normalize();
        const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

        return (
          <group key={`rung-${idx}`} position={mid} quaternion={quaternion}>
            <mesh>
              <cylinderGeometry args={[0.025, 0.025, length, 8]} />
              <meshStandardMaterial
                color="#ffffff"
                emissive="#00f5a0"
                emissiveIntensity={0.3}
                roughness={0.4}
                metalness={0.6}
                transparent
                opacity={0.75}
              />
            </mesh>
            {/* Center nucleotide bond sphere */}
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.05, 12, 12]} />
              <meshStandardMaterial
                color="#7dffd0"
                emissive="#7dffd0"
                emissiveIntensity={0.8}
                roughness={0.1}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

// Orbiting Molecular Atoms with Warmth & Glow
function FloatingMolecularClusters() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * 0.3;
    groupRef.current.rotation.y = -t;
    groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Molecule 1 - Warm Orange Bio-molecule */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5} position={[2.4, 1.8, -1]}>
        <group scale={0.75}>
          <Sphere args={[0.26, 24, 24]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#7dffd0"
              emissive="#7dffd0"
              emissiveIntensity={0.5}
              roughness={0.2}
            />
          </Sphere>
          <Sphere args={[0.16, 16, 16]} position={[0.38, 0.25, 0.1]}>
            <meshStandardMaterial color="#00f5a0" emissive="#00f5a0" emissiveIntensity={0.6} />
          </Sphere>
          <Sphere args={[0.14, 16, 16]} position={[-0.32, -0.2, 0.15]}>
            <meshStandardMaterial color="#00d2ff" emissive="#00d2ff" emissiveIntensity={0.5} />
          </Sphere>
        </group>
      </Float>

      {/* Molecule 2 - Cyan Receptor Molecule */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.2} position={[-2.2, -1.6, 0.8]}>
        <group scale={0.65}>
          <Sphere args={[0.24, 24, 24]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#00f5a0"
              emissive="#00f5a0"
              emissiveIntensity={0.7}
              roughness={0.1}
            />
          </Sphere>
          <Sphere args={[0.15, 16, 16]} position={[-0.3, 0.25, -0.1]}>
            <meshStandardMaterial color="#7dffd0" emissive="#7dffd0" emissiveIntensity={0.6} />
          </Sphere>
          <Sphere args={[0.13, 16, 16]} position={[0.28, -0.22, 0.2]}>
            <meshStandardMaterial color="#ffffff" emissive="#00f5a0" emissiveIntensity={0.4} />
          </Sphere>
        </group>
      </Float>

      {/* Molecule 3 - Violet Core */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1} position={[1.8, -2.2, -0.5]}>
        <group scale={0.55}>
          <Sphere args={[0.22, 24, 24]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#00d2ff"
              emissive="#00d2ff"
              emissiveIntensity={0.6}
              roughness={0.2}
            />
          </Sphere>
          <Sphere args={[0.14, 16, 16]} position={[0.28, 0.2, 0.1]}>
            <meshStandardMaterial color="#00f5a0" emissive="#00f5a0" emissiveIntensity={0.5} />
          </Sphere>
        </group>
      </Float>
    </group>
  );
}

// Particle stream flowing upward
function BioParticles({ count = 120 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      vel[i] = 0.005 + Math.random() * 0.015;
    }

    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes['position'] as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      array[i * 3 + 1] = array[i * 3 + 1]! + velocities[i]!;
      // Reset if particle moves past top
      if (array[i * 3 + 1]! > 5) {
        array[i * 3 + 1] = -5;
        array[i * 3] = (Math.random() - 0.5) * 8;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f5a0"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export const HeroVisual: React.FC = () => {
  const mouse = useRef<[number, number]>([0, 0]);

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = [x, y];
  };

  return (
    <div
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      onPointerMove={handlePointerMove}
      aria-label="Interactive 3D molecular DNA structure visualization"
    >
      {/* Background Soft Glow Aura */}
      <div className="absolute inset-0 bg-radial-gradient from-[#00f5a0]/15 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />
      <div className="absolute w-72 h-72 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={1.2} color="#00f5a0" />
        <pointLight position={[5, -8, 5]} intensity={0.8} color="#7dffd0" />

        <DNAHelix mouse={mouse} />
        <FloatingMolecularClusters />
        <BioParticles count={90} />
      </Canvas>

      {/* Live 3D Viewport Telemetry Badge */}
      <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#070b09]/80 border border-[#164034] backdrop-blur-md text-[11px] font-mono text-[#00f5a0]/90">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00f5a0] animate-ping" />
        <span>3D SIMULATION LIVE: 60 FPS</span>
      </div>
    </div>
  );
};
