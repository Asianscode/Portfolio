export default function AboutSection() {
  return (
    <div className="min-h-screen py-20 px-6 relative">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            👨‍🔬 About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about bridging the gap between biological research and computational innovation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <img 
                  src="/profile.png" 
                  alt="Muhammad Eshaan" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Bio and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Bio</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am Muhammad Eshaan, a dedicated biotechnologist and computational biologist with a passion for 
                merging traditional wet lab techniques with cutting-edge computational methods. My work focuses 
                on developing innovative solutions that bridge the gap between biological complexity and 
                computational power.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From petri dish to Python, I believe in the power of interdisciplinary approaches to solve 
                complex biological challenges. My expertise spans across algae cultivation, biomass modeling, 
                and the development of simulation engines that bring biological processes to life.
              </p>
            </div>

            {/* Education */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">🎓 Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">Bachelor's in Biotechnology</h4>
                  <p className="text-gray-400">Government College University Faisalabad (GCUF)</p>
                  <p className="text-gray-500 text-sm">Currently Pursuing • Focus: Biotechnology & Applied Biology</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">💼 Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">Research Assistant</h4>
                  <p className="text-gray-400">GCUF - Department of Bioinformatics & Biotechnology</p>
                  <p className="text-gray-500 text-sm">Present</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Working in the Industrial Biotech Lab's Phycol Bank, focusing on algae culture 
                    maintenance, strain isolation, and biomass optimization research.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Python Development Intern</h4>
                  <p className="text-gray-400">Cybex School of IT</p>
                  <p className="text-gray-500 text-sm">3 Months</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Gained hands-on experience in Python programming, data analysis, and software 
                    development practices for biotechnology applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/30">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Wet Lab Expertise</h3>
            <p className="text-gray-300 text-sm">
              Advanced laboratory techniques, culture maintenance, and biochemical analysis
            </p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-green-500/30">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Computational Biology</h3>
            <p className="text-gray-300 text-sm">
              Machine learning, statistical modeling, and bioinformatics analysis
            </p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-purple-500/30">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold text-purple-400 mb-2">Software Development</h3>
            <p className="text-gray-300 text-sm">
              Python, 3D visualization, simulation engines, and web applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}