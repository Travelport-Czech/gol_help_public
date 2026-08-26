"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { usePortal } from "./layout";
import { CATEGORIES, RELEASE_NOTES, WALKTHROUGHS } from "./data";
import { HOME } from "@/lib/generated/site-data";
import s from "./portal.module.css";

type SearchResult = {
  title: string;
  href: string;
  category: string;
  categoryDesc: string;
};

const latestReleaseHighlights = RELEASE_NOTES.flatMap((r) => r.items).slice(0, WALKTHROUGHS.length + 3);

const ALL_ARTICLES: SearchResult[] = CATEGORIES.flatMap((cat) =>
  cat.articles.map((a) => ({
    title: a.title,
    href: a.href,
    category: cat.name,
    categoryDesc: cat.desc,
  }))
);

const MOST_VISITED = HOME.mostVisited
  .map((href) => ALL_ARTICLES.find((a) => a.href === href))
  .filter((item): item is SearchResult => Boolean(item));

export default function PortalOverviewPage() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const { openContact, contactLabel } = usePortal();
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 250);
    return () => clearTimeout(t);
  }, [query]);

  const filteredResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    const q = debouncedQuery.toLowerCase();
    return ALL_ARTICLES.filter((r) =>
      `${r.title} ${r.category} ${r.categoryDesc}`.toLowerCase().includes(q)
    );
  }, [debouncedQuery]);

  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    for (const r of filteredResults) {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category].push(r);
    }
    return groups;
  }, [filteredResults]);

  return (
    <>
      {/* ── Hero + Search ── */}
      <div className={s.hero}>
        <h2 className={s.heroTitle}>{HOME.heroTitle}</h2>
        <p className={s.heroSub}>{HOME.heroSub}</p>
        <div className={s.searchWrap}>
          <span className={s.searchIcon}>🔍</span>
          <input
            className={s.omnisearch}
            placeholder="Search anything… e.g. add new user, service fee, working hours"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search help articles"
          />
          {query && (
            <button className={s.searchClear} onClick={() => setQuery("")} aria-label="Clear search">
              ✕
            </button>
          )}
        </div>
        <div className={s.heroChips}>
          {HOME.searchChips.map((chip) => (
            <button key={chip} className={s.heroChip} onClick={() => setQuery(chip)}>
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className={s.body}>

        {/* ── Search results ── */}
        {debouncedQuery.trim() && (
          <div className={s.quickResults}>
            <div className={s.searchResultsHeader}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a3668" }}>
                {filteredResults.length === 0
                  ? "No results"
                  : `${filteredResults.length} result${filteredResults.length !== 1 ? "s" : ""} for "${debouncedQuery}"`}
              </h3>
            </div>
            {filteredResults.length === 0 ? (
              <p className={s.noResults}>
                Try a different keyword, or browse by topic below.
              </p>
            ) : (
              Object.entries(groupedResults).map(([category, items]) => (
                <div key={category} className={s.resultGroup}>
                  <div className={s.resultGroupLabel}>{category}</div>
                  <ul className={s.quickResultsList}>
                    {items.map((item) => (
                      <li key={item.href} className={s.quickResultItem}>
                        <Link href={item.href} className={s.quickResultLink}>
                          <span className={s.quickResultTitle}>{item.title}</span>
                          <span className={s.quickResultArrow}>→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        )}

        {/* ── Browse by topic ── */}
        {!debouncedQuery.trim() && (
          <>
            <p className={s.sectionTitle}>Browse by topic</p>
            <div className={s.topicGrid}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.name}
                  className={s.catCard}
                  onClick={() => router.push(cat.href)}
                >
                  <div className={s.catIcon}>{cat.icon}</div>
                  <div className={s.catName}>{cat.name}</div>
                  <div className={s.catDesc}>{cat.desc}</div>
                  <span className={s.catLink}>Explore</span>
                </button>
              ))}
            </div>

            {/* Three panels */}
            <div className={s.panelsRow}>

              {/* What's New */}
              <div className={s.panel}>
                <div className={s.panelHeader}>
                  <span className={s.panelTitle}>What&apos;s New</span>
                </div>
                <div className={s.panelBody}>
                  <div className={s.releaseVersion}>{RELEASE_NOTES[0].version}</div>
                  <ul className={s.releaseList}>
                    {latestReleaseHighlights.map((item) => <li key={item.title}>{item.title}</li>)}
                  </ul>
                  <Link href="/portal/release-notes" className={s.releaseAllLink}>
                    All GOL IBE News <span className={s.releaseAllLinkArrow}>→</span>
                  </Link>
                </div>
              </div>

              {/* Walkthroughs */}
              <div className={s.panel}>
                <div className={s.panelHeader}>
                  <span className={s.panelTitle}>Walkthroughs</span>
                  <span className={s.panelCount}>{WALKTHROUGHS.length} guides</span>
                </div>
                <div className={s.panelBody}>
                  <ul className={s.walkthroughList}>
                    {WALKTHROUGHS.map((w) => (
                      <li key={w.href}>
                        <Link href={w.href} className={s.walkthroughItem}>
                          <span className={s.walkthroughStepsBadge}>{w.steps} steps</span>
                          <span className={s.walkthroughContent}>
                            <span className={s.walkthroughTitle}>{w.title}</span>
                            <span className={s.walkthroughCat}>{w.category}</span>
                          </span>
                          <span className={s.walkthroughArrow}>→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* YouTube channel panel */}
              <a
                href={HOME.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s.youtubePanelLink}
              >
                <div className={s.youtubePanel}>
                  <div className={s.youtubePanelIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="38" height="38">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div className={s.youtubePanelText}>
                    <span className={s.youtubePanelTitle}>{HOME.youtubeTitle}</span>
                    <span className={s.youtubePanelSub}>{HOME.youtubeSub}</span>
                  </div>
                </div>
              </a>

            </div>

            {/* Most Visited */}
            <div className={s.mostVisited}>
              <div className={s.mostVisitedTitle}>Most visited</div>
              <ul className={s.mostVisitedList}>
                {MOST_VISITED.map((item) => (
                  <li key={item.href} className={s.mostVisitedItem}>
                    <p>
                      <strong>{item.title}</strong>
                      <span className={s.badge}>{item.category}</span>
                    </p>
                    <Link href={item.href} style={{ whiteSpace: "nowrap", fontSize: 14 }}>Open →</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action bar */}
            <div className={s.actionBar}>
              <a href="https://bo.golibe.com/" target="_blank" rel="noopener noreferrer" className={s.btnOutline}>
                Open Admin Console ↗
              </a>
              <button className={s.btnPrimary} onClick={openContact}>
                {contactLabel}
              </button>
            </div>
          </>
        )}

      </div>
    </>
  );
}
