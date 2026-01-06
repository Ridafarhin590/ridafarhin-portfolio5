"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-6 lg:px-20">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 rounded-full" />
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I’m <span className="font-semibold text-blue-600">Rida Farhin</span>,
            an aspiring Software Engineer and MCA (2026) student with hands-on
            experience in <span className="font-semibold">Full Stack & MERN development</span>.
            I enjoy building scalable applications, writing clean code, and
            creating user-friendly interfaces.
          </p>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            During my internship at{" "}
            <span className="font-semibold text-blue-600">
              SoftFlow Solutions
            </span>, I worked on real-world MERN applications, REST APIs,
            authentication flows, and assisted in integrating AI-powered
            automation features.
          </p>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I’m passionate about{" "}
            <span className="font-semibold text-blue-600">
              AI-driven technologies
            </span>, backend architecture, and strengthening my problem-solving
            skills through Data Structures & Algorithms.
          </p>
        </motion.div>

        {/* ================= HIGHLIGHTS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            { title: "Full Stack MERN", value: "Projects & Internship" },
            { title: "AI Integration", value: "Smart Automation Features" },
            { title: "DSA with Java", value: "Strong Problem Solving" },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-xl font-semibold text-blue-600">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
