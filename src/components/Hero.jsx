import { motion } from "framer-motion";
import { Code2, BriefcaseBusiness, ArrowDown, Terminal } from "lucide-react";
import profileImage from "../assets/images/profileImage.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const codeLines = [
  { indent: 0, content: "const developer = {", color: "text-[#F9FAFB]" },
  { indent: 1, content: "name: 'Alex Johnson',", color: "text-[#94A3B8]" },
  {
    indent: 1,
    content: "role: 'MERN Stack Developer',",
    color: "text-[#94A3B8]",
  },
  { indent: 1, content: "skills: [", color: "text-[#94A3B8]" },
  {
    indent: 2,
    content: "'React', 'Node.js', 'MongoDB',",
    color: "text-[#60A5FA]",
  },
  { indent: 1, content: "],", color: "text-[#94A3B8]" },
  { indent: 1, content: "status: 'open to work',", color: "text-emerald-400" },
  { indent: 0, content: "}", color: "text-[#F9FAFB]" },
];

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.div
              {...fadeUp(0.1)}
              className="flex items-center gap-2 mb-6"
            >
              <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Building the <span className="text-[#3B82F6]">full stack,</span>
              <br />
              front to back.
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-10"
            >
              I'm{" "}
              <strong className="text-[#F9FAFB] font-medium">
                Hamdan Ibrahim
              </strong>
              , a MERN Stack Developer who designs and ships scalable web
              applications From elegant digital experiences to robust
              server-side architectures.
            </motion.p>

            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={scrollToWork}
                className="px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-semibold rounded transition-all duration-200 shadow-lg shadow-[#3B82F6]/20 hover:shadow-[#3B82F6]/30"
              >
                View My Work
              </button>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 border border-white/15 text-[#F9FAFB] text-sm font-medium rounded hover:bg-white/5 hover:border-white/25 transition-all duration-200"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div {...fadeUp(0.55)} className="flex items-center gap-5">
              <a
                href="https://github.com/Hamdan484"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F9FAFB] transition-colors text-sm group"
              >
                <ion-icon name="logo-github"></ion-icon>
                <span>GitHub</span>
              </a>
              <div className="w-px h-4 bg-white/10" />
              <a
                href="https://linkedin.com/in/hamdan-ibrahim-907629348"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F9FAFB] transition-colors text-sm group"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right — code card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative rounded-full border border-white/8 bg-steal-500 backdrop-blur overflow-hidden shadow-2xl">
              <img src={profileImage} alt="Hamdan's profile image" />
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#94A3B8]"
        >
          <span className="font-mono text-xs tracking-widest uppercase">
            scroll
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
