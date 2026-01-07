"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Cpu,
  GitBranch,
  Shield,
} from "lucide-react";

const SKILLS = [
  {
    icon: <Code size={28} />,
    title: "Programming Languages",
    items: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    icon: <Server size={28} />,
    title: "Frontend",
    items: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS",  "Bootstrap", "Material UI"],
  },
  {
    icon: <Database size={28} />,
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Cloudinary"],
  },
  {
    icon: <Cpu size={28} />,
    title: "AI & Tools",
    items: ["OpenAI API", "AI Automation", "AI Tools"],
  },
  {
    icon: <GitBranch size={28} />,
    title: "Tools & Workflow",
    items: ["Git & GitHub", "VS Code", "Postman", "npm"],
  },
  {
    icon: <Shield size={28} />,
    title: "Concepts",
    items: ["Core DSA", "MVC Architecture", "Authentication", "Authorization"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-6 lg:px-20">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="mt-0 h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        {/* ================= SKILL CARDS ================= */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="mb-4 text-primary">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {skill.title}
              </h3>

              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                {skill.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
