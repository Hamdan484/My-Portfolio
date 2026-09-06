import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../data/skills'

function SkillBar({ name, level, delay, inView }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-[#F9FAFB] font-medium">{name}</span>
        <span className="font-mono text-xs text-[#94A3B8]">{level}%</span>
      </div>
      <div className="h-px bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-32 bg-[#111827]/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase"> Skills</span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The technical stack
          </h2>
          <p className="text-[#94A3B8] max-w-lg">
            Technologies I use to design, build, and deploy production-grade applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map(({ category, skills }, ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + ci * 0.1 }}
              className="p-8 rounded-xl border border-white/6 bg-[#0B1120]/60 hover:border-white/10 transition-colors"
            >
              <h3 className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase mb-8">
                {category}
              </h3>
              <div className="space-y-6">
                {skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    inView={inView}
                    delay={0.3 + ci * 0.1 + si * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
