import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Interactive 3D Cell Component
function InteractiveCell({ position, color, id }: { position: [number, number, number], color: string, id: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() + id) * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      
      // Pulsing effect
      const scale = hovered ? 1.3 : 1.0 + Math.sin(state.clock.getElapsedTime() * 2 + id) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <icosahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial
        color={hovered ? "#ffffff" : color}
        emissive={color}
        emissiveIntensity={hovered ? 0.5 : 0.2}
        wireframe={clicked}
      />
      
      {/* Glow effect when hovered */}
      {hovered && (
        <mesh scale={[1.5, 1.5, 1.5]}>
          <icosahedronGeometry args={[0.5, 1]} />
          <meshBasicMaterial color={color} transparent opacity={0.2} />
        </mesh>
      )}
    </mesh>
  );
}

const tools = [
  { name: "Python", icon: "🐍", description: "Core language for scientific computing" },
  { name: "Pandas", icon: "🐼", description: "Data manipulation and analysis" },
  { name: "NumPy", icon: "🔢", description: "Numerical computing foundation" },
  { name: "Matplotlib", icon: "📊", description: "Comprehensive plotting library" },
  { name: "Seaborn", icon: "🎨", description: "Statistical data visualization" },
  { name: "PyTorch", icon: "🔥", description: "Deep learning framework" },
  { name: "TensorFlow", icon: "🧠", description: "Machine learning platform" },
  { name: "OpenGL", icon: "🎮", description: "3D graphics and visualization" },
];

export default function SoftwareSection() {
  return (
    <div className="min-h-screen py-20 px-6 relative">
      {/* Background with interactive 3D cells */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ffff" />
            <pointLight position={[-10, -10, 10]} intensity={0.5} color="#ff00ff" />
            
            {/* Interactive cell grid */}
            {Array.from({ length: 20 }, (_, i) => (
              <InteractiveCell
                key={i}
                id={i}
                position={[
                  (Math.random() - 0.5) * 20,
                  (Math.random() - 0.5) * 20,
                  (Math.random() - 0.5) * 10
                ]}
                color={['#00ffff', '#00ff00', '#ff00ff'][i % 3]}
              />
            ))}
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            🛠️ Software & Simulations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building sophisticated simulation engines and analytical tools that bring biological 
            processes to life through interactive visualizations and real-time modeling.
          </p>
        </div>

        {/* Algae Simulation Engine Showcase */}
        <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-8 mb-16 border border-cyan-500/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              🧬 Algae Simulation Engine
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Interactive OpenGL-powered visualizations with real-time growth modeling, 
              family tree tracking, and environmental factor simulation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-3xl mb-2">🌊</div>
              <h4 className="font-semibold text-cyan-300 mb-2">Real-time Growth</h4>
              <p className="text-sm text-gray-400">Dynamic biomass calculation with environmental feedback</p>
            </div>
            
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-3xl mb-2">🌳</div>
              <h4 className="font-semibold text-green-300 mb-2">Family Trees</h4>
              <p className="text-sm text-gray-400">Generational tracking and genetic lineage visualization</p>
            </div>
            
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-purple-300 mb-2">Interactive UI</h4>
              <p className="text-sm text-gray-400">Click, hover, and explore 3D cellular environments</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            🔧 Technology Stack
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group p-4 bg-slate-800/50 rounded-lg border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-700/50"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-1">{tool.name}</h4>
                  <p className="text-xs text-gray-400">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">📱 PWA Dashboards</h3>
            <p className="text-gray-300 mb-4">
              Progressive web applications for real-time data monitoring and biological system control.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Responsive design across all devices</li>
              <li>• Real-time data synchronization</li>
              <li>• Offline functionality</li>
              <li>• Interactive data visualization</li>
            </ul>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-bold text-purple-400 mb-4">🖥️ Desktop Tools</h3>
            <p className="text-gray-300 mb-4">
              Cross-platform applications for advanced modeling and simulation workflows.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• High-performance computing integration</li>
              <li>• Advanced 3D rendering capabilities</li>
              <li>• Batch processing and automation</li>
              <li>• Scientific data export formats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
