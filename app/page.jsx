import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Hero from "@/components/Hero";
import PatternBackground from "@/components/ui/PatternBackground";
import SplineScene from "@/components/SplineScene";
import About from "@/components/About";
import Biography from "@/components/Biography";
import Projects from "@/components/Projects";
import SkillsAndServices from "@/components/SkillsAndServices";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      <Navbar />

      <PatternBackground />

      <Spotlight className="-top-8 -left-12 h-[500px] !opacity-[50%] md:h-[700px] md:left-40 lg:left-64" />
      <Spotlight
        className="top-20 -left-16 h-[450px] !opacity-[35%] md:h-[600px] md:-left-8"
        fill="#61CC9C"
      />

      <Hero />
      <SplineScene />
      <About />
      <Biography />
      <SkillsAndServices />
      <Projects />
      <Contact />
    </main>
  );
}
