import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
  imageUrl?: string;
  category: "simulation" | "analysis" | "modeling" | "dashboard";
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  paperUrl,
  imageUrl,
  category
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors = {
    simulation: "border-cyan-500 bg-cyan-500/5",
    analysis: "border-green-500 bg-green-500/5",
    modeling: "border-purple-500 bg-purple-500/5",
    dashboard: "border-blue-500 bg-blue-500/5"
  };

  const categoryIcons = {
    simulation: "🧬",
    analysis: "📊",
    modeling: "🧮",
    dashboard: "📈"
  };

  return (
    <div
      className={cn(
        "relative p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-xl",
        categoryColors[category],
        isHovered && "transform -translate-y-2"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category indicator */}
      <div className="absolute top-4 right-4 text-2xl">
        {categoryIcons[category]}
      </div>

      {/* Project image placeholder */}
      <div className="w-full h-48 bg-slate-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-6xl opacity-30">
            {categoryIcons[category]}
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-2 text-white">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-slate-700 text-gray-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-gray-700">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github size={16} />
            <span className="text-sm">Code</span>
          </a>
        )}
        
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Demo</span>
          </a>
        )}
        
        {paperUrl && (
          <a
            href={paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Paper</span>
          </a>
        )}
      </div>
    </div>
  );
}
