"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { modules } from "@/data/modules";
import { useEffect, useState } from "react";
import { getOverallProgress } from "@/lib/progress";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [overall, setOverall] = useState(0);

  useEffect(() => {
    setOverall(getOverallProgress(modules));
    const handler = () => setOverall(getOverallProgress(modules));
    window.addEventListener("progress-updated", handler);
    return () => window.removeEventListener("progress-updated", handler);
  }, []);

  return (
    <>
      <Sidebar />
      <main className="lg:pl-[280px]">
        {/* ============ HERO ============ */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
          {/* Animated nebula blobs */}
          <div className="nebula-glow w-[600px] h-[600px] bg-nebula-purple top-[-10%] left-[10%]" />
          <div
            className="nebula-glow w-[500px] h-[500px] bg-nebula-blue bottom-[-5%] right-[5%]"
            style={{ animationDelay: "7s" }}
          />
          <div
            className="nebula-glow w-[300px] h-[300px] bg-nebula-pink top-[60%] left-[50%]"
            style={{ animationDelay: "14s" }}
          />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium text-nebula-purple border border-nebula-purple/20 bg-nebula-purple/5 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-nebula-green animate-pulse" />
                Free &amp; Open Source Learning Hub
              </span>
            </motion.div>

            <motion.h1
              className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <span className="gradient-text">LLM</span>
              <br />
              <span className="gradient-text-vivid">Universe</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-star-dim max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your visual, interactive guide to understanding{" "}
              <span className="text-star-white font-medium">
                Large Language Models
              </span>{" "}
              from the ground up.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/modules/the-big-picture"
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-nebula-purple to-nebula-purple/80 text-white font-semibold text-base transition-all shadow-xl shadow-nebula-purple/20 hover:shadow-nebula-purple/30 hover:scale-[1.02]"
              >
                <span>Start Learning</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass text-star-white font-semibold text-base hover:border-nebula-purple/30 transition-all"
              >
                Browse Resources
              </Link>
            </motion.div>

            {overall > 0 && (
              <div className="mt-10 max-w-xs mx-auto">
                <div className="flex justify-between text-xs text-star-muted mb-2">
                  <span>Your progress</span>
                  <span className="text-star-dim font-medium">{overall}%</span>
                </div>
                <div className="h-2 bg-cosmos-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${overall}%`,
                      background: "linear-gradient(90deg, #8B5CF6, #06B6D4)",
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-5 h-5 text-star-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </section>

        {/* ============ WHO IS THIS FOR ============ */}
        <section className="px-6 py-24 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-nebula-blue uppercase tracking-widest mb-3 block">
              Designed for Everyone
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-5">
              Who Is This For?
            </h2>
            <p className="text-star-dim max-w-lg mx-auto text-lg">
              Whether you&apos;re a complete beginner or a developer looking to
              deepen your understanding.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: "🎓",
                title: "Students",
                desc: "New to AI/ML? Start from zero with visual explanations and interactive tools. No prerequisites needed.",
                gradient: "from-nebula-purple/10 to-transparent",
                border: "hover:border-nebula-purple/30",
              },
              {
                icon: "💻",
                title: "Developers",
                desc: "Using LLMs in production? Understand what's happening under the hood to build better applications.",
                gradient: "from-nebula-blue/10 to-transparent",
                border: "hover:border-nebula-blue/30",
              },
              {
                icon: "🔍",
                title: "Curious Minds",
                desc: "Want to understand the technology shaping the future? Explore at your own pace with curated resources.",
                gradient: "from-nebula-pink/10 to-transparent",
                border: "hover:border-nebula-pink/30",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`glass-card p-7 rounded-2xl h-full ${card.border}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-5 text-2xl`}
                >
                  {card.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-star-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-star-muted leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider mx-6 max-w-6xl lg:mx-auto" />

        {/* ============ LEARNING PATH ============ */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-nebula-amber uppercase tracking-widest mb-3 block">
              Structured Curriculum
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-5">
              The Learning Path
            </h2>
            <p className="text-star-dim max-w-lg mx-auto text-lg">
              8 modules that take you from &quot;what is an LLM?&quot; to deeply
              understanding how they work.
            </p>
          </div>

          <div className="space-y-3">
            {modules.map((mod) => (
              <Link
                key={mod.slug}
                href={`/modules/${mod.slug}`}
                className="group glass-card block rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all group-hover:scale-110"
                    style={{
                      backgroundColor: `${mod.color}15`,
                      color: mod.color,
                      border: `1px solid ${mod.color}30`,
                    }}
                  >
                    {mod.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display font-semibold text-base sm:text-lg text-star-white group-hover:text-nebula-purple transition-colors">
                        {mod.title}
                      </h3>
                      <span className="text-[11px] text-star-muted bg-cosmos-800/80 px-2.5 py-0.5 rounded-full hidden sm:inline">
                        {mod.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-star-muted mt-1 truncate">
                      {mod.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-xs text-star-muted hidden sm:block">
                      ⏱ {mod.timeEstimate}
                    </span>
                    <svg
                      className="w-4 h-4 text-star-muted group-hover:text-nebula-purple group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="px-6 py-24">
          <div className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-12 relative overflow-hidden">
            <div className="nebula-glow w-[300px] h-[300px] bg-nebula-purple top-[-50%] left-[-10%]" />
            <div className="nebula-glow w-[200px] h-[200px] bg-nebula-blue bottom-[-30%] right-[-5%]" />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-4">
                Ready to Begin?
              </h2>
              <p className="text-star-dim mb-8 max-w-md mx-auto">
                Start with the big picture and work your way through
                transformers, training, and practical skills.
              </p>
              <Link
                href="/modules/the-big-picture"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-nebula-purple to-nebula-blue text-white font-semibold text-base transition-all shadow-xl hover:shadow-nebula-purple/20 hover:scale-[1.02]"
              >
                Start Module 0
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="px-6 py-10 border-t border-cosmos-700/30">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-star-muted text-xs">
              LLM Universe — Making LLM knowledge accessible to everyone.
            </p>
            <div className="flex items-center gap-6 text-xs text-star-dim">
              <a
                href="https://github.com/Reficul013/Large-Language-Model"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-star-white transition-colors"
              >
                GitHub
              </a>
              <Link
                href="/about"
                className="hover:text-star-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/resources"
                className="hover:text-star-white transition-colors"
              >
                Resources
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
