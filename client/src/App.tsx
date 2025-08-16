import { Suspense } from "react";
import "@fontsource/inter";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import WetLabSection from "./components/WetLabSection";
import ComputationalBiologySection from "./components/ComputationalBiologySection";
import SoftwareSection from "./components/SoftwareSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FloatingParticles from "./components/FloatingParticles";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Floating background particles */}
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-xl text-cyan-400">Loading...</div>
          </div>
        }>
          {/* Hero Section */}
          <section id="hero">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about">
            <AboutSection />
          </section>

          {/* Wet Lab Section */}
          <section id="wetlab">
            <WetLabSection />
          </section>

          {/* Computational Biology Section */}
          <section id="computational">
            <ComputationalBiologySection />
          </section>

          {/* Software & Simulations Section */}
          <section id="software">
            <SoftwareSection />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <ProjectsSection />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <ContactSection />
          </section>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
