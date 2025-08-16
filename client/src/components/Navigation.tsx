import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Home", icon: "🏠" },
  { id: "about", label: "👨‍🔬 About", icon: "👨‍🔬" },
  { id: "wetlab", label: "🧬 Wet Lab", icon: "🧬" },
  { id: "computational", label: "💻 Computational Biology", icon: "💻" },
  { id: "software", label: "🛠️ Software & Simulations", icon: "🛠️" },
  { id: "projects", label: "📂 Projects", icon: "📂" },
  { id: "contact", label: "📞 Contact", icon: "📞" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500",
        "bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 rounded-2xl",
        "shadow-lg shadow-cyan-500/20",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
    >
      <div className="flex items-center space-x-1 p-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium",
              "hover:bg-cyan-500/20 hover:text-cyan-300",
              activeSection === item.id
                ? "bg-cyan-500/30 text-cyan-300 shadow-lg shadow-cyan-500/30"
                : "text-slate-300"
            )}
          >
            <span className="hidden md:inline">{item.label}</span>
            <span className="md:hidden text-lg">{item.icon}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
