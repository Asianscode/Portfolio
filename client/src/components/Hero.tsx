import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import DNAHelix from "./DNAHelix";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 biotech-gradient opacity-50" />
      
      {/* 3D DNA Helix */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
            <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00ff00" />
            <DNAHelix />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
          Muhammad Eshaan
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-slate-300">
          Biotechnologist | Computational Biologist | Developer
        </h2>
        
        <div className="relative">
          <p className="text-xl md:text-2xl text-cyan-300 mb-12 italic font-light">
            "From Petri Dish to Python — I build biology in both wet labs and simulations."
          </p>
          
          {/* Animated quotation marks */}
          <div className="absolute -top-4 -left-4 text-6xl text-cyan-400/30 font-serif">
            "
          </div>
          <div className="absolute -bottom-8 -right-4 text-6xl text-cyan-400/30 font-serif">
            "
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg font-semibold text-slate-900 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
