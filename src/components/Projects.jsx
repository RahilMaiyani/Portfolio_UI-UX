import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Sparkles } from "lucide-react";
import cafe_kiosk_image from "../images/Cafe_Kiosk_SS/Hero.png";
import music_image from "../images/MUSIC_PLAYER_SS/Hero.png";

const projects = [
  {
    id: "cafe-kiosk",
    title: "Café Kiosk Web App",
    problem: "Ordering at small cafés is slow and confusing.",
    solution: "Designed a self-service kiosk UI with simple menu browsing, cart selection, and a clean payment flow.",
    role: "UI/UX Design + Frontend",
    tools: ["Figma", "MERN", "Bootstrap", "JavaScript"],
    outcome: "Reduced steps in ordering & improved visual clarity.",
    image: cafe_kiosk_image
  },
  {
    id: "music-player",
    title: "Music Player Web App",
    problem: "Most music players are cluttered or too basic.",
    solution: "Built a modern UI with a big centered player, smooth animations, and playlist support.",
    role: "UI/UX + Frontend",
    tools: ["Figma", "React", "Vite"],
    outcome: "Minimalist layout, responsive design, simple user flow.",
    image: music_image
  }
];

export function Projects({ onNavigate }) {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200/50 dark:border-blue-500/30 mb-4">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-slate-600 dark:text-slate-300">Case Studies</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are my main projects showcasing UI/UX design and frontend development skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => onNavigate(project.id)}
              className="group relative block text-left w-full animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated gradient background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full group-hover:scale-[1.02]">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white mb-1">{project.title}</h3>
                    <p className="text-white/90">{project.role}</p>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 mb-1">Problem</p>
                    <p className="text-slate-700 dark:text-slate-300">{project.problem}</p>
                  </div>
                  
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 mb-3">Tools & Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <div 
                          key={toolIndex}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-blue-200/50 dark:border-blue-500/30 text-slate-700 dark:text-slate-300 hover:scale-110 hover:border-blue-400 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* View Case Study Button */}
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                      <span>View Case Study</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
