import { SLUG_MAP } from "./slugMap";
import { getArticle } from "./content";

export async function getArticleFromSlugMap(key: string) {
  const entry = SLUG_MAP[key];
  if (!entry) return null;
  return getArticle(entry.section, entry.file);
}
