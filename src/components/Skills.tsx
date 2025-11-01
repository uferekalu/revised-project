"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiKubernetes,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "ReactJS", icon: <SiReact /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "NodeJS", icon: <SiNodedotjs /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "DevOps & Containerization",
    skills: [
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Docker", icon: <SiDocker /> },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.7, delay: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="relative w-full py-24 bg-gradient-to-br from-white via-gray-50 to-cyan-50 text-gray-800 overflow-hidden"
    >
      {/* Subtle grid and glow */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-200/20 via-transparent to-transparent"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12"
        >
          Skills & Tools
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 hover:shadow-lg transition-all border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-indigo-50 text-gray-700 border border-cyan-100 shadow-sm hover:shadow-md cursor-default transition-all"
                  >
                    <span className="text-xl text-cyan-600">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
