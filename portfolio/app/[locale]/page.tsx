import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/Hero";
import AnimationLayout from "@/components/layouts/AnimationLayout";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";


export default function Home() {
  return (
    <AnimationLayout>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
      </AnimationLayout>
  );
}



