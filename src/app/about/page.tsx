"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function AboutPage() {
  return (
    <>
      <Sidebar />
      <main className="lg:pl-[280px] min-h-screen">
        {/* Header */}
        <div className="border-b border-cosmos-700/30 bg-gradient-to-b from-nebula-blue/5 to-transparent">
          <div className="max-w-3xl mx-auto px-6 pt-16 pb-10 lg:pt-12">
            <div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-3">
                About
              </h1>
              <p className="text-lg text-star-dim">
                The story behind LLM Universe.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {/* What is this */}
            <section className="glass-card p-7 rounded-2xl">
              <h2 className="font-display font-semibold text-xl text-star-white mb-4">
                What is LLM Universe?
              </h2>
              <div className="space-y-3 text-star-dim leading-relaxed text-[15px]">
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
            <section className="glass-card p-7 rounded-2xl">
              <h2 className="font-display font-semibold text-xl text-star-white mb-4">
                Who Made This?
              </h2>
              <div className="text-star-dim leading-relaxed text-[15px]">
                <p>
                  Built by{" "}
                  <a
                    href="https://github.com/Reficul013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nebula-purple hover:underline font-medium"
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
            <section className="glass-card p-7 rounded-2xl">
              <h2 className="font-display font-semibold text-xl text-star-white mb-4">
                Credits &amp; Acknowledgments
              </h2>
              <div className="space-y-3 text-star-dim leading-relaxed text-[15px]">
                <p>
                  This project stands on the shoulders of incredible educators:
                </p>
                <ul className="space-y-2.5 ml-1">
                  {[
                    { name: "Andrej Karpathy", desc: "legendary video series on LLMs", color: "#8B5CF6" },
                    { name: "3Blue1Brown (Grant Sanderson)", desc: "beautiful math and ML visualizations", color: "#06B6D4" },
                    { name: "Jay Alammar", desc: "Illustrated Transformer and GPT-2 guides", color: "#EC4899" },
                    { name: "Georgia Tech / Polo Club", desc: "Transformer Explainer, CNN Explainer, GAN Lab", color: "#10B981" },
                    { name: "Brendan Bycroft", desc: "stunning LLM visualization at bbycroft.net", color: "#F59E0B" },
                  ].map((credit) => (
                    <li key={credit.name} className="flex items-start gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: credit.color }}
                      />
                      <span>
                        <strong className="text-star-white font-medium">
                          {credit.name}
                        </strong>{" "}
                        — {credit.desc}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-cosmos-400" />
                    <span>
                      All the open-source tool builders, researchers, and
                      educators who make their work freely available
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contribute */}
            <section className="p-7 rounded-2xl bg-gradient-to-br from-nebula-purple/5 to-nebula-blue/5 border border-nebula-purple/15">
              <h2 className="font-display font-semibold text-xl text-star-white mb-4">
                Contribute
              </h2>
              <div className="space-y-3 text-star-dim leading-relaxed text-[15px]">
                <p>
                  LLM Universe is open source. Found a broken link? Know an
                  amazing resource? Want to improve the content?
                </p>
                <a
                  href="https://github.com/Reficul013/Large-Language-Model"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-nebula-purple to-nebula-purple/80 text-white font-semibold text-sm hover:shadow-lg hover:shadow-nebula-purple/20 transition-all mt-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Contribute on GitHub
                </a>
              </div>
            </section>

            {/* Built with */}
            <section className="glass-card p-7 rounded-2xl">
              <h2 className="font-display font-semibold text-xl text-star-white mb-4">
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
                    className="text-xs px-3 py-1.5 rounded-full bg-cosmos-800/60 text-star-dim border border-cosmos-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Back to learning */}
          <div className="mt-10 text-center">
            <Link
              href="/modules/the-big-picture"
              className="inline-flex items-center gap-2 text-sm text-nebula-purple hover:underline"
            >
              ← Start learning from Module 0
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
