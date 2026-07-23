import fs from "fs/promises";
import path from "path";

export type Draft = {
  id: string;
  source: string;
  date_added: string;
  raw_text: string;
  language: string;
  visibility: "internal" | "external" | null;
  english_text: string | null;
  status: "new" | "internal" | "needs_translation" | "approved" | "published";
  published_at: string | null;
  notes: string;
};

const DRAFTS_PATH = path.join(process.cwd(), "content", "whats-new", "drafts.json");
export const RELEASE_NOTES_PATH = path.join(
  process.cwd(),
  "content",
  "whats-new",
  "release-notes.json"
);

export async function loadDrafts(): Promise<Draft[]> {
  const raw = await fs.readFile(DRAFTS_PATH, "utf8");
  const data = JSON.parse(raw);
  if (!Array.isArray(data.drafts)) {
    throw new Error(`Malformed drafts file at ${DRAFTS_PATH}: missing "drafts" array`);
  }
  return data.drafts;
}

export async function saveDrafts(drafts: Draft[]): Promise<void> {
  await fs.writeFile(DRAFTS_PATH, JSON.stringify({ drafts }, null, 2) + "\n", "utf8");
}

export function nextId(drafts: Draft[]): string {
  const today = new Date().toISOString().slice(0, 10);
  const todaysCount = drafts.filter((d) => d.id.startsWith(`wn-${today}`)).length;
  return `wn-${today}-${String(todaysCount + 1).padStart(3, "0")}`;
}
