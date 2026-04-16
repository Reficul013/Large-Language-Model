"use client";

import { useState } from "react";

interface YouTubeEmbedProps {
  url: string;
  title: string;
}

function getVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  return match ? match[1] : null;
}

function getTimestamp(url: string): string {
  const match = url.match(/[?&]t=(\d+)s?/);
  return match ? `&start=${match[1]}` : "";
}

export default function YouTubeEmbed({ url, title }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const videoId = getVideoId(url);
  const timestamp = getTimestamp(url);
  const isPlaylist = url.includes("playlist?list=");

  if (!videoId && !isPlaylist) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-4 rounded-xl glass-card"
      >
        <span className="text-nebula-purple group-hover:underline">
          Watch: {title} →
        </span>
      </a>
    );
  }

  if (isPlaylist) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-xl overflow-hidden"
      >
        <div className="relative aspect-video bg-cosmos-900 flex items-center justify-center border border-cosmos-700/30 rounded-xl">
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-nebula-purple/10 border border-nebula-purple/20 flex items-center justify-center group-hover:bg-nebula-purple/20 group-hover:scale-105 transition-all">
              <svg
                className="w-7 h-7 text-nebula-purple"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
              </svg>
            </div>
            <p className="text-star-white font-display font-medium text-sm">
              {title}
            </p>
            <p className="text-star-muted text-xs mt-1.5 group-hover:text-nebula-purple transition-colors">
              Open Playlist →
            </p>
          </div>
        </div>
      </a>
    );
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!loaded) {
    return (
      <button
        onClick={() => setLoaded(true)}
        className="group relative block w-full rounded-xl overflow-hidden cursor-pointer"
        aria-label={`Play ${title}`}
      >
        <div className="aspect-video relative">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-red-600/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-red-600/30">
              <svg
                className="w-7 h-7 text-white ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden">
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0${timestamp}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
