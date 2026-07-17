"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ArticleVideo } from "@/lib/articleVideos";
import { youtubeEmbedUrl } from "@/lib/articleVideos";
import s from "@/app/portal/portal-layout.module.css";

type Props = {
  videos: ArticleVideo[];
};

function VideoModal({
  video,
  onClose,
}: {
  video: ArticleVideo;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={s.videoModalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={video.label}
    >
      <div className={s.videoModalBox}>
        <button
          type="button"
          className={s.videoModalClose}
          onClick={onClose}
          aria-label="Close video"
        >
          ✕
        </button>
        <p className={s.videoModalTitle}>{video.label}</p>
        <div className={s.videoModalPlayer}>
          <iframe
            src={`${youtubeEmbedUrl(video.youtubeId)}&autoplay=1`}
            title={video.label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

function VideoTrigger({ video }: { video: ArticleVideo }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={s.videoPlaceholderTile}
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${video.label}`}
      >
        <div className={s.videoPlaceholderIcon}>▶</div>
        <span className={s.videoPlaceholderText}>WATCH VIDEO HERE</span>
      </button>
      {open && <VideoModal video={video} onClose={() => setOpen(false)} />}
    </>
  );
}

export function ArticleVideoPanel({ videos }: Props) {
  return (
    <aside className={s.articleVideoPanel} aria-label="Video tutorials">
      <div className={s.videoPanelStack}>
        {videos.length > 0 ? (
          videos.map((video) => <VideoTrigger key={video.youtubeId} video={video} />)
        ) : (
          <div className={`${s.videoPlaceholderTile} ${s.videoPlaceholderTileStatic}`}>
            <div className={s.videoPlaceholderIcon}>▶</div>
            <span className={s.videoPlaceholderText}>WATCH VIDEO HERE</span>
          </div>
        )}
      </div>
    </aside>
  );
}
