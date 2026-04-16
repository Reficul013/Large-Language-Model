"use client";

import { motion } from "framer-motion";
import { modules, Module } from "@/data/modules";
import Sidebar from "@/components/Sidebar";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import ResourceCard from "@/components/ResourceCard";
import SectionHeader from "@/components/SectionHeader";
import Checklist from "@/components/Checklist";
import ModuleNav from "@/components/ModuleNav";

export default function ModulePageContent({ mod }: { mod: Module }) {
  const allResources = [...mod.interactives, ...mod.readings];

  return (
    <>
      <Sidebar />
      <main className="lg:pl-72 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12 pt-16 lg:pt-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-sm font-bold"
                style={{
                  backgroundColor: `${mod.color}20`,
                  color: mod.color,
                  border: `1px solid ${mod.color}40`,
                }}
              >
                {mod.id}
              </span>
              <span className="text-sm text-star-muted">
                Module {mod.id} &middot; {mod.timeEstimate}
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-star-white mb-2">
              {mod.title}
            </h1>
            <p className="text-xl text-star-dim">{mod.subtitle}</p>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="space-y-4">
              {mod.intro.map((paragraph, i) => (
                <p key={i} className="text-star-dim leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Videos */}
          {mod.videos.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <SectionHeader
                icon="🎬"
                title="Watch"
                subtitle="Video resources to build your understanding"
              />
              <div className="space-y-6">
                {mod.videos.map((video) => (
                  <div key={video.url}>
                    <YouTubeEmbed url={video.url} title={video.title} />
                    <div className="mt-3">
                      <h4 className="font-display font-semibold text-star-white text-sm">
                        {video.title}
                      </h4>
                      <p className="text-xs text-star-muted mt-1">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Interactive Tools & Readings */}
          {allResources.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <SectionHeader
                icon="🔗"
                title="Explore"
                subtitle="Interactive tools, articles, and papers"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {allResources.map((resource) => (
                  <ResourceCard
                    key={resource.url}
                    title={resource.title}
                    description={resource.description}
                    url={resource.url}
                    icon={resource.icon}
                    type={resource.type}
                  />
                ))}
              </div>
            </motion.section>
          )}

          {/* Checklist */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <Checklist moduleSlug={mod.slug} items={mod.checklist} />
          </motion.section>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ModuleNav currentSlug={mod.slug} />
          </motion.div>
        </div>
      </main>
    </>
  );
}
