import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MINT = new THREE.Color("#00f5a0");
const CYAN = new THREE.Color("#00d2ff");

function useScrollProgress() {
  const ref = useRef(0);
  useFrame(() => {
    if (typeof window === "undefined") return;
    const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 1.2)));
    ref.current += (p - ref.current) * 0.08;
  });
  return ref;
}

function HelixPoints({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScrollProgress();

  const PAIRS = 130;
  const PER_RUNG = 7;
  const COUNT = PAIRS * (2 + PER_RUNG);

  const { positions, colors, base } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const meta = new Float32Array(COUNT * 3); // t, strandSign, rungOffset(-1..1)
    let i = 0;
    const c = new THREE.Color();

    for (let p = 0; p < PAIRS; p++) {
      const t = (p / (PAIRS - 1)) * 2 - 1;
      // backbone A + B
      for (const sign of [1, -1]) {
        meta[i * 3] = t;
        meta[i * 3 + 1] = sign;
        meta[i * 3 + 2] = sign;
        c.copy(sign > 0 ? MINT : CYAN);
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
        i++;
      }
      // rung particles between the strands
      for (let r = 0; r < PER_RUNG; r++) {
        const o = (r / (PER_RUNG - 1)) * 2 - 1;
        meta[i * 3] = t;
        meta[i * 3 + 1] = 0;
        meta[i * 3 + 2] = o;
        c.copy(MINT).lerp(CYAN, (o + 1) / 2).multiplyScalar(0.75);
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
        i++;
      }
    }
    return { positions: pos, colors: col, base: meta };
  }, [COUNT]);

  useFrame((state) => {
    const pts = pointsRef.current;
    if (!pts) return;
    const time = state.clock.elapsedTime;
    const s = scroll.current;

    const radius = 1.35;
    const height = 7.4;
    // untwist: turns shrink as user scrolls
    const turns = 2.4 * (1 - s * 0.85);
    const attr = pts.geometry.attributes["position"] as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;

    for (let i = 0; i < COUNT; i++) {
      const t = base[i * 3]!;
      const off = base[i * 3 + 2]!;
      const isBackbone = base[i * 3 + 1] !== 0;
      const angle = t * Math.PI * turns + time * 0.25;
      const breathe = 1 + Math.sin(time * 0.9 + t * 4) * 0.03;
      const r = radius * breathe * (isBackbone ? 1 : Math.abs(off));
      const a = off >= 0 ? angle : angle + Math.PI;
      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = t * (height / 2) * (1 + s * 0.18);
      arr[i * 3 + 2] = Math.sin(a) * r;
    }
    attr.needsUpdate = true;

    const g = groupRef.current;
    if (g) {
      g.rotation.y += 0.0042;
      g.rotation.x = THREE.MathUtils.lerp(
        g.rotation.x,
        mouse.current[1] * 0.22 + s * 0.85,
        0.06,
      );
      g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, mouse.current[0] * 0.22 - s * 0.5, 0.06);
      g.scale.setScalar(1 - s * 0.12);
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.075}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function AmbientField({ count = 140 }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 9;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      vel[i] = 0.004 + Math.random() * 0.012;
    }
    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame(() => {
    if (!ref.current) return;
    const attr = ref.current.geometry.attributes["position"] as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] = arr[i * 3 + 1]! + velocities[i]!;
      if (arr[i * 3 + 1]! > 5) {
        arr[i * 3 + 1] = -5;
        arr[i * 3] = (Math.random() - 0.5) * 9;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00d2ff"
        transparent
        opacity={0.4}
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
    mouse.current = [
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -(((e.clientY - rect.top) / rect.height) * 2 - 1),
    ];
  };

  return (
    <div
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center"
      onPointerMove={handlePointerMove}
      role="img"
      aria-label="Interactive 3D double-helix particle simulation that untwists as you scroll"
    >
      <div className="absolute w-72 h-72 bg-[#00f5a0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-96 h-96 bg-[#00d2ff]/[0.07] rounded-full blur-3xl pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <HelixPoints mouse={mouse} />
        <AmbientField count={120} />
      </Canvas>

      {/* Glassmorphic telemetry badge */}
      <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-[#00f5a0]/20 backdrop-blur-md text-[11px] font-mono text-[#00f5a0]/90">
        <span className="relative flex w-1.5 h-1.5">
          <span className="absolute inline-flex w-full h-full rounded-full bg-[#00f5a0] opacity-75 animate-ping" />
          <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#00f5a0]" />
        </span>
        <span>3D SIMULATION LIVE: 60 FPS</span>
      </div>
    </div>
  );
};
