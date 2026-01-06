"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "DSA With Java",
    org: "Apna College",
  },
  {
    title: "Artificial Intelligence & Data Science",
    org: "Apna College",
  },
  {
    title: "Full Stack Web Development",
    org: "Apna College",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section bg-white dark:bg-[#020617]"
    >
      <div className="container mx-auto px-6 lg:px-20">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Certifications & <span className="text-blue-600">Learning</span>
          </h2>
          <div className="mt-2 h-1 w-28 bg-blue-600 rounded-full" />
        </motion.div>

        {/* ================= LIST ================= */}
        <div className="mt-12 space-y-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card flex items-center justify-between"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-800">
                  <Award className="text-blue-600 dark:text-blue-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {cert.org}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <span className="text-sm px-4 py-1 rounded-full border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400">
                Certified
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
