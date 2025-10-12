import About from "../Components/About/About";
import Hero from "../Components/Hero/Hero";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About />
    </>
  );
}
