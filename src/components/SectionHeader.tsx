"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  icon: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ icon, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="flex items-center gap-3 mb-6 pb-4 border-b border-cosmos-700/30"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="text-xl w-9 h-9 rounded-lg bg-cosmos-800/80 flex items-center justify-center">
        {icon}
      </span>
      <div>
        <h2 className="font-display font-semibold text-lg text-star-white">{title}</h2>
        {subtitle && (
          <p className="text-xs text-star-muted mt-0.5">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
