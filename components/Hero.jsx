"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

/**
 * Earth loaded dynamically (SSR disabled)
 */
const Earth = dynamic(() => import("./Earth"), { ssr: false });
const handleScrollDown = () => {
  const sections = document.querySelectorAll("section");
  const currentScroll = window.scrollY;

  for (let section of sections) {
    if (section.offsetTop > currentScroll + 50) {
      section.scrollIntoView({ behavior: "smooth" });
      break;
    }
  }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden background-skyblue"
    >
      {/* ================= GRID ================= */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full min-h-[700px]">
           {/* ===== COLORFUL DOTS BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient glow */}
        <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/30 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-pink-500/30 blur-[120px]" />

        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:22px_22px] opacity-20" />
      </div>


        {/* ================= LEFT : TEXT ================= */}
        <div className="flex items-center">
          <div className="container width-100% px-6 lg:px-40 rg:px-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Rida <span className="text-primary">Farhin</span>
              </h1>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                Aspiring Software Engineer
              </h2>

              <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
                MCA (2026) student with hands-on experience in{" "}
                <span className="font-semibold text-primary">
                  Full Stack & MERN Development
                </span>
                . Passionate about scalable systems, AI-powered solutions,
                and clean UI/UX.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  View Projects
                </a>
                <a href="#contact" className="btn-outline">
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= RIGHT : FULL-WIDTH EARTH ================= */}
        <div className="relative h-[520px] md:h-[520px] w-full">
          <Earth />
        </div>

      </div>

      {/* ================= SCROLL DOWN ================= */}
      <button onClick={handleScrollDown} className="mt-1">
       <ArrowDown className="animate-bounce" size={18} />
       </button>
       <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm opacity-70">
        <span className="mb-1">Scroll Down</span>
        <ArrowDown className="animate-bounce" size={18} />
        
      </div>
    </section>
  );
}


