"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { modules } from "@/data/modules";
import { getModuleProgress, getOverallProgress } from "@/lib/progress";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  const [overall, setOverall] = useState(0);

  const updateProgress = () => {
    const map: Record<string, number> = {};
    for (const mod of modules) {
      map[mod.slug] = getModuleProgress(mod.slug, mod.checklist.length);
    }
    setProgressMap(map);
    setOverall(getOverallProgress(modules));
  };

  useEffect(() => {
    updateProgress();
    window.addEventListener("progress-updated", updateProgress);
    return () => window.removeEventListener("progress-updated", updateProgress);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: "✦" },
    ...modules.map((m) => ({
      href: `/modules/${m.slug}`,
      label: `${m.title}`,
      icon: m.id.toString(),
      color: m.color,
      progress: progressMap[m.slug] || 0,
      moduleId: m.id,
    })),
    { href: "/resources", label: "Resources", icon: "📚" },
    { href: "/about", label: "About", icon: "ℹ️" },
  ];

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center hover:border-nebula-purple/30 transition-all"
        aria-label="Toggle navigation"
      >
        <svg className="w-5 h-5 text-star-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] z-40 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-cosmos-900/80 backdrop-blur-2xl border-r border-cosmos-700/30">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 px-5 py-5 border-b border-cosmos-700/30 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-nebula-purple to-nebula-blue flex items-center justify-center shadow-lg shadow-nebula-purple/20">
              <span className="text-white text-sm font-bold">LU</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-base text-star-white leading-tight group-hover:text-nebula-purple transition-colors">
                LLM Universe
              </h1>
              <p className="text-[10px] text-star-muted tracking-wider uppercase">
                Learning Hub
              </p>
            </div>
          </Link>

          {/* Overall progress */}
          <div className="px-5 py-3 border-b border-cosmos-700/30">
            <div className="flex justify-between text-[11px] text-star-muted mb-2">
              <span className="uppercase tracking-wider">Progress</span>
              <span className="text-star-dim font-medium">{overall}%</span>
            </div>
            <div className="h-1.5 bg-cosmos-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #8B5CF6, #06B6D4, #10B981)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${overall}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto py-2 px-3">
            <ul className="space-y-0.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const hasProgress = "progress" in item;
                const hasModuleId = "moduleId" in item;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] transition-all duration-200 group ${
                        isActive
                          ? "bg-nebula-purple/10 text-star-white"
                          : "text-star-dim hover:text-star-white hover:bg-cosmos-800/50"
                      }`}
                    >
                      {/* Active indicator line */}
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-active"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-nebula-purple"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {hasModuleId ? (
                        <div className="relative">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold flex-shrink-0 transition-all ${
                              isActive ? "shadow-md" : ""
                            }`}
                            style={{
                              backgroundColor: `${(item as { color: string }).color}${isActive ? "25" : "15"}`,
                              color: (item as { color: string }).color,
                              border: `1px solid ${(item as { color: string }).color}${isActive ? "50" : "25"}`,
                            }}
                          >
                            {item.icon}
                          </div>
                          {/* Progress ring */}
                          {(item as { progress: number }).progress > 0 && (
                            <svg className="absolute -top-0.5 -right-0.5 w-3 h-3" viewBox="0 0 12 12">
                              <circle cx="6" cy="6" r="5" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" />
                              <circle
                                cx="6" cy="6" r="5" fill="none"
                                stroke={(item as { color: string }).color}
                                strokeWidth="1.5"
                                strokeDasharray={`${(item as { progress: number }).progress * 0.314} 31.4`}
                                strokeLinecap="round"
                                transform="rotate(-90 6 6)"
                              />
                              {(item as { progress: number }).progress === 100 && (
                                <circle cx="6" cy="6" r="2.5" fill="#10B981" />
                              )}
                            </svg>
                          )}
                        </div>
                      ) : (
                        <span className="w-7 text-center flex-shrink-0 text-sm">
                          {item.icon}
                        </span>
                      )}
                      <span className="flex-1 truncate font-medium">
                        {hasModuleId && (
                          <span className="text-star-muted mr-1 text-[11px]">
                            {(item as { moduleId: number }).moduleId}.
                          </span>
                        )}
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="px-5 py-4 border-t border-cosmos-700/30">
            <a
              href="https://github.com/Reficul013/Large-Language-Model"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] text-star-muted hover:text-star-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
