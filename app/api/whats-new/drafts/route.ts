import { NextRequest } from "next/server";
import { loadDrafts, saveDrafts, nextId, type Draft } from "@/lib/whatsNewStore";

/* GET — list all drafts (all statuses, for the review queue + history) */
export async function GET() {
  const drafts = await loadDrafts();
  return Response.json(drafts);
}

/* POST — add a new raw item to the queue, status always starts "new" */
export async function POST(request: NextRequest) {
  const { source, language, raw_text } = await request.json();

  if (!raw_text?.trim()) {
    return Response.json({ error: "raw_text is required" }, { status: 400 });
  }

  const drafts = await loadDrafts();
  const draft: Draft = {
    id: nextId(drafts),
    source: source?.trim() || "unknown",
    date_added: new Date().toISOString().slice(0, 10),
    raw_text: raw_text.trim(),
    language: language?.trim() || "cs",
    visibility: null,
    english_text: null,
    status: "new",
    published_at: null,
    notes: "",
  };

  drafts.push(draft);
  await saveDrafts(drafts);

  return Response.json({ success: true, draft });
}
