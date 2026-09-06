import { Code2, BriefcaseBusiness } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <button
              onClick={() => handleNav("#home")}
              className="font-mono text-sm font-semibold text-[#3B82F6] tracking-widest uppercase hover:text-[#60A5FA] transition-colors"
            >
              <span className="text-[#94A3B8]">&lt;</span>
             Hamdan
              <span className="text-[#94A3B8]">/&gt;</span>
            </button>
            <p className="text-[#94A3B8] text-xs mt-2 max-w-xs leading-relaxed">
              MERN Stack Developer. Building reliable, modern web applications.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(href)}
                    className="text-xs text-[#94A3B8] hover:text-[#F9FAFB] transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Hamdan484"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-[#94A3B8] hover:text-[#F9FAFB] hover:border-white/20 transition-all"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href="https://linkedin.com/in/hamdan-ibrahim-907629348"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-[#94A3B8] hover:text-[#F9FAFB] hover:border-white/20 transition-all"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-[#94A3B8]">
            &copy; {new Date().getFullYear()} Hamdan Ibrahim. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[#94A3B8]/50">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
