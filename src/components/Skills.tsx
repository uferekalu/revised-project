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
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

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
  return (
    <Section id="skills" background="base">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-500/8 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="What I Work With"
          title="Skills & Tools"
          subtitle="A toolkit built for shipping scalable, production-grade software end to end."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((group) => (
            <motion.div key={group.category} variants={fadeUp}>
              <Card className="p-6 h-full">
                <h3 className="text-xl font-semibold text-brand-600 dark:text-brand-400 mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/8 text-foreground border border-brand-500/15 cursor-default"
                    >
                      <span className="text-xl text-brand-600 dark:text-brand-400">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
