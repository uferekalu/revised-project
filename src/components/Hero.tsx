"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.5 },
    },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-9rem)] flex items-center justify-center overflow-hidden">
      {/* 🎬 Video Background */}
      <video
        src="/assets/vid.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌈 Gradient Overlay with Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-blue-900/70 to-cyan-800/60 backdrop-blur-sm"></div>

      {/* 💫 Animated Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse top-20 left-10"></div>
        <div className="absolute w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-ping bottom-10 right-10"></div>
      </div>

      {/* 🌟 Floating Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      {/* 💬 Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse mb-6"
        >
          Full Stack Developer & Data Analyst
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="max-w-4xl bg-white/10 backdrop-blur-md text-gray-100 rounded-2xl shadow-2xl p-6 sm:p-10 mx-auto border border-white/10"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-8">
            Passionate about crafting elegant, scalable software solutions that
            merge creativity with logic. I build intelligent systems, stunning
            interfaces, and meaningful digital experiences powered by
            full-stack engineering and data-driven insights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-sm sm:text-base">
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-lg mb-3 text-cyan-300">
                Backend & DevOps
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>⚙️ Node.js, NestJS, Express.js, Python, Django</li>
                <li>🐳 Docker, Kubernetes, CI/CD automation</li>
                <li>☁️ AWS, GCP, and scalable RESTful APIs</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-lg mb-3 text-indigo-300">
                Frontend & Databases
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>🎨 React, Next.js, TypeScript, Tailwind CSS</li>
                <li>🧠 PostgreSQL, MongoDB, Firebase, Redis</li>
                <li>📱 Pixel-perfect, responsive UI/UX design</li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 border-t border-white/10 pt-6"
            >
              <h3 className="font-semibold text-lg mb-3 text-blue-300">
                Data Analysis
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  📊 Power BI, Excel, and Python for advanced analytics and
                  actionable business insights.
                </li>
                <li>🧩 Turning raw data into strategic decisions.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* 🖱️ Scroll Down Indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center"
        >
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-white/80 rounded-full"
            ></motion.div>
          </div> */}
          {/* <p className="text-xs mt-2 text-gray-300 tracking-wide">
            Scroll Down
          </p> */}
        {/* </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
