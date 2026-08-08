"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        src="/assets/vid.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/85 via-brand-950/75 to-neutral-950/85 backdrop-blur-[2px]" />

      {/* Animated Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-brand-500/25 rounded-full blur-3xl animate-pulse top-16 left-6 sm:left-10" />
        <div className="absolute w-64 h-64 bg-brand-400/20 rounded-full blur-3xl animate-pulse bottom-10 right-6 sm:right-10" />
      </div>

      {/* Particle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />

      {/* Main Content */}
      <motion.div
        variants={staggerContainer(0.15, 0.2)}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 py-24"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-white/10 border border-white/15 text-brand-200 backdrop-blur-md mb-6"
        >
          Available for new opportunities
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-brand-200 to-brand-400 bg-clip-text text-transparent drop-shadow-lg mb-6 max-w-4xl"
        >
          Full Stack Developer &amp; Data Analyst
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="max-w-4xl w-full bg-white/10 backdrop-blur-md text-gray-100 rounded-[var(--radius-xl)] shadow-2xl p-6 sm:p-10 mx-auto border border-white/10"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-8">
            Passionate about crafting elegant, scalable software solutions that
            merge creativity with logic. I build intelligent systems, stunning
            interfaces, and meaningful digital experiences powered by
            full-stack engineering and data-driven insights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-sm sm:text-base">
            <motion.div variants={fadeUp}>
              <h3 className="font-semibold text-lg mb-3 text-brand-200">
                Backend &amp; DevOps
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Node.js, NestJS, Express.js, Python, Django</li>
                <li>Docker, Kubernetes, CI/CD automation</li>
                <li>AWS, GCP, and scalable RESTful APIs</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-semibold text-lg mb-3 text-brand-300">
                Frontend &amp; Databases
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>React, Next.js, TypeScript, Tailwind CSS</li>
                <li>PostgreSQL, MongoDB, Firebase, Redis</li>
                <li>Pixel-perfect, responsive UI/UX design</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="sm:col-span-2 border-t border-white/10 pt-6"
            >
              <h3 className="font-semibold text-lg mb-3 text-brand-200">
                Data Analysis
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  Power BI, Excel, and Python for advanced analytics and
                  actionable business insights.
                </li>
                <li>Turning raw data into strategic decisions.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <motion.a
            href="#projects"
            whileHover={{ y: 4 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1"
            aria-label="Scroll to projects"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white/80 rounded-full"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
