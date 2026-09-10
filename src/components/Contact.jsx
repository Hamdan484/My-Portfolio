import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Mail, Code2, BriefcaseBusiness } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);

        setStatus("sent");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error(data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase">
            Contact
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let's work
              <br />
              <span className="text-[#94A3B8]">together.</span>
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-10 max-w-sm">
              Do you have a project we can work on? or do you have a question?
              Feel free to reach out to me using the form or contact information
              below.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center">
                  <Mail size={15} className="text-[#3B82F6]" />
                </div>
                <span>ibrahimhamsik3@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center">
                  <MapPin size={15} className="text-[#3B82F6]" />
                </div>
                <span>Ghana — Open to remote</span>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/Hamdan484"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-[#94A3B8] hover:text-[#F9FAFB] hover:border-white/20 transition-all"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a
                  href="https://linkedin.com/in/hamdan-ibrahim-907629348"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-[#94A3B8] hover:text-[#F9FAFB] hover:border-white/20 transition-all"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl border border-white/6 bg-[#111827]/60 p-8"
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-4">
                  <Send size={20} className="text-emerald-400" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  Message sent
                </h3>
                <p className="text-[#94A3B8] text-sm">
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs text-[#94A3B8] tracking-wide mb-2 uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-[#0B1120]/60 border border-white/8 rounded-lg px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs text-[#94A3B8] tracking-wide mb-2 uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#0B1120]/60 border border-white/8 rounded-lg px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-[#94A3B8] tracking-wide mb-2 uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-[#0B1120]/60 border border-white/8 rounded-lg px-4 py-3 text-sm text-[#F9FAFB] placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#3B82F6]/50 focus:ring-1 focus:ring-[#3B82F6]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-60 text-white text-sm font-semibold py-3 rounded-lg transition-all shadow-lg shadow-[#3B82F6]/20"
                >
                  <Send size={15} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
