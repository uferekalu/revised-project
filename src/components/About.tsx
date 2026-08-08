"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const About = () => {
  return (
    <Section id="about" background="surface">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-500/10 via-transparent to-transparent" />

      {/* Floating Decorative Orbs */}
      <div className="absolute top-10 left-6 sm:left-16 w-40 sm:w-48 h-40 sm:h-48 bg-brand-300/30 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-16 right-6 sm:right-10 w-56 sm:w-64 h-56 sm:h-64 bg-brand-500/20 rounded-full blur-3xl opacity-40 animate-float" />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12"
      >
        {/* Text Section */}
        <motion.div variants={fadeUp} className="flex-1">
          <span className="inline-block text-sm font-semibold tracking-wide uppercase mb-3 text-brand-600 dark:text-brand-400">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Who I Am
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I&apos;m{" "}
            <span className="font-semibold text-brand-600 dark:text-brand-400">
              Ufere Kalu
            </span>
            , a passionate <span className="font-semibold text-foreground">Full Stack Developer</span> and{" "}
            <span className="font-semibold text-foreground">Data Analyst</span> with a deep focus on
            building scalable, efficient, and beautiful digital solutions. I enjoy
            transforming complex problems into seamless experiences — from backend
            systems to front-end interfaces.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I have experience across a wide range of technologies — from{" "}
            <span className="font-semibold text-foreground">React, Next.js, and TypeScript</span> on
            the frontend, to <span className="font-semibold text-foreground">NestJS, Node.js, and MongoDB</span>{" "}
            on the backend. My goal is to create elegant, performant, and
            intuitive applications that make an impact.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            When I&apos;m not coding, I enjoy{" "}
            <span className="font-semibold text-foreground">analyzing data</span>, exploring new
            technologies, and contributing to open-source projects that inspire
            innovation and collaboration.
          </p>

          <div className="mt-8">
            <Button href="#projects">View My Projects</Button>
          </div>
        </motion.div>

        {/* Image / Visual Section */}
        <motion.div
          variants={fadeUp}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500 via-brand-400 to-brand-600 rounded-full blur-2xl opacity-40 animate-pulse" />
            <Image
              src="/assets/profile.jpeg"
              alt="Ufere Kalu"
              fill
              className="object-cover rounded-full border-4 border-surface-elevated shadow-2xl"
              priority
            />
          </div>

          {/* Floating icons */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-0 right-6 sm:right-10 bg-surface-elevated/90 text-brand-600 dark:text-brand-400 p-3 rounded-full shadow-lg border border-border"
          >
            💡
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-6 left-6 sm:left-10 bg-surface-elevated/90 text-brand-600 dark:text-brand-400 p-3 rounded-full shadow-lg border border-border"
          >
            ⚙️
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default About;
