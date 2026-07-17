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
  "/portal/agency/payment-due-date": [
    {
      label: "Where to find the last ticketing date on front-end",
      youtubeId: "Egry5hvKT9w",
    },
  ],
  "/portal/agency/pnr-queue": [
    {
      label: "How to change Queue number",
      youtubeId: "XWVYB9n33l8",
    },
  ],
  "/portal/customers/travel-documents": [
    {
      label: "How to handle travel documents?",
      youtubeId: "wDfbjfCaj34",
    },
    {
      label: "Mandatory travel documents on front-end",
      youtubeId: "KWKcr1DCjC4",
    },
  ],
  "/portal/code-lists/destination-filters": [
    {
      label: "How to apply destination filters",
      youtubeId: "oJg9WNhkZK0",
    },
  ],
  "/portal/notifications/from-email": [
    {
      label: "How to set up the notification sender",
      youtubeId: "Z2I0WfBKx4Q",
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
