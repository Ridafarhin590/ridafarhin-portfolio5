"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Download,
  FileText,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-6 lg:px-20">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 rounded-full" />
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            I’m open to internships, full-time roles, collaborations, and learning
            opportunities. Let’s connect!
          </p>
        </motion.div>

        {/* ================= CONTACT INFO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-8 shadow-sm"
        >
          <div className="grid gap-8 md:grid-cols-2">

            {/* LEFT */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-800">
                  <Mail className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">ridafarhin59@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-800">
                  <MapPin className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">India · Bhopal Madhya Pradesh</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="flex items-center gap-4 rounded-xl border border-blue-600 px-6 py-4 text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                <Linkedin />
                LinkedIn Profile
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-4 rounded-xl border border-blue-600 px-6 py-4 text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                <Github />
                GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================= RESUME SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* LEFT */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">
              Resume Overview
            </h3>

            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li>• MCA (2026) – Software Developer</li>
              <li>• Full Stack MERN Developer</li>
              <li>• Experience with REST APIs & Databases</li>
              <li>• AI-powered application development</li>
              <li>• Strong DSA & problem-solving skills</li>
            </ul>

            <a
              href="https://drive.google.com/file/d/1e6oXUUt4Bn1T3PPqeKuIJPQcx3gKdS73/view?usp=sharing"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-900 transition"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* RIGHT */}
          <div className="card flex flex-col items-center justify-center text-center">
            <FileText size={60} className="text-blue-600 mb-4" />
            <p className="text-slate-600 dark:text-slate-300">
              Resume Preview
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              PDF preview supported on desktop devices
            </p>
            <a
              href="https://drive.google.com/file/d/1e6oXUUt4Bn1T3PPqeKuIJPQcx3gKdS73/view?usp=sharing"
              target="_blank"
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              View Resume
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
