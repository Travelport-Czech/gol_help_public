import Link from "next/link";
import { BackButton } from "@/components/BackButton";
import { PortalSearch } from "@/components/PortalSearch";
import { ShareButton } from "@/components/ShareButton";
import { ArticleContactButton } from "@/components/ArticleContactButton";
import { RELEASE_NOTES } from "../data";
import s from "../portal-layout.module.css";
import p from "../portal.module.css";

export const metadata = { title: "Release notes" };

export default function ReleaseNotesPage() {
  return (
    <div className={s.articleWrap}>
      <div className={s.articlePageHeader}>
        <div className={s.articleNav}>
          <BackButton />
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/portal">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Release notes</span>
          </nav>
          <div className={s.articleNavActions}>
            <PortalSearch />
            <ShareButton />
          </div>
        </div>
        <div className={s.articleTitleRow}>
          <h1 className={s.articleMainTitle}>Release notes</h1>
        </div>
      </div>

      <div className={s.articleBody}>
        {RELEASE_NOTES.map((r) => (
          <div key={r.version} className={p.releaseEntry} style={{ marginBottom: 28 }}>
            <div className={p.releaseVersion} style={{ fontSize: 14 }}>{r.version}</div>
            <ul className={p.releaseList}>
              {r.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className={s.articleFooter}>
        <a
          href="https://bo.golibe.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={s.articleFooterBtnOutline}
        >
          Open Admin Console ↗
        </a>
        <ArticleContactButton />
      </div>
    </div>
  );
}
