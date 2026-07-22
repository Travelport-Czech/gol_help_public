"use client";

import Script from "next/script";

const ZENDESK_KEY = "14190e0b-9771-4dd3-972a-d33c545f5a7c";

export function ZendeskWidget() {
  return (
    <Script
      id="ze-snippet"
      src={`https://static.zdassets.com/ekr/snippet.js?key=${ZENDESK_KEY}`}
      strategy="afterInteractive"
      onLoad={() => {
        // Default launcher is hidden — the portal's own Support / Contact Help
        // buttons open the widget instead (see openZendeskWidget in portal/layout.tsx).
        window.zE?.("webWidget", "hide");
      }}
    />
  );
}
