import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function MainPage({ onNavigate }) {
  return (
    <>
      <Hero />
      <About />
      <Projects onNavigate={onNavigate} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
