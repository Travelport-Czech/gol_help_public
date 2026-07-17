export type ArticleVideo = {
  label: string;
  /** YouTube video ID */
  youtubeId: string;
};

/** Portal article href → videos shown in the right-hand panel. */
export const ARTICLE_VIDEOS: Record<string, ArticleVideo[]> = {
  "/portal/agency/working-hours": [
    {
      label: "Working hours in GOL IBE",
      youtubeId: "8WDPaH_ZJOk",
    },
  ],
  "/portal/customers/travel-documents": [
    {
      label: "How to handle travel documents?",
      youtubeId: "EmHu6wZz4E8",
    },
    {
      label: "Mandatory travel documents on front-end",
      youtubeId: "FZWuWeU4-H4",
    },
  ],
};

export function getArticleVideos(href: string): ArticleVideo[] {
  const normalized = href.replace(/\/$/, "") || href;
  return ARTICLE_VIDEOS[normalized] ?? [];
}

export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
}
