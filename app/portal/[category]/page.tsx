import { notFound } from "next/navigation";
import { getArticleFromSlugMap } from "@/lib/slugMapContent";
import { getArticle, isSection, SECTIONS, listArticleSlugs } from "@/lib/content";
import { SLUG_MAP } from "@/lib/slugMap";
import ArticlePageContent from "../_articlePageContent";

export async function generateStaticParams() {
  const fromSlugMap = Object.keys(SLUG_MAP)
    .filter((k) => !k.includes("/"))
    .map((category) => ({ category }));

  const fromSections = SECTIONS.map((s) => ({ category: s }));

  const seen = new Set<string>();
  return [...fromSlugMap, ...fromSections].filter(({ category }) => {
    if (seen.has(category)) return false;
    seen.add(category);
    return true;
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const article =
    (await getArticleFromSlugMap(category)) ??
    (isSection(category) ? await getArticle(category, category) : null);
  if (!article) return {};
  return { title: article.title };
}

export default async function CategoryIndexPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const article =
    (await getArticleFromSlugMap(category)) ??
    (isSection(category) ? await getArticle(category, category) : null);

  if (!article) notFound();
  return <ArticlePageContent article={article} href={`/portal/${category}`} />;
}
