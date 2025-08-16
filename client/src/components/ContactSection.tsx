import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            📞 Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or discussing the intersection 
            of biology and technology? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Email */}
          <a
            href="mailto:eshaanmuhammad363@gmail.com"
            className="group p-6 bg-slate-800/50 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:bg-slate-700/50 hover:transform hover:-translate-y-2"
          >
            <div className="text-center">
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-xs break-all px-2">eshaanmuhammad363@gmail.com</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Asianscode"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-slate-800/50 rounded-xl border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:bg-slate-700/50 hover:transform hover:-translate-y-2"
          >
            <div className="text-center">
              <Github className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">@Asianscode</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-eshaan-380645374"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-slate-800/50 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:bg-slate-700/50 hover:transform hover:-translate-y-2"
          >
            <div className="text-center">
              <Linkedin className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect & Network</p>
            </div>
          </a>

          {/* CV/Resume */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-slate-800/50 rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:bg-slate-700/50 hover:transform hover:-translate-y-2"
          >
            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">CV</h3>
              <p className="text-gray-400 text-sm">Download Resume</p>
            </div>
          </a>
        </div>

        {/* Research Interests */}
        <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 mb-16">
          <h3 className="text-2xl font-bold text-center mb-6 text-cyan-400">
            🔬 Research Interests & Collaboration Areas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Current Focus</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Algae biomass optimization modeling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Machine learning for biological systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  3D visualization of cellular processes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Environmental factor impact analysis
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-4">Collaboration Opportunities</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Interdisciplinary research projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Software development for labs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Data analysis and modeling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Educational technology development
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-6">
            Ready to explore the future of biotechnology together?
          </p>
          <a
            href="mailto:eshaanmuhammad363@gmail.com?subject=Research Collaboration Inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Start a Conversation
          </a>
        </div>
      </div>
    </div>
  );
}
