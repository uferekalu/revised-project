"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-9rem)] overflow-hidden">
      {/* Video Background */}
      <video
        src="/assets/vid.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/70"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-9rem)] text-center text-white px-4 sm:px-6 py-12"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          Full Stack Developer & Data Analyst
        </motion.h1>
        <motion.div
          variants={itemVariants}
          className="max-w-3xl bg-white/95 text-gray-900 rounded-lg shadow-lg p-6 sm:p-8 mx-auto w-full"
        >
          <p className="text-sm sm:text-base md:text-lg md:text-justify mb-6">
            Versatile Full Stack Developer and Data Analyst with extensive experience in building scalable, user-centric web applications and delivering actionable insights through data analysis. Leveraging agile methodologies, I craft robust backend systems, intuitive frontend interfaces, and efficient DevOps pipelines to meet client needs effectively.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-xs sm:text-sm md:text-base">
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-lg mb-2">Backend & DevOps</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">➜</span> Expert in Node.js, Nest.js, and Express.js for building scalable APIs and server-side applications.
                </li>
                <li>
                  <span className="font-semibold">➜</span> Proficient in Python and Django for rapid development of secure web applications.
                </li>
                <li>
                  <span className="font-semibold">➜</span> Skilled in DevOps with Docker and Kubernetes for containerization and orchestration.
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="font-semibold text-lg mb-2">Frontend & Databases</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">➜</span> Advanced proficiency in Next.js, React.js, Tailwind CSS, Material-UI, and Styled Components for modern, responsive UIs.
                </li>
                <li>
                  <span className="font-semibold">➜</span> Expert in relational (MySQL, PostgreSQL) and non-relational (MongoDB, AWS DynamoDB, Firebase, Redis) databases.
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="sm:col-span-2">
              <h3 className="font-semibold text-lg mb-2">Data Analysis</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">➜</span> Skilled in Power BI and Excel for data visualization, reporting, and deriving actionable business insights.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;