import { notFound } from "next/navigation";
import { getArticleFromSlugMap } from "@/lib/slugMapContent";
import { getArticle, isSection, SECTIONS, listArticleSlugs } from "@/lib/content";
import { SLUG_MAP } from "@/lib/slugMap";
import ArticlePageContent from "../../_articlePageContent";

export async function generateStaticParams() {
  const fromSlugMap = Object.keys(SLUG_MAP)
    .filter((k) => k.includes("/"))
    .map((k) => {
      const [category, ...rest] = k.split("/");
      return { category, slug: rest.join("/") };
    });

  const fromSections: { category: string; slug: string }[] = [];
  for (const section of SECTIONS) {
    const slugs = await listArticleSlugs(section);
    for (const slug of slugs) {
      fromSections.push({ category: section, slug });
    }
  }

  const seen = new Set<string>();
  return [...fromSlugMap, ...fromSections].filter(({ category, slug }) => {
    const key = `${category}/${slug}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const key = `${category}/${slug}`;
  const article =
    (await getArticleFromSlugMap(key)) ??
    (isSection(category) ? await getArticle(category, slug) : null);
  if (!article) return {};
  return { title: article.title };
}

export default async function CategorySlugPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const key = `${category}/${slug}`;

  const article =
    (await getArticleFromSlugMap(key)) ??
    (isSection(category) ? await getArticle(category, slug) : null);

  if (!article) notFound();
  return <ArticlePageContent article={article} href={`/portal/${key}`} />;
}
