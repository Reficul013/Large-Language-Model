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

  return (
    <div className="rounded-xl bg-cosmos-800/60 border border-cosmos-600/50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-lg text-star-white">
          What You Should Know Now
        </h3>
        <span className="text-sm text-star-muted">
          {completedCount}/{items.length}
        </span>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <motion.label
            key={item}
            className="checklist-item flex items-start gap-3 cursor-pointer group"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <input
              type="checkbox"
              checked={!!checked[item]}
              onChange={() => handleToggle(item)}
              className="mt-0.5"
            />
            <span
              className={`text-sm leading-relaxed transition-colors ${
                checked[item]
                  ? "text-star-muted line-through"
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
          className="mt-4 p-3 rounded-lg bg-nebula-green/10 border border-nebula-green/30 text-nebula-green text-sm text-center"
        >
          Module complete! You&apos;re ready for the next one.
        </motion.div>
      )}
    </div>
  );
}
