import { useState } from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
  color: "cyan" | "green" | "purple";
  type: "flask" | "instrument" | "reagent";
}

export default function SkillCard({ title, description, icon, color, type }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    cyan: "border-cyan-500 bg-cyan-500/10 text-cyan-300 shadow-cyan-500/20",
    green: "border-green-500 bg-green-500/10 text-green-300 shadow-green-500/20",
    purple: "border-purple-500 bg-purple-500/10 text-purple-300 shadow-purple-500/20"
  };

  const typeIcons = {
    flask: "🧪",
    instrument: "🔬",
    reagent: "⚗️"
  };

  return (
    <div
      className={cn(
        "relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer lab-equipment",
        colorClasses[color],
        isHovered && "shadow-lg transform -translate-y-2 scale-105"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Equipment type indicator */}
      <div className="absolute top-2 right-2 text-2xl opacity-50">
        {typeIcons[type]}
      </div>

      {/* Main icon */}
      <div className="text-4xl mb-4 text-center">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-2 text-center">
        {title}
      </h3>

      {/* Description tooltip */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 rounded-lg border border-gray-600 text-sm text-gray-300 whitespace-nowrap z-10 shadow-lg">
          {description}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
        </div>
      )}

      {/* Glow effect */}
      {isHovered && (
        <div className={cn(
          "absolute inset-0 rounded-xl opacity-20 -z-10",
          color === "cyan" && "glow-cyan",
          color === "green" && "glow-green",
          color === "purple" && "glow-purple"
        )} />
      )}
    </div>
  );
}
