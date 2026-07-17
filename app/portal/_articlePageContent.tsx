import Link from "next/link";
import { MarkdownBody } from "@/components/MarkdownBody";
import { BackButton } from "@/components/BackButton";
import { ShareButton } from "@/components/ShareButton";
import { PortalSearch } from "@/components/PortalSearch";
import { ArticleContactButton } from "@/components/ArticleContactButton";
import { ArticleVideoPanel } from "@/components/ArticleVideoPanel";
import { getArticleVideos } from "@/lib/articleVideos";
import { CATEGORIES } from "./data";
import s from "./portal-layout.module.css";

type Article = { title: string; body: string; bodyWithoutH1: string };

export default function ArticlePageContent({
  article,
  href,
}: {
  article: Article;
  href: string;
}) {
  const parentCat = CATEGORIES.find(
    (cat) => cat.href === href || cat.articles.some((a) => a.href === href)
  );
  const isCategoryPage = parentCat?.href === href;
  const videos = getArticleVideos(href);

  return (
    <div className={s.articleWrap}>
      <div className={s.articlePageHeader}>
        <div className={s.articleNav}>
          <BackButton />
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/portal">Home</Link>
            <span aria-hidden="true"> / </span>
            {parentCat && !isCategoryPage ? (
              <>
                <Link href={parentCat.href}>{parentCat.name}</Link>
                <span aria-hidden="true"> / </span>
                <span>{article.title}</span>
              </>
            ) : (
              <span>{article.title}</span>
            )}
          </nav>
          <div className={s.articleNavActions}>
            <PortalSearch />
            <ShareButton />
          </div>
        </div>
        <div className={s.articleTitleRow}>
          <h1 className={s.articleMainTitle}>{article.title}</h1>
        </div>
      </div>

      <div className={s.articleContentRow}>
        <div className={s.articleBody}>
          <MarkdownBody>{article.bodyWithoutH1}</MarkdownBody>
        </div>
        <ArticleVideoPanel videos={videos} />
      </div>

      {parentCat && (
        <div className={s.relatedSection}>
          <div className={s.articleGrid}>
            {parentCat.articles.map((a) => (
              <Link key={a.href} href={a.href} className={s.articleCard}>
                <span>{a.title}</span>
                <span className={s.articleArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      )}

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
