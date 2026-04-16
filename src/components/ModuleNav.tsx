"use client";

import Link from "next/link";
import { modules } from "@/data/modules";

interface ModuleNavProps {
  currentSlug: string;
}

export default function ModuleNav({ currentSlug }: ModuleNavProps) {
  const currentIndex = modules.findIndex((m) => m.slug === currentSlug);
  const prev = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const next =
    currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  return (
    <div className="flex items-stretch gap-4 pt-8">
      {prev ? (
        <Link
          href={`/modules/${prev.slug}`}
          className="group flex-1 glass-card flex items-center gap-3 px-5 py-4 rounded-2xl"
        >
          <svg
            className="w-4 h-4 text-star-muted group-hover:text-nebula-purple group-hover:-translate-x-0.5 transition-all flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <div className="text-left">
            <p className="text-[10px] text-star-muted uppercase tracking-wider">
              Previous
            </p>
            <p className="text-sm font-display font-medium text-star-white group-hover:text-nebula-purple transition-colors">
              {prev.title}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={`/modules/${next.slug}`}
          className="group flex-1 glass-card flex items-center justify-end gap-3 px-5 py-4 rounded-2xl"
        >
          <div className="text-right">
            <p className="text-[10px] text-star-muted uppercase tracking-wider">
              Next
            </p>
            <p className="text-sm font-display font-medium text-star-white group-hover:text-nebula-purple transition-colors">
              {next.title}
            </p>
          </div>
          <svg
            className="w-4 h-4 text-star-muted group-hover:text-nebula-purple group-hover:translate-x-0.5 transition-all flex-shrink-0"
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
        </Link>
      ) : (
        <Link
          href="/resources"
          className="group flex-1 flex items-center justify-end gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-nebula-purple/5 to-nebula-blue/5 border border-nebula-purple/15 hover:border-nebula-purple/30 transition-all"
        >
          <div className="text-right">
            <p className="text-[10px] text-nebula-purple uppercase tracking-wider">
              Congratulations!
            </p>
            <p className="text-sm font-display font-medium text-star-white">
              Explore All Resources
            </p>
          </div>
          <svg
            className="w-4 h-4 text-nebula-purple group-hover:translate-x-0.5 transition-all flex-shrink-0"
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
        </Link>
      )}
    </div>
  );
}
