"use client";

import Link from "next/link";
import { modules } from "@/data/modules";

interface ModuleNavProps {
  currentSlug: string;
}

export default function ModuleNav({ currentSlug }: ModuleNavProps) {
  const currentIndex = modules.findIndex((m) => m.slug === currentSlug);
  const prev = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const next = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  return (
    <div className="flex items-center justify-between gap-4 pt-8 border-t border-cosmos-700/50">
      {prev ? (
        <Link
          href={`/modules/${prev.slug}`}
          className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-cosmos-800/60 border border-cosmos-600/50 hover:border-cosmos-400/50 transition-all"
        >
          <svg className="w-4 h-4 text-star-muted group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-left">
            <p className="text-[11px] text-star-muted">Previous</p>
            <p className="text-sm font-medium text-star-white">{prev.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/modules/${next.slug}`}
          className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-cosmos-800/60 border border-cosmos-600/50 hover:border-cosmos-400/50 transition-all"
        >
          <div className="text-right">
            <p className="text-[11px] text-star-muted">Next</p>
            <p className="text-sm font-medium text-star-white">{next.title}</p>
          </div>
          <svg className="w-4 h-4 text-star-muted group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <Link
          href="/resources"
          className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-nebula-purple/10 border border-nebula-purple/30 hover:bg-nebula-purple/20 transition-all"
        >
          <div className="text-right">
            <p className="text-[11px] text-nebula-purple">You did it!</p>
            <p className="text-sm font-medium text-star-white">Explore Resources</p>
          </div>
          <svg className="w-4 h-4 text-nebula-purple group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
