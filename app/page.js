"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden bg-white text-slate-900 dark:bg-[#020617] dark:text-slate-200">

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex items-center">
        <Hero />
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section bg-white dark:bg-[#020617]">
        <About />
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="section bg-slate-50 dark:bg-[#0f172a]"
      >
        <Experience />
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section bg-white dark:bg-[#020617]">
        <Projects />
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="section bg-slate-50 dark:bg-[#0f172a]"
      >
        <Skills />
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section
        id="certifications"
        className="section bg-white dark:bg-[#020617]"
      >
        <Certifications />
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="section bg-slate-50 dark:bg-[#0f172a]"
      >
        <Contact />
      </section>

    </main>
  );
}
