"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Wanderlust – Full Stack Web Application",
    description:
      "A full-stack web platform that allows users to create, view, edit, and delete property listings with authentication and image uploads.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
      "Passport.js",
      "Multer",
      "REST APIs",
    ],
    link: "#",
  },
  {
    title: "SigmaGPT – AI Chat Application (MERN)",
    description:
      "A ChatGPT-like AI chat application built using the MERN stack with real-time AI responses and smooth client–server communication.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
    ],
    link: "#",
  },
  {
    title: "Smart Weather App with AI Advice",
    description:
      "A responsive React application displaying real-time weather data with AI-driven recommendations for temperature, humidity, and alerts.",
    tech: [
      "React",
      "Material-UI",
      "OpenWeatherMap API",
      "AI Recommendations",
    ],
    link: "#",
  },
{
    title: "Mini WhatsApp – Full-Stack Chat Application with AI Assistance",
    description:
    "A full-stack chat application that allows users to create, view, edit, and delete chat messages with persistent database storage and a clean, responsive user interface.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "HTML & CSS",
      "REST APIs",
      "Method Override",
    ],
    link: "#",
  },
  {
  title: "Spotify Clone – UI Project (HTML & CSS)",
  description:
    "A Spotify-inspired web UI built completely from scratch using HTML and CSS. This project helped me understand professional website structure, layout design, navigation bars, playlist sections, and music player UI. It strengthened my fundamentals of CSS positioning, spacing, typography, color balance.",
  tech: [
    "HTML5",
    "CSS3",
    "Flexbox",
    "CSS Grid",
    "UI/UX Design",
  ],
  link: "#",
},
{
  title: "Side Navigation Bar Website",
  description:
    "My first web development project built using only HTML and CSS. This project introduced me to semantic HTML, layout structuring, hover effects, color theory, and design principles like contrast, balance, and readability. It marks the beginning of my journey toward becoming a Software Development Engineer.",
  tech: [
    "HTML5",
    "CSS3",
    "Semantic HTML",
    "Responsive Design",
  ],
  link: "#",
},

];
export default function Projects() {
  return (
    <section id="projects" className="section bg-white dark:bg-[#020617]">
      <div className="container mx-auto px-6 lg:px-20">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 rounded-full" />
        </motion.div>

        {/* ================= PROJECT GRID ================= */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card flex flex-col"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-300 flex-1">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* LINK */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
              >
                View Project <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
