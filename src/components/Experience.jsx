import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, Trophy, GitPullRequest } from 'lucide-react'
import { timeline } from '../data/experience'

const typeConfig = {
  education: { icon: GraduationCap, color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
  project: { icon: GitPullRequest, color: 'text-[#3B82F6]', bg: 'bg-[#3B82F6]/10', border: 'border-[#3B82F6]/20' },
  leadership: { icon: Trophy, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
  experience: { icon: Briefcase, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
}

function TimelineItem({ item, index, inView }) {
  const { icon: Icon, color, bg, border } = typeConfig[item.type]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12"
    >
      {/* Connector line */}
      {index < 3 && (
        <div className="absolute left-4.5 top-10 bottom-0 w-px bg-white/5 -translate-x-1/2" />
      )}

      {/* Icon node */}
      <div
        className={`absolute left-0 top-1 w-9 h-9 rounded-lg border ${bg} ${border} flex items-center justify-center`}
      >
        <Icon size={16} className={color} />
      </div>

      <div className="pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-3">
          <span className="font-mono text-xs text-[#94A3B8] tracking-wide">{item.period}</span>
          <span className={`hidden sm:block w-1 h-1 rounded-full ${color.replace('text-', 'bg-')}`} />
          <span className={`font-mono text-xs ${color} tracking-wide uppercase`}>{item.type}</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-[#F9FAFB] mb-1">{item.title}</h3>
        <div className="text-sm text-[#3B82F6] mb-4 font-medium">{item.organization}</div>
        <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-32 bg-[#111827]/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase">
             Experience
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Journey so far
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-8 max-w-sm">
              A timeline of education, work, leadership, and professional experience
              that has shaped how I approach software development .
            </p>
            <div className="flex flex-col gap-3">
              {Object.entries(typeConfig).map(([type, { icon: Icon, color, bg, border }]) => (
                <div key={type} className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-md border ${bg} ${border} flex items-center justify-center`}>
                    <Icon size={13} className={color} />
                  </div>
                  <span className="text-sm text-[#94A3B8] capitalize">{type}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            {timeline.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
