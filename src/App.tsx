import { useState, useEffect } from "react";
import { FloatingNav } from "./components/FloatingNav";
import { MainPage } from "./pages/MainPage";
import { CafeKioskCaseStudy } from "./pages/CafeKioskCaseStudy";
import { MusicPlayerCaseStudy } from "./pages/MusicPlayerCaseStudy";
import { Toaster } from "./components/ui/sonner";
import "./style.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // ✅ Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "cafe-kiosk":
        return <CafeKioskCaseStudy onNavigate={setCurrentPage} />;
      case "music-player":
        return <MusicPlayerCaseStudy onNavigate={setCurrentPage} />;
      default:
        return <MainPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'dark bg-slate-900' : 'bg-white'}`}>
      <FloatingNav 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      {renderPage()}
      <Toaster />
    </div>
  );
}
