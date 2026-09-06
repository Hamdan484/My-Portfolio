import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

function ProjectCard({ project, index, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group rounded-xl border border-white/6 bg-[#111827]/60 overflow-hidden hover:border-[#3B82F6]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#3B82F6]/5"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#0B1120]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
        {/* Index tag */}
        <span className="absolute top-4 right-4 font-mono text-xs text-[#3B82F6] bg-[#0B1120]/80 border border-[#3B82F6]/30 px-2.5 py-1 rounded">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="font-display text-lg font-semibold text-[#F9FAFB] mb-3 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs text-[#60A5FA] bg-[#3B82F6]/8 border border-[#3B82F6]/15 px-2.5 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#F9FAFB] bg-[#3B82F6] hover:bg-[#2563EB] px-4 py-2 rounded transition-colors"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#94A3B8] hover:text-[#F9FAFB] border border-white/10 hover:border-white/20 px-4 py-2 rounded transition-all"
          >
            <Code2 size={13} />
            Repository
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase">
             Projects
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Selected work
            </h2>
            <p className="text-[#94A3B8] max-w-md">
              A curated set of projects that showcase my breadth across the full
              stack.
            </p>
          </motion.div>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-1.5 text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors shrink-0"
          >
            View all on GitHub
            <ArrowUpRight size={15} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
