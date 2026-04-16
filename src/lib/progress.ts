"use client";

const STORAGE_KEY = "llm-universe-progress";

export interface Progress {
  [moduleSlug: string]: {
    [checklistItem: string]: boolean;
  };
}

export function getProgress(): Progress {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function setChecklistItem(
  moduleSlug: string,
  item: string,
  checked: boolean
) {
  const progress = getProgress();
  if (!progress[moduleSlug]) progress[moduleSlug] = {};
  progress[moduleSlug][item] = checked;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  return progress;
}

export function getModuleProgress(moduleSlug: string, totalItems: number): number {
  const progress = getProgress();
  const moduleProgress = progress[moduleSlug];
  if (!moduleProgress || totalItems === 0) return 0;
  const completed = Object.values(moduleProgress).filter(Boolean).length;
  return Math.round((completed / totalItems) * 100);
}

export function getOverallProgress(
  modules: { slug: string; checklist: string[] }[]
): number {
  const progress = getProgress();
  let total = 0;
  let completed = 0;
  for (const mod of modules) {
    total += mod.checklist.length;
    const mp = progress[mod.slug];
    if (mp) completed += Object.values(mp).filter(Boolean).length;
  }
  return total === 0 ? 0 : Math.round((completed / total) * 100);
}
