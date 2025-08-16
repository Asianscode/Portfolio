import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import SkillCard from "./SkillCard";

// Neural Network Background Component
function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  // Generate neural network nodes and connections
  const nodes = [];
  const connections = [];
  
  // Create layers
  const layers = [8, 12, 16, 12, 8]; // Neural network architecture
  let nodeIndex = 0;
  
  for (let layer = 0; layer < layers.length; layer++) {
    const nodeCount = layers[layer];
    const x = (layer - layers.length / 2) * 3;
    
    for (let node = 0; node < nodeCount; node++) {
      const y = (node - nodeCount / 2) * 0.8;
      const z = Math.sin(layer + node) * 0.5;
      
      nodes.push(
        <mesh key={nodeIndex} position={[x, y, z]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial
            color={layer === 0 ? "#00ffff" : layer === layers.length - 1 ? "#ff00ff" : "#00ff00"}
            emissive={layer === 0 ? "#004444" : layer === layers.length - 1 ? "#440044" : "#004400"}
            emissiveIntensity={0.3}
          />
        </mesh>
      );
      
      // Create connections to next layer
      if (layer < layers.length - 1) {
        const nextLayerCount = layers[layer + 1];
        const nextX = x + 3;
        
        for (let nextNode = 0; nextNode < nextLayerCount; nextNode++) {
          const nextY = (nextNode - nextLayerCount / 2) * 0.8;
          const nextZ = Math.sin(layer + 1 + nextNode) * 0.5;
          
          connections.push([x, y, z, nextX, nextY, nextZ]);
        }
      }
      
      nodeIndex++;
    }
  }

  return (
    <group ref={groupRef}>
      {nodes}
      
      {/* Neural connections */}
      {connections.map((connection, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array(connection)}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#666666" opacity={0.3} transparent />
        </line>
      ))}
    </group>
  );
}

const computationalSkills = [
  {
    title: "Biomass Modeling",
    description: "Logistic regression and curve fitting for growth predictions",
    icon: "📈",
    color: "cyan" as const,
    type: "instrument" as const
  },
  {
    title: "Nutrient Simulations",
    description: "Consumption kinetics and optimization modeling",
    icon: "🧮",
    color: "green" as const,
    type: "reagent" as const
  },
  {
    title: "CNNs (1D/2D/3D)",
    description: "Convolutional neural networks for biological data analysis",
    icon: "🧠",
    color: "purple" as const,
    type: "instrument" as const
  },
  {
    title: "RNN & LSTM",
    description: "Sequential modeling for time-series biological data",
    icon: "🔄",
    color: "cyan" as const,
    type: "instrument" as const
  },
  {
    title: "GRU & GPR",
    description: "Gated units and Gaussian process regression",
    icon: "⚡",
    color: "green" as const,
    type: "flask" as const
  },
  {
    title: "PCA & Clustering",
    description: "Dimensionality reduction and pattern discovery",
    icon: "🎯",
    color: "purple" as const,
    type: "reagent" as const
  },
  {
    title: "SHAP Analysis",
    description: "Model explainability and feature importance",
    icon: "🔍",
    color: "cyan" as const,
    type: "instrument" as const
  },
  {
    title: "Ensemble Methods",
    description: "Random forests, boosting, and model combination",
    icon: "🌳",
    color: "green" as const,
    type: "flask" as const
  }
];

export default function ComputationalBiologySection() {
  return (
    <div className="min-h-screen py-20 px-6 relative">
      {/* Background Neural Network */}
      <div className="absolute inset-0 opacity-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
            <NeuralNetwork />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            💻 Computational Biology & AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Bridging biological complexity with computational power through machine learning, 
            statistical modeling, and advanced data analysis techniques.
          </p>
          
          {/* Highlight Banner */}
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full border border-green-500/30">
            <span className="text-green-300 font-semibold">
              🔗 Bridging biological data ↔ AI models
            </span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {computationalSkills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              color={skill.color}
              type={skill.type}
            />
          ))}
        </div>

        {/* Key Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-green-500/30">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2 text-green-400">High Accuracy Models</h3>
            <p className="text-gray-300">R² ~0.97 fits on complex biomass growth data</p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/30">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-bold mb-2 text-purple-400">Multi-Scale Analysis</h3>
            <p className="text-gray-300">From molecular to ecosystem-level modeling</p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/30">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Explainable AI</h3>
            <p className="text-gray-300">SHAP and interpretable models for biological insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}
