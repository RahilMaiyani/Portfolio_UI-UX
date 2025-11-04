import { Download, ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 relative overflow-hidden transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="mb-6 inline-block animate-fade-in">
          <div className="px-5 py-2.5 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 shadow-lg hover:scale-105 transition-transform duration-300 inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>Open to Internship Opportunities</span>
          </div>
        </div>
        
        {/* Main heading */}
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-slide-up">
          Hi, I'm Rahil Maiyani
        </h1>
        
        {/* Subheading */}
        <h2 className="mb-6 text-slate-700 dark:text-slate-300 animate-slide-up" style={{ animationDelay: '100ms' }}>
          Computer Engineering Student | UI/UX Developer
        </h2>
        
        {/* Description */}
        <p className="mb-10 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
          I design and build intuitive user interfaces with a focus on clean experience and functionality.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-12 flex-wrap animate-slide-up" style={{ animationDelay: '300ms' }}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="group px-6 py-3 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-slate-700/60 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-slate-800 dark:text-slate-200"
          >
            <span>View Projects</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
          <button 
            className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Download className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}
