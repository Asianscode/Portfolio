import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Algae Simulation Engine",
    description: "Advanced 3D simulation platform with real-time growth modeling, environmental factor integration, and interactive cellular visualization. Features include genetic lineage tracking and biomass prediction algorithms.",
    technologies: ["Python", "OpenGL", "NumPy", "Matplotlib", "PyQt"],
    githubUrl: "https://github.com/example/algae-simulation",
    demoUrl: "https://algae-sim.demo.com",
    category: "simulation" as const,
    imageUrl: undefined
  },
  {
    title: "Biological Growth Models",
    description: "Comprehensive modeling suite achieving R² ~0.97 accuracy on biomass prediction. Implements logistic regression, exponential growth curves, and environmental factor integration for multiple algae species.",
    technologies: ["Python", "Scikit-learn", "Pandas", "SciPy", "Seaborn"],
    githubUrl: "https://github.com/example/growth-models",
    paperUrl: "https://journal.example.com/growth-modeling",
    category: "modeling" as const,
    imageUrl: undefined
  },
  {
    title: "Animal-Fungi Evolutionary Analysis",
    description: "Comparative genomics project analyzing evolutionary relationships between animal and fungal species. Features phylogenetic tree construction and conserved gene identification.",
    technologies: ["Python", "BioPython", "BLAST", "R", "Phylogeny"],
    githubUrl: "https://github.com/example/evolution-analysis",
    paperUrl: "https://journal.example.com/evolution-fungi",
    category: "analysis" as const,
    imageUrl: undefined
  },
  {
    title: "Nutrient Consumption Predictor",
    description: "Machine learning model for predicting nutrient consumption patterns in algae cultures. Integrates environmental sensors and implements ensemble methods for improved accuracy.",
    technologies: ["TensorFlow", "Pandas", "IoT Sensors", "Flask", "React"],
    githubUrl: "https://github.com/example/nutrient-predictor",
    demoUrl: "https://nutrient-pred.demo.com",
    category: "analysis" as const,
    imageUrl: undefined
  },
  {
    title: "Biotech Laboratory Dashboard",
    description: "Real-time monitoring system for laboratory equipment and culture conditions. Features automated alerts, data logging, and comprehensive analytics for research optimization.",
    technologies: ["React", "Node.js", "InfluxDB", "Grafana", "WebSockets"],
    githubUrl: "https://github.com/example/lab-dashboard",
    demoUrl: "https://lab-dash.demo.com",
    category: "dashboard" as const,
    imageUrl: undefined
  },
  {
    title: "3D Cell Morphology Analyzer",
    description: "Deep learning pipeline for automated cell morphology analysis using 3D CNNs. Processes microscopy data to classify cell types and detect morphological abnormalities.",
    technologies: ["PyTorch", "OpenCV", "3D CNN", "CUDA", "Docker"],
    githubUrl: "https://github.com/example/cell-analyzer",
    paperUrl: "https://journal.example.com/cell-morphology",
    category: "analysis" as const,
    imageUrl: undefined
  }
];

export default function ProjectsSection() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
            📂 Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of interdisciplinary projects combining wet lab expertise, computational modeling, 
            and software development to advance biological research and understanding.
          </p>
        </div>

        {/* Project Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 text-sm">
            🧬 Simulations
          </div>
          <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-300 text-sm">
            📊 Analysis
          </div>
          <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm">
            🧮 Modeling
          </div>
          <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm">
            📈 Dashboards
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              paperUrl={project.paperUrl}
              imageUrl={project.imageUrl}
              category={project.category}
            />
          ))}
        </div>

        {/* Research Impact */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-gray-600">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            🎯 Research Impact & Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">R² 0.97</div>
              <div className="text-gray-400 text-sm">Model Accuracy</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Algae Species Modeled</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-400 text-sm">Data Points Analyzed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-gray-400 text-sm">Active Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
