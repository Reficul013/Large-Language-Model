"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-8xl mb-6">🌌</div>
        <h1 className="font-display font-bold text-5xl gradient-text mb-4">
          Lost in Space
        </h1>
        <p className="text-star-dim text-lg mb-8">
          This page doesn&apos;t exist in the LLM Universe. Let&apos;s get you
          back on the learning path.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-nebula-purple text-white font-semibold hover:bg-nebula-purple/90 transition-all shadow-lg shadow-nebula-purple/20"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
