"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { modules } from "@/data/modules";
import { useEffect, useState } from "react";
import { getOverallProgress } from "@/lib/progress";
import Sidebar from "@/components/Sidebar";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

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
      <main className="lg:pl-72">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-purple/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nebula-blue/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-sm font-medium text-nebula-purple border border-nebula-purple/30 bg-nebula-purple/10 px-4 py-1.5 rounded-full mb-6">
                Free &amp; Open Source Learning Hub
              </span>
            </motion.div>

            <motion.h1
              className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-star-white via-cosmos-200 to-nebula-purple bg-clip-text text-transparent">
                LLM Universe
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-star-dim max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your visual, interactive guide to understanding Large Language
              Models from the ground up.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link
                href="/modules/the-big-picture"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-nebula-purple text-white font-semibold text-base hover:bg-nebula-purple/90 transition-all shadow-lg shadow-nebula-purple/25"
              >
                Start Learning
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cosmos-800 border border-cosmos-600 text-star-white font-semibold text-base hover:bg-cosmos-700 transition-all"
              >
                Browse Resources
              </Link>
            </motion.div>

            {overall > 0 && (
              <motion.div
                className="mt-8 max-w-xs mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex justify-between text-xs text-star-muted mb-1">
                  <span>Your progress</span>
                  <span>{overall}%</span>
                </div>
                <div className="h-1.5 bg-cosmos-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-nebula-purple to-nebula-blue rounded-full transition-all duration-500"
                    style={{ width: `${overall}%` }}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Who is this for */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-star-white mb-4">
              Who Is This For?
            </h2>
            <p className="text-star-dim max-w-xl mx-auto">
              Whether you&apos;re a complete beginner or a developer looking to
              deepen your understanding, this guide meets you where you are.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🎓",
                title: "Students",
                desc: "New to AI/ML? Start from zero with visual explanations and interactive tools. No prerequisites needed.",
              },
              {
                icon: "💻",
                title: "Developers",
                desc: "Using LLMs in production? Understand what's happening under the hood to build better applications.",
              },
              {
                icon: "🔍",
                title: "Curious Minds",
                desc: "Want to understand the technology shaping the future? Explore at your own pace with curated resources.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="p-6 rounded-xl bg-cosmos-800/60 border border-cosmos-600/50 hover:border-cosmos-400/50 transition-all"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="font-display font-semibold text-lg text-star-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-star-muted leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-star-white mb-4">
              The Learning Path
            </h2>
            <p className="text-star-dim max-w-xl mx-auto">
              8 modules that take you from &quot;what is an LLM?&quot; to deeply
              understanding how they work and how to use them.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-purple via-nebula-blue to-nebula-green hidden sm:block" />

            <div className="space-y-6">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.slug}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`flex items-center gap-6 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <Link
                      href={`/modules/${mod.slug}`}
                      className="group block p-5 rounded-xl bg-cosmos-800/60 border border-cosmos-600/50 hover:border-cosmos-400/50 transition-all duration-300"
                    >
                      <div
                        className={`flex items-center gap-3 mb-2 ${
                          i % 2 === 0 ? "sm:justify-end" : ""
                        }`}
                      >
                        <span
                          className="inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold"
                          style={{
                            backgroundColor: `${mod.color}20`,
                            color: mod.color,
                            border: `1px solid ${mod.color}40`,
                          }}
                        >
                          {mod.id}
                        </span>
                        <h3 className="font-display font-semibold text-star-white group-hover:text-nebula-purple transition-colors">
                          {mod.title}
                        </h3>
                      </div>
                      <p className="text-sm text-star-muted mb-2">
                        {mod.description}
                      </p>
                      <span className="text-xs text-star-dim">
                        ⏱ {mod.timeEstimate}
                      </span>
                    </Link>
                  </div>

                  <div
                    className="hidden sm:flex w-3 h-3 rounded-full flex-shrink-0 ring-4 ring-cosmos-950"
                    style={{ backgroundColor: mod.color }}
                  />

                  <div className="flex-1 hidden sm:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-cosmos-700/50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-star-muted text-sm mb-4">
              Built with the goal of making LLM knowledge accessible to
              everyone.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-star-dim">
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
            <p className="text-star-dim/50 text-xs mt-6">
              LLM Universe — Open Source
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
