"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

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

        {/* ================= CONTACT CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-8 shadow-sm"
        >
          <div className="grid gap-8 md:grid-cols-2">

            {/* LEFT INFO */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-800">
                  <Mail className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <p className="font-medium text-slate-900 dark:text-white">
                    ridafarhin59@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-slate-800">
                  <Phone className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Phone
                  </p>
                  <p className="font-medium text-slate-900 dark:text-white">
                    +91 7771896998
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT LINKS */}
            <div className="space-y-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="flex items-center gap-4 rounded-xl border border-blue-600 px-6 py-4 text-blue-600 transition hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500"
              >
                <Linkedin />
                <span className="font-medium">LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-4 rounded-xl border border-blue-600 px-6 py-4 text-blue-600 transition hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500"
              >
                <Github />
                <span className="font-medium">GitHub Profile</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================= CONTACT FORM CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto rounded-2xl bg-white dark:bg-[#0b1220] p-8 shadow-lg"
        >
          <form className="space-y-6">

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
