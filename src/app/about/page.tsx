"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function AboutPage() {
  return (
    <>
      <Sidebar />
      <main className="lg:pl-72 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-12 pt-16 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-star-white mb-3">
              About
            </h1>
            <p className="text-lg text-star-dim">
              The story behind LLM Universe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* What is this */}
            <section className="p-6 rounded-xl bg-cosmos-800/60 border border-cosmos-600/50">
              <h2 className="font-display font-semibold text-xl text-star-white mb-3">
                What is LLM Universe?
              </h2>
              <div className="space-y-3 text-star-dim leading-relaxed">
                <p>
                  LLM Universe is a free, open-source interactive learning hub
                  designed to take anyone from zero to deeply understanding Large
                  Language Models. It&apos;s not a textbook — it&apos;s a curated
                  collection of the best resources on the internet, organized into
                  a structured learning path.
                </p>
                <p>
                  Every video embed, interactive tool, and article link has been
                  hand-picked for quality and pedagogical value. The goal is to
                  save you hundreds of hours of searching and give you a clear
                  path through a complex topic.
                </p>
              </div>
            </section>

            {/* Who made this */}
            <section className="p-6 rounded-xl bg-cosmos-800/60 border border-cosmos-600/50">
              <h2 className="font-display font-semibold text-xl text-star-white mb-3">
                Who Made This?
              </h2>
              <div className="space-y-3 text-star-dim leading-relaxed">
                <p>
                  Built by{" "}
                  <a
                    href="https://github.com/Reficul013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nebula-purple hover:underline"
                  >
                    Ateeq
                  </a>{" "}
                  — a learner who wanted a better way to navigate the vast
                  landscape of LLM knowledge. This project exists because I
                  wished something like it existed when I started learning.
                </p>
              </div>
            </section>

            {/* Credits */}
            <section className="p-6 rounded-xl bg-cosmos-800/60 border border-cosmos-600/50">
              <h2 className="font-display font-semibold text-xl text-star-white mb-3">
                Credits &amp; Acknowledgments
              </h2>
              <div className="space-y-3 text-star-dim leading-relaxed">
                <p>
                  This project stands on the shoulders of incredible educators
                  and builders:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-nebula-purple mt-1">•</span>
                    <span>
                      <strong className="text-star-white">Andrej Karpathy</strong>{" "}
                      — for making the deepest concepts accessible through his
                      legendary video series
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-nebula-blue mt-1">•</span>
                    <span>
                      <strong className="text-star-white">3Blue1Brown (Grant Sanderson)</strong>{" "}
                      — for the most beautiful math and ML visualizations ever
                      created
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-nebula-pink mt-1">•</span>
                    <span>
                      <strong className="text-star-white">Jay Alammar</strong>{" "}
                      — for the Illustrated Transformer and GPT-2 guides
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-nebula-green mt-1">•</span>
                    <span>
                      <strong className="text-star-white">Georgia Tech / Polo Club</strong>{" "}
                      — for Transformer Explainer, CNN Explainer, and GAN Lab
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-nebula-amber mt-1">•</span>
                    <span>
                      <strong className="text-star-white">Brendan Bycroft</strong>{" "}
                      — for the stunning LLM visualization at bbycroft.net
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-nebula-purple mt-1">•</span>
                    <span>
                      All the open-source tool builders, researchers, and
                      educators who make their work freely available
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contribute */}
            <section className="p-6 rounded-xl bg-nebula-purple/5 border border-nebula-purple/20">
              <h2 className="font-display font-semibold text-xl text-star-white mb-3">
                Contribute
              </h2>
              <div className="space-y-3 text-star-dim leading-relaxed">
                <p>
                  LLM Universe is open source. Found a broken link? Know an
                  amazing resource that should be included? Want to improve the
                  content?
                </p>
                <a
                  href="https://github.com/Reficul013/Large-Language-Model"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-nebula-purple text-white font-semibold text-sm hover:bg-nebula-purple/90 transition-all mt-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Contribute on GitHub
                </a>
              </div>
            </section>

            {/* Built with */}
            <section className="p-6 rounded-xl bg-cosmos-800/60 border border-cosmos-600/50">
              <h2 className="font-display font-semibold text-xl text-star-white mb-3">
                Built With
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-full bg-cosmos-700/60 text-star-dim border border-cosmos-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Back to learning */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              href="/modules/the-big-picture"
              className="inline-flex items-center gap-2 text-sm text-nebula-purple hover:underline"
            >
              ← Start learning from Module 0
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
