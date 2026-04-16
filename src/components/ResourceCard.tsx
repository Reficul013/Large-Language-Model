"use client";

import { motion } from "framer-motion";

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
  type: "video" | "interactive" | "link";
}

const typeBadge = {
  video: { label: "Video", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  interactive: { label: "Interactive", color: "bg-nebula-purple/20 text-nebula-purple border-nebula-purple/30" },
  link: { label: "Reading", color: "bg-nebula-blue/20 text-nebula-blue border-nebula-blue/30" },
};

export default function ResourceCard({
  title,
  description,
  url,
  icon,
  type,
}: ResourceCardProps) {
  const badge = typeBadge[type];

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl bg-cosmos-800/60 border border-cosmos-600/50 p-5 hover:border-cosmos-400/50 hover:bg-cosmos-800 transition-all duration-300"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h4 className="font-display font-semibold text-star-white group-hover:text-nebula-purple transition-colors">
              {title}
            </h4>
            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${badge.color}`}
            >
              {badge.label}
            </span>
          </div>
          <p className="text-star-muted text-sm leading-relaxed">{description}</p>
          <span className="inline-flex items-center gap-1 mt-3 text-xs text-star-dim group-hover:text-nebula-purple transition-colors">
            Open resource
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </div>
    </motion.a>
  );
}
