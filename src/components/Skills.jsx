import { Palette, Code, Wrench, Sparkles } from "lucide-react";

const skillsData = {
  design: ["Figma", "Prototyping", "User Research", "Design Systems"],
  frontend: ["HTML5", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap CSS", "Responsive Design"],
  tools: ["GitHub", "VS Code", "Git", "REST APIs"]
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200/50 dark:border-blue-500/30 mb-4">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-slate-600 dark:text-slate-300">Toolkit</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies for designing and building modern user experiences.
          </p>
        </div>
        
        {/* Unified Skills Display */}
        <div className="relative group">
          {/* Animated gradient background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow"></div>
          
          <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* UI/UX Design Tools */}
            <div className="mb-10 animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <Palette className="h-6 w-6" />
                </div>
                <h3 className="text-slate-900 dark:text-white">UI/UX Design</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.design.map((skill, index) => (
                  <div
                    key={index}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-200/50 dark:border-blue-500/30 text-slate-700 dark:text-slate-200 hover:scale-110 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 cursor-default animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Development */}
            <div className="mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-slate-900 dark:text-white">Frontend Development</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-200/50 dark:border-purple-500/30 text-slate-700 dark:text-slate-200 hover:scale-110 hover:shadow-lg hover:border-purple-400 dark:hover:border-purple-400 transition-all duration-300 cursor-default animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Workflow */}
            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-6 w-6 " />
                </div>
                <h3 className="text-slate-900 dark:text-white">Tools & Workflow</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.tools.map((skill, index) => (
                  <div
                    key={index}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 border border-orange-200/50 dark:border-orange-500/30 text-slate-700 dark:text-slate-200 hover:scale-110 hover:shadow-lg hover:border-orange-400 dark:hover:border-orange-400 transition-all duration-300 cursor-default animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
