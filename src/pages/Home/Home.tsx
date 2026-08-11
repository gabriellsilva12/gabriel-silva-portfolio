import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Projects />

      <Contact />
    </>
  );
}
