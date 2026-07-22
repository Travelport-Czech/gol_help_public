"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, APP_TABS, EXTERNAL_LINKS, type Category } from "./data";
import { CeeBrand } from "@/components/CeeBrand";
import s from "./portal-layout.module.css";

/* ── Context ────────────────────────────────────────────── */
type PortalCtx = {
  selectedCat: Category | null;
  setSelectedCat: (cat: Category | null) => void;
  openContact: () => void;
};

const PortalContext = createContext<PortalCtx>({
  selectedCat: null,
  setSelectedCat: () => {},
  openContact: () => {},
});

export function usePortal() {
  return useContext(PortalContext);
}

/* ── Layout ─────────────────────────────────────────────── */
export default function PortalLayout({ children }: { children: ReactNode }) {
  const rawPathname = usePathname();
  const router = useRouter();
  const pathname = rawPathname.replace(/\/$/, "") || "/";
  const isPortalRoot = pathname === "/portal";

  const [selectedCat, setSelectedCat] = useState<Category | null>(null);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  function openZendeskWidget() {
    window.zE?.("webWidget", "open");
  }

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  /* Close mobile sidebar on navigation */
  useEffect(() => {
    setShowMobileSidebar(false);
  }, [pathname]);

  /* Auto-expand and highlight the category matching the current article */
  useEffect(() => {
    if (!isPortalRoot) {
      const match = CATEGORIES.find(
        (cat) =>
          cat.href === pathname ||
          cat.articles.some((a) => a.href === pathname)
      );
      if (match) {
        setExpandedCat(match.name);
      }
    }
  }, [pathname, isPortalRoot]);

  function handleCatClick(cat: Category) {
    if (!isPortalRoot) {
      router.push(cat.href);
    }
    setSelectedCat(cat);
    setExpandedCat((prev) => (prev === cat.name ? null : cat.name));
  }

  const fmtDate = (d: Date) =>
    d.toLocaleDateString("cs-CZ", { day: "2-digit", month: "2-digit", year: "numeric" });
  const fmtTime = (d: Date) =>
    d.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  const sidebarContent = (
    <>
      {/* Brand + clock */}
      <div className={s.sidebarBrand}>
        <CeeBrand
          height={26}
          onLogoClick={() => { setSelectedCat(null); router.push("/portal"); }}
        />
        {now && (
          <div className={s.datetimeBadge}>
            <div>{fmtDate(now)}</div>
            <div>{fmtTime(now)}</div>
          </div>
        )}
      </div>

      {/* Topic navigation */}
      <div className={s.sidebarTopics}>
        <span className={s.sidebarLabel}>Topics</span>
        {CATEGORIES.map((cat) => {
          const isCatActive =
            cat.href === pathname ||
            cat.articles.some((a) => a.href === pathname) ||
            (isPortalRoot && selectedCat?.name === cat.name);
          const isExpanded = expandedCat === cat.name;
          return (
            <div key={cat.name}>
              <button
                className={`${s.sidebarItem} ${isCatActive ? s.sidebarItemActive : ""}`}
                onClick={() => handleCatClick(cat)}
                aria-expanded={isExpanded}
              >
                <span className={s.sidebarItemLeft}>
                  <span className={s.sidebarItemIcon}>{cat.icon}</span>
                  <span>{cat.name}</span>
                </span>
                <span className={`${s.sidebarChevron} ${isExpanded ? s.sidebarChevronOpen : ""}`}>›</span>
              </button>

              {isExpanded && (
                <ul className={s.sidebarSubList}>
                  {cat.articles.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className={`${s.sidebarSubItem} ${a.href === pathname ? s.sidebarSubItemActive : ""}`}
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* External links */}
      <div className={s.sidebarExternalLinks}>
        <span className={s.sidebarLabel}>Links</span>
        {EXTERNAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={s.appLink}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Footer actions */}
      <div className={s.sidebarFooter}>
        {APP_TABS.filter((t) => !t.isActive).map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            target="_blank"
            rel="noopener noreferrer"
            className={s.sidebarFooterBtn}
          >
            {tab.label}
          </a>
        ))}
        <button className={s.sidebarFooterBtn} onClick={openZendeskWidget}>
          Contact Help
        </button>
      </div>
    </>
  );

  return (
    <PortalContext.Provider value={{ selectedCat, setSelectedCat, openContact: openZendeskWidget }}>

      {/* ══ MOBILE TOP BAR ════════════════════════════════ */}
      <div className={s.mobileTopBar}>
        <button
          className={s.hamburger}
          onClick={() => setShowMobileSidebar(true)}
          aria-label="Open navigation menu"
        >
          <span className={s.hamburgerLine} />
          <span className={s.hamburgerLine} />
          <span className={s.hamburgerLine} />
        </button>
        <CeeBrand height={24} compact className={s.mobileTopBarBrand} />
      </div>

      <div className={s.portalRoot}>

        {/* ══ MOBILE BACKDROP ═══════════════════════════════ */}
        {showMobileSidebar && (
          <div
            className={s.sidebarBackdrop}
            onClick={() => setShowMobileSidebar(false)}
          />
        )}

        {/* ══ LEFT SIDEBAR ══════════════════════════════════ */}
        <aside className={`${s.sidebar} ${showMobileSidebar ? s.sidebarOpen : ""}`}>
          {/* Mobile close button */}
          <button
            className={s.sidebarCloseBtn}
            onClick={() => setShowMobileSidebar(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {sidebarContent}
        </aside>
        {/* ══ END SIDEBAR ═══════════════════════════════════ */}

        {/* ══ MAIN CONTENT ══════════════════════════════════ */}
        <div className={s.portalMain}>
          {selectedCat && isPortalRoot ? (
            <CategoryView cat={selectedCat} onBack={() => setSelectedCat(null)} />
          ) : (
            children
          )}
        </div>

      </div>

      {/* ══ FLOATING SUPPORT BUTTON ══════════════════════ */}
      <button className={s.floatingSupport} onClick={openZendeskWidget}>
        <span className={s.floatingSupportIcon}>?</span>
        Support
      </button>

    </PortalContext.Provider>
  );
}

/* ── Category detail view ───────────────────────────────── */
function CategoryView({ cat, onBack }: { cat: Category; onBack: () => void }) {
  return (
    <div className={s.categoryView}>
      <button className={s.backBtn} onClick={onBack}>← Back to overview</button>

      <div className={s.categoryHero}>
        <h1 className={s.categoryTitle}>{cat.name}</h1>
      </div>
      <p className={s.categoryDesc}>{cat.desc}</p>

      <div className={s.articleGrid}>
        {cat.articles.map((a) => (
          <Link key={a.href} href={a.href} className={s.articleCard}>
            <span>{a.title}</span>
            <span className={s.articleArrow}>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
