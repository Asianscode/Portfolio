import SkillCard from "./SkillCard";

const wetLabSkills = [
  {
    title: "Media Preparation",
    description: "BG-11, BBM, Hoagland's, Zurich media for various algae cultures",
    icon: "🧪",
    color: "cyan" as const,
    type: "reagent" as const
  },
  {
    title: "Pipetting & Precision",
    description: "Accurate liquid handling and sample preparation techniques",
    icon: "🔬",
    color: "green" as const,
    type: "instrument" as const
  },
  {
    title: "Gel Electrophoresis",
    description: "DNA/RNA analysis and protein separation techniques",
    icon: "⚡",
    color: "purple" as const,
    type: "instrument" as const
  },
  {
    title: "Spectrophotometry",
    description: "Optical density measurements and biomass quantification",
    icon: "📊",
    color: "cyan" as const,
    type: "instrument" as const
  },
  {
    title: "Culture Maintenance",
    description: "Sterile technique and optimal growth condition management",
    icon: "🌱",
    color: "green" as const,
    type: "flask" as const
  },
  {
    title: "Strain Isolation",
    description: "Wild sampling and strain optimization protocols",
    icon: "🔍",
    color: "purple" as const,
    type: "flask" as const
  },
  {
    title: "Carbohydrate Extraction",
    description: "Biochemical analysis and metabolite extraction methods",
    icon: "⚗️",
    color: "cyan" as const,
    type: "reagent" as const
  },
  {
    title: "Microscopy",
    description: "Cell morphology analysis and live cell imaging",
    icon: "🔬",
    color: "green" as const,
    type: "instrument" as const
  }
];

export default function WetLabSection() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            🧬 Wet Lab Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From sterile technique to advanced biochemical analysis, my hands-on laboratory experience 
            spans diverse microorganism cultivation and analytical methodologies.
          </p>
        </div>

        {/* Lab Bench Style Container */}
        <div className="relative">
          {/* Lab bench background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl transform skew-y-1"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent rounded-3xl"></div>
          
          {/* Skills Grid */}
          <div className="relative z-10 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wetLabSkills.map((skill, index) => (
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
          </div>
          
          {/* Lab equipment decorative elements */}
          <div className="absolute top-4 left-4 text-4xl opacity-20">🧪</div>
          <div className="absolute top-4 right-4 text-4xl opacity-20">🔬</div>
          <div className="absolute bottom-4 left-4 text-4xl opacity-20">⚗️</div>
          <div className="absolute bottom-4 right-4 text-4xl opacity-20">🧬</div>
        </div>

        {/* Lab Philosophy */}
        <div className="mt-16 text-center">
          <blockquote className="text-lg italic text-cyan-300 max-w-2xl mx-auto">
            "Precision in the lab translates to precision in the data. Every pipette tip, 
            every culture condition, every measurement contributes to the larger scientific narrative."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
