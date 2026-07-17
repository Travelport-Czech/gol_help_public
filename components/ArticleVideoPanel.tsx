"use client";

import { useState } from "react";
import type { ArticleVideo } from "@/lib/articleVideos";
import { youtubeEmbedUrl } from "@/lib/articleVideos";
import s from "@/app/portal/portal-layout.module.css";

type Props = {
  videos: ArticleVideo[];
};

function VideoTile({ video }: { video: ArticleVideo }) {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className={s.videoPlayerWrap}>
        <div className={s.videoWrap}>
          <iframe
            src={youtubeEmbedUrl(video.youtubeId)}
            title={video.label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <button
          type="button"
          className={s.videoCloseBtn}
          onClick={() => setOpen(false)}
        >
          Close video
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={s.videoPlaceholderTile}
      onClick={() => setOpen(true)}
      aria-label={`Play video: ${video.label}`}
    >
      <div className={s.videoPlaceholderIcon}>▶</div>
      <span className={s.videoPlaceholderText}>Watch video</span>
      <span className={s.videoTileLabel}>{video.label}</span>
    </button>
  );
}

export function ArticleVideoPanel({ videos }: Props) {
  if (videos.length === 0) {
    return (
      <aside className={s.articleVideoPanel} aria-hidden="true">
        <div className={s.videoPlaceholderTile}>
          <div className={s.videoPlaceholderIcon}>▶</div>
          <span className={s.videoPlaceholderText}>Watch video here</span>
        </div>
      </aside>
    );
  }

  return (
    <aside className={s.articleVideoPanel} aria-label="Video tutorials">
      <span className={s.videoPanelLabel}>Video</span>
      <div className={s.videoPanelStack}>
        {videos.map((video) => (
          <VideoTile key={video.youtubeId} video={video} />
        ))}
      </div>
    </aside>
  );
}
