import { Mail, Linkedin, Github, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Let's connect! I'm open to discussing opportunities, projects, or just having a chat.
        </p>
        
        {/* Horizontal Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email */}
          <a 
            href="mailto:justin@example.com"
            className="group relative block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative flex flex-col items-center p-6 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/60 dark:border-slate-700/60 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-5 w-5" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-1">Email</p>
              <p className="text-slate-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                rahilmaiyani0@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a 
            href="tel:+918799141046"
            className="group relative block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative flex flex-col items-center p-6 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/60 dark:border-slate-700/60 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-5 w-5 " />
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-1">Phone</p>
              <p className="text-slate-900 dark:text-white text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                +91 87991 41046
              </p>
            </div>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/rahil-maiyani"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative flex flex-col items-center p-6 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/60 dark:border-slate-700/60 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="p-3 rounded-full  mb-3 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="h-5 w-5" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-1">LinkedIn</p>
              <p className="text-slate-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Connect
              </p>
            </div>
          </a>
          
          {/* GitHub */}
          <a 
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative flex flex-col items-center p-6 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/60 dark:border-slate-700/60 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="p-3 rounded-full bg-gradient-to-r from-slate-700 to-slate-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                <Github className="h-5 w-5  " />
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-1">GitHub</p>
              <p className="text-slate-900 dark:text-white text-center group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                View Code
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
