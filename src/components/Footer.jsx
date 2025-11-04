import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center ">
        <p className="flex items-center justify-center gap-2 mb-2 group">
          Built with <Heart className="h-4 w-4 text-red-500 fill-red-500 group-hover:scale-125 transition-transform duration-300 animate-pulse-slow" /> by Rahil
        </p>
        <p className="text-slate-400 dark:text-slate-500">
          © 2025 Rahil. Designed in Figma, Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
