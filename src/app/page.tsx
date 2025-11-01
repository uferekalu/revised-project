"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <section data-theme="dark" id="hero">
        <Hero />
      </section>
      <section data-theme="light" id="about">
        <About />
      </section>
      <section data-theme="light" id="skills">
        <Skills />
      </section>
      <section data-theme="dark" id="projects">
        <Projects />
      </section>
      <section data-theme="light" id="contact">
        <Contact />
      </section>
    </main>
  );
}