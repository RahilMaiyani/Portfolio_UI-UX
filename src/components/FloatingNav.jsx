import { useState } from "react";
import { Menu, X, Home, User, Briefcase, Code, Mail, Sun, Moon } from "lucide-react";


export function FloatingNav({ currentPage, onNavigate, isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);


  const navItems = [
    { icon: Home, label: "Home", id: "hero" },
    { icon: User, label: "About", id: "about" },
    { icon: Briefcase, label: "Projects", id: "projects" },
    { icon: Code, label: "Skills", id: "skills" },
    { icon: Mail, label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    if (currentPage !== "home") {
      onNavigate("home");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const GoToTop = () => {
    if (currentPage !== "home") {
      onNavigate("home");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      {/* Logo - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <div className="logo-pill px-4 py-2 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-md border border-white/30 dark:border-slate-700/30 shadow-lg" onClick={GoToTop}>
          <span className="logo-text text-slate-900 dark:text-white">RM</span>
        </div>
      </div>

      {/* Floating Control Buttons - Top Right */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
        {/* Combined Pill Container */}
        <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-md border border-white/30 dark:border-slate-700/30 shadow-lg">
          {/* Theme Toggle Button */}
          {/* <button
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-full bg-white/40 dark:bg-slate-700/40 hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-amber-500 group-hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
            )}
          </button> */}

          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full bg-white/40 dark:bg-slate-700/40 hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all duration-300 group"
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-slate-900 dark:text-white group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="h-5 w-5 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Floating Navigation Window */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Navigation Menu */}
          <div className="fixed top-24 right-6 z-50 w-64 bg-white/20 dark:bg-slate-800/20 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-2xl overflow-hidden animate-slide-down">
            <div className="p-6">
              <h3 className="mb-4 text-slate-900 dark:text-white">Navigation</h3>
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/30 dark:bg-slate-700/30 backdrop-blur-sm border border-white/40 dark:border-slate-600/40 hover:bg-white/50 dark:hover:bg-slate-700/50 hover:scale-105 transition-all duration-200 text-left group"
                    >
                      <Icon className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110 transition-all duration-200" />
                      <span className="text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
