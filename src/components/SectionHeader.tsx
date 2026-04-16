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
      className="flex items-center gap-3 mb-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-2xl">{icon}</span>
      <div>
        <h2 className="font-display font-semibold text-xl text-star-white">{title}</h2>
        {subtitle && <p className="text-sm text-star-muted mt-0.5">{subtitle}</p>}
      </div>
    </motion.div>
  );
}
