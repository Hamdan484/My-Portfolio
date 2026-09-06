import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Layers, Lightbulb, Users } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    label: 'Clean Code',
    desc: 'Readable, maintainable, and thoughtfully structured.',
  },
  {
    icon: Layers,
    label: 'Full Stack',
    desc: 'Comfortable across the entire application layer.',
  },
  {
    icon: Lightbulb,
    label: 'Problem Solver',
    desc: 'Focused on outcomes, not just implementations.',
  },
  {
    icon: Users,
    label: 'Team Player',
    desc: 'Experienced collaborating in agile environments.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase"> About</span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left — text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-8"
            >
              Crafting experiences
              <br />
              <span className="text-[#94A3B8]">with purpose.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-[#94A3B8] leading-relaxed"
            >
              <p>
                I'm a MERN Stack Developer based in Ghana with a deep interest in building
                software that solves real problems. My journey started with curiosity about how websites
                worked — and quickly turned into a passion for building them.
              </p>
              <p>
                Today, I specialize in designing and developing full-stack web applications using
                MongoDB, Express.js, React, and Node.js. I care about every layer of the stack:
                from a smooth, accessible user interface to an efficient, secure API.
              </p>
              <p>
                Outside of writing code, I contribute to open-source projects, write about web
                development. I believe great software comes from
                genuine curiosity, rigorous craft, and a commitment to continuous improvement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 flex gap-10"
            >
              {[
                { value: '10+', label: 'Projects' },
                { value: '2+', label: 'Years coding' },
               
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-3xl font-bold text-[#3B82F6]">{value}</div>
                  <div className="font-mono text-xs text-[#94A3B8] mt-1 tracking-wide">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="group p-6 rounded-xl border border-white/6 bg-[#111827]/60 hover:border-[#3B82F6]/30 hover:bg-[#111827] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center mb-4 group-hover:bg-[#3B82F6]/20 transition-colors">
                  <Icon size={18} className="text-[#3B82F6]" />
                </div>
                <div className="font-semibold text-[#F9FAFB] text-sm mb-1.5">{label}</div>
                <div className="text-[#94A3B8] text-xs leading-relaxed">{desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
