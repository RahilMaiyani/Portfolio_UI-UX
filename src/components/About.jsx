import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200/50 dark:border-blue-500/30 mb-4">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-slate-600 dark:text-slate-300">Introduction</span>
          </div>
          <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group animate-slide-up">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMTQ5NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="UI/UX Design Workspace"
                className="w-full h-auto relative transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <p className="text-slate-600 dark:text-slate-400">
              I'm a <span className="text-slate-900 dark:text-white">Computer Engineering student</span> passionate about building intuitive digital experiences. I enjoy designing and developing user interfaces using <span className="text-slate-900 dark:text-white">Figma, HTML/CSS, React, and modern design systems</span>.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400">
              Currently looking for <span className="text-slate-900 dark:text-white">internship opportunities in UI/UX development</span> where I can contribute to creating user-centered designs and bring them to life through clean, functional code.
            </p>
            
            <div className="pt-4">
              <h3 className="mb-4 text-slate-900 dark:text-white">What I Focus On</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <span>Clean, intuitive user interface design</span>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <span>Responsive and accessible web development</span>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <span>User research and problem-solving</span>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <span>Prototyping and iterative design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
