import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WhatIDo from "./components/WhatIDo";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <Contact />
    </>
  )
}
