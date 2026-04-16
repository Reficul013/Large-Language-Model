"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getProgress, setChecklistItem } from "@/lib/progress";

interface ChecklistProps {
  moduleSlug: string;
  items: string[];
}

export default function Checklist({ moduleSlug, items }: ChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const progress = getProgress();
    setChecked(progress[moduleSlug] || {});
  }, [moduleSlug]);

  const handleToggle = (item: string) => {
    const newState = !checked[item];
    const newProgress = setChecklistItem(moduleSlug, item, newState);
    setChecked(newProgress[moduleSlug] || {});
    window.dispatchEvent(new Event("progress-updated"));
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const percentage = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-7">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-display font-semibold text-lg text-star-white">
            What You Should Know Now
          </h3>
          <p className="text-xs text-star-muted mt-0.5">
            Check off concepts as you master them
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-star-dim font-medium">
            {completedCount}/{items.length}
          </span>
          {/* Mini circular progress */}
          <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
            <circle
              cx="16" cy="16" r="13" fill="none"
              stroke="rgba(99,102,241,0.15)" strokeWidth="3"
            />
            <circle
              cx="16" cy="16" r="13" fill="none"
              stroke="#8B5CF6" strokeWidth="3"
              strokeDasharray={`${percentage * 0.817} 81.7`}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-2.5">
        {items.map((item, i) => (
          <motion.label
            key={item}
            className="checklist-item flex items-start gap-3 cursor-pointer group p-2 -mx-2 rounded-lg hover:bg-cosmos-800/30 transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <input
              type="checkbox"
              checked={!!checked[item]}
              onChange={() => handleToggle(item)}
              className="mt-0.5"
            />
            <span
              className={`text-sm leading-relaxed transition-all duration-200 ${
                checked[item]
                  ? "text-star-muted line-through opacity-60"
                  : "text-star-white group-hover:text-nebula-purple"
              }`}
            >
              {item}
            </span>
          </motion.label>
        ))}
      </div>

      {completedCount === items.length && items.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 p-4 rounded-xl bg-nebula-green/5 border border-nebula-green/20 text-center"
        >
          <span className="text-nebula-green text-sm font-medium">
            ✨ Module complete! You&apos;re ready for the next one.
          </span>
        </motion.div>
      )}
    </div>
  );
}
