"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaEye } from "react-icons/fa";
import { projectsData } from "@/data/projectData";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const ITEMS_PER_PAGE = 4;
const categories = ["All", "Web", "Mobile", "API"];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projectsData
      .filter((p) =>
        activeCategory === "All" ? true : p.tag.includes(activeCategory)
      )
      .filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

    switch (sortBy) {
      case "title-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "date-newest":
        filtered.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "date-oldest":
        filtered.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
    }

    return filtered;
  }, [searchQuery, sortBy, activeCategory]);

  const totalPages = Math.ceil(filteredAndSortedProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredAndSortedProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <Section id="projects" background="brand">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-brand-500/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-brand-400/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="My Projects"
          subtitle="A snapshot of products, APIs, and interfaces I've built end to end."
          light
        />

        {/* Category Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((cat) => (
            <Badge
              key={cat}
              interactive
              active={activeCategory === cat}
              variant="outline"
              className={
                activeCategory === cat
                  ? ""
                  : "border-white/25 text-white hover:bg-white/10"
              }
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
            >
              {cat}
            </Badge>
          ))}
        </motion.div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            style={{ color: "#ffffff" }}
            className="sm:w-1/2 bg-white/10! border-white/20! placeholder:text-white/60! focus:ring-white/40!"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 rounded-[var(--radius-md)] border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-md"
          >
            <option className="text-neutral-900" value="date-newest">Date (Newest)</option>
            <option className="text-neutral-900" value="date-oldest">Date (Oldest)</option>
            <option className="text-neutral-900" value="title-asc">Title (A - Z)</option>
            <option className="text-neutral-900" value="title-desc">Title (Z - A)</option>
          </select>
        </div>

        {/* Project Cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10"
        >
          {paginatedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
              className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-2xl group cursor-pointer bg-white/10 backdrop-blur-md border border-white/15 transition-all"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center text-white p-6"
                >
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                  <p className="text-xs text-white/60 mb-3">
                    {new Date(project.date).toISOString().split("T")[0]}
                  </p>
                  <div className="flex justify-center gap-6">
                    {project.gitUrl && (
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-brand-300 transition"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {project.previewUrl && (
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-brand-300 transition"
                      >
                        <FaEye className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>

              <div className="p-5 text-white">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm opacity-80 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center flex-wrap gap-2 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="border-white/25 text-white hover:border-white/50 hover:text-white disabled:opacity-40"
            >
              Prev
            </Button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-[var(--radius-sm)] transition-all text-sm font-semibold ${
                  currentPage === i + 1
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="border-white/25 text-white hover:border-white/50 hover:text-white disabled:opacity-40"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Projects;
