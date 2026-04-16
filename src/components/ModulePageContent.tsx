"use client";

import { Module } from "@/data/modules";
import Sidebar from "@/components/Sidebar";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import ResourceCard from "@/components/ResourceCard";
import Checklist from "@/components/Checklist";
import ModuleNav from "@/components/ModuleNav";

export default function ModulePageContent({ mod }: { mod: Module }) {
  const allResources = [...mod.interactives, ...mod.readings];

  return (
    <>
      <Sidebar />
      <main className="lg:pl-[280px] min-h-screen">
        {/* Module header banner */}
        <div
          className="relative overflow-hidden border-b border-cosmos-700/30"
          style={{
            background: `linear-gradient(135deg, ${mod.color}08 0%, transparent 50%, ${mod.color}04 100%)`,
          }}
        >
          <div className="max-w-4xl mx-auto px-6 pt-16 pb-10 lg:pt-12 relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: `${mod.color}20`,
                  color: mod.color,
                  border: `1px solid ${mod.color}35`,
                  boxShadow: `0 0 20px ${mod.color}15`,
                }}
              >
                {mod.id}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-star-muted bg-cosmos-800/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Module {mod.id}
                </span>
                <span className="text-xs text-star-muted bg-cosmos-800/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  ⏱ {mod.timeEstimate}
                </span>
              </div>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-star-white mb-2">
              {mod.title}
            </h1>
            <p className="text-xl text-star-dim font-light">{mod.subtitle}</p>
          </div>

          {/* Decorative gradient line at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${mod.color}40, transparent)`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 py-10">
          {/* Intro */}
          <div className="mb-14">
            <div className="space-y-4 text-[15px] leading-[1.8]">
              {mod.intro.map((paragraph, i) => (
                <p key={i} className="text-star-dim">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Videos */}
          {mod.videos.length > 0 && (
            <section className="mb-14">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cosmos-700/30">
                <span className="text-xl w-9 h-9 rounded-lg bg-cosmos-800/80 flex items-center justify-center">
                  🎬
                </span>
                <div>
                  <h2 className="font-display font-semibold text-lg text-star-white">
                    Watch
                  </h2>
                  <p className="text-xs text-star-muted mt-0.5">
                    Video resources to build your understanding
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                {mod.videos.map((video) => (
                  <div
                    key={video.url}
                    className="glass-card rounded-2xl overflow-hidden"
                  >
                    <YouTubeEmbed url={video.url} title={video.title} />
                    <div className="p-5">
                      <h4 className="font-display font-semibold text-star-white text-[15px] mb-1">
                        {video.title}
                      </h4>
                      <p className="text-xs text-star-muted leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interactive Tools & Readings */}
          {allResources.length > 0 && (
            <section className="mb-14">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cosmos-700/30">
                <span className="text-xl w-9 h-9 rounded-lg bg-cosmos-800/80 flex items-center justify-center">
                  🔗
                </span>
                <div>
                  <h2 className="font-display font-semibold text-lg text-star-white">
                    Explore
                  </h2>
                  <p className="text-xs text-star-muted mt-0.5">
                    Interactive tools, articles, and papers
                  </p>
                </div>
              </div>
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
            </section>
          )}

          {/* Checklist */}
          <section className="mb-14">
            <Checklist moduleSlug={mod.slug} items={mod.checklist} />
          </section>

          {/* Navigation */}
          <ModuleNav currentSlug={mod.slug} />
        </div>
      </main>
    </>
  );
}
