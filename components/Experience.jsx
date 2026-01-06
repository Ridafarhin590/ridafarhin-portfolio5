"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="section bg-slate-50 dark:bg-[#0f172a]">
      <div className="container mx-auto px-6 lg:px-20">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 rounded-full" />
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 relative border-l-2 border-blue-200 dark:border-slate-700 pl-8"
        >
          {/* TIMELINE ITEM */}
          <div className="relative mb-12">

            {/* DOT */}
            <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-blue-600" />

            {/* CARD */}
            <div className="card">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Software Engineer Intern
              </h3>

              <p className="mt-1 text-blue-600 font-medium">
                SoftFlow Solutions
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Jan 2025 – Jun 2025
              </p>

              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>
                  Contributed to full-stack{" "}
                  <span className="font-semibold">MERN</span> development,
                  building scalable and maintainable web applications.
                </li>
                <li>
                  Developed and consumed{" "}
                  <span className="font-semibold">RESTful APIs</span> using
                  Node.js, Express.js, and MongoDB.
                </li>
                <li>
                  Assisted in integrating{" "}
                  <span className="font-semibold text-blue-600">
                    AI-powered features
                  </span>{" "}
                  such as smart data handling and automation workflows.
                </li>
                <li>
                  Collaborated with senior developers on debugging, performance
                  optimization, and code reviews.
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
