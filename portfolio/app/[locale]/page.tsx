import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
    </>
  );
}



