/**
 * Maps short friendly slugs (/<category>/<slug>) to the underlying content file.
 * Format: "category/slug" → { section, file }
 *
 * The category slug matches the CATEGORIES href segment (e.g. "agency", "dealers").
 */
export type SlugMapEntry = { section: string; file: string };

export const SLUG_MAP: Record<string, SlugMapEntry> = {
  // ── Agency ──────────────────────────────────────────────────────────────
  "agency":                   { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency" },
  "agency/detail":            { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-agency-detail-description" },
  "agency/working-hours":     { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-how-to-set-up-working-hours" },
  "agency/working-hours-exception": { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-how-to-set-up-working-hours-exception" },
  "agency/private-fare":      { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-what-if-i-have-private-fare-account-code" },
  "agency/contact-billing":   { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-where-do-i-set-up-contact-information-and-billing-details" },
  "agency/payment-due-date":  { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-where-to-set-up-payment-due-date" },
  "agency/payment-methods":   { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-how-to-manage-appearance-of-your-payment-methods" },
  "agency/payment-fee":       { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-how-to-add-a-fee-for-payment-method" },
  "agency/email-notifications": { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-what-is-section-e-mail-notifications-good-for" },
  "agency/pnr-queue":         { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-what-about-pnr-queue-number" },
  "agency/gtid-printers":     { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-agency-where-to-insert-gtid-printers" },

  // ── Dealers ─────────────────────────────────────────────────────────────
  "dealers":                  { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers" },
  "dealers/create":           { section: "getting-started", file: "create-dealer" },
  "dealers/commission":       { section: "getting-started", file: "commission" },
  "dealers/multi-currency":   { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-customization-via-dealer-edit-how-to-set-up-a-multi-currency" },
  "dealers/default-departure": { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-dealer-edit-how-to-set-up-default-city-for-departure" },
  "dealers/modify-dates":     { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-dealer-edit-how-to-modify-dates-of-departure-and-arrival" },
  "dealers/calendar":         { section: "getting-started", file: "2-gol-ibe-step-by-step-dealers-customization-via-dealer-edit-how-to-manage-calendar-on-your-gol-ibe-web-e698fa" },
  "dealers/billing":          { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-dealer-edit-company-billing-details" },
  "dealers/logo":             { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-front-end-settings-where-can-you-insert-change-agency-logo" },
  "dealers/frontend-title":   { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-front-end-settings-how-do-you-change-the-title-of-your-front-end" },
  "dealers/favicon":          { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-front-end-settings-where-can-you-insert-favicon" },
  "dealers/seo":              { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-front-end-settings-how-to-rewrite-our-text-for-seo" },
  "dealers/wait-page":        { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-front-end-settings-wait-page-what-is-it-good-for" },
  "dealers/html-package":     { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-front-end-settings-where-can-you-download-the-html-package" },
  "dealers/agency-url":       { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-front-end-settings-where-can-you-insert-your-agency-url-under-logo" },
  "dealers/header":           { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-dealers-front-end-settings-how-can-you-manage-header" },
  "dealers/custom-domain":    { section: "troubleshooting", file: "1-gol-ibe-5-gol-ibe-faqs-how-to-customize-your-domain" },
  "dealers/frontend-basic":   { section: "getting-started", file: "2-gol-ibe-step-by-step-gol-ibe-dealers-customization-via-dealer-front-end-settings-basic-fronted-customization" },
  "dealers/background":       { section: "getting-started", file: "2-gol-ibe-step-by-step-gol-ibe-dealers-customization-via-dealer-front-end-settings-how-to-change-background-on" },

  // ── Customers ───────────────────────────────────────────────────────────
  "customers":                { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-customers" },
  "customers/create-database": { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-customers-how-to-create-customer-database" },
  "customers/benefits-clients": { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-customers-advantages-of-customer-database-for-your-clients" },
  "customers/benefits-agency": { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-customers-advantages-of-customer-database-for-you" },
  "customers/travel-documents": { section: "troubleshooting", file: "1-gol-ibe-5-gol-ibe-faqs-how-to-manage-travel-documents-in-gol-ibe" },
  "customers/bookings-with-clients": { section: "troubleshooting", file: "1-gol-ibe-5-gol-ibe-faqs-how-to-handle-bookings-with-clients" },

  // ── Reservations ────────────────────────────────────────────────────────
  "reservations":             { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-reservations" },
  "reservations/handle":      { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-reservations-gol-ibe-how-to-handle-bookings-in-admin-console" },
  "reservations/create":      { section: "getting-started", file: "create-booking" },
  "reservations/edit":        { section: "getting-started", file: "modify-booking" },
  "reservations/cancel":      { section: "getting-started", file: "cancel-booking" },
  "reservations/ticketing":   { section: "getting-started", file: "issue-ticket" },
  "reservations/clients":     { section: "getting-started", file: "handle-bookings-with-clients" },
  "reservations/export":      { section: "getting-started", file: "export-bookings" },
  "reservations/stop-fake":   { section: "getting-started", file: "stop-fake-bookings" },

  // ── Prices & Markup ─────────────────────────────────────────────────────
  "prices":                   { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-prices" },
  "prices/markup-rules":      { section: "getting-started", file: "markup-rules" },
  "prices/service-fees":      { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-prices-how-to-handle-service-fees" },
  "prices/service-fees-2ow":  { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-prices-how-to-handle-service-fees-for-2ows" },
  "prices/promo-codes":       { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-prices-how-to-manage-promocodes" },
  "prices/commissions":       { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-prices-what-is-section-commissions-and-discounts-good-for" },
  "prices/special-offers":    { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-prices-how-to-handle-special-offers" },
  "prices/carrier-discount":  { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-prices-how-to-create-discount-for-certain-carrier-and-certain-flight" },

  // ── Code Lists ──────────────────────────────────────────────────────────
  "code-lists":               { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-code-lists" },
  "code-lists/carriers":      { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-code-lists-carriers" },
  "code-lists/hide-carrier":  { section: "troubleshooting", file: "1-gol-ibe-5-gol-ibe-faqs-how-to-hide-carrier-on-your-search-form" },
  "code-lists/destination-filters": { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-code-lists-destination-filters" },
  "code-lists/blocked-emails": { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-code-lists-how-about-section-blocked-e-mails" },
  "code-lists/flush-caches":  { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-code-lists-what-is-section-flush-cashes-good-for" },
  "code-lists/flush-html-caches": { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-code-lists-what-is-section-flush-html-cashes-good-for" },

  // ── Users ────────────────────────────────────────────────────────────────
  "users":                    { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-users" },
  "users/add":                { section: "getting-started", file: "add-user" },
  "users/roles":              { section: "getting-started", file: "roles" },
  "users/reset-password":     { section: "getting-started", file: "reset-password" },
  "users/deactivate":         { section: "getting-started", file: "deactivate-user" },

  // ── Notifications ────────────────────────────────────────────────────────
  "notifications":            { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-notifications" },
  "notifications/templates":  { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-notifications-notification-templates" },
  "notifications/most-used":  { section: "troubleshooting", file: "1-gol-ibe-5-gol-ibe-faqs-what-types-of-notifications-are-the-most-used-ones-and-what-are-these-good-for" },
  "notifications/booking-confirmation": { section: "getting-started", file: "booking-confirmation" },
  "notifications/custom-templates": { section: "getting-started", file: "custom-templates" },
  "notifications/sent":       { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-notifications-sent-notifications" },
  "notifications/from-email": { section: "troubleshooting", file: "1-gol-ibe-5-gol-ibe-faqs-how-to-customize-section-from-e-mail" },

  // ── Supporting Texts ─────────────────────────────────────────────────────
  "supporting-texts":         { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-supporting-texts" },
  "supporting-texts/terms":   { section: "getting-started", file: "terms" },
  "supporting-texts/custom-blocks": { section: "getting-started", file: "custom-blocks" },
  "supporting-texts/css":     { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-supporting-texts-css" },
  "supporting-texts/footer":  { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-supporting-texts-how-to-create-a-footer" },
  "supporting-texts/menu":    { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-supporting-texts-how-to-create-menu-on-your-front-end" },
  "supporting-texts/ticket-template": { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-gol-ibe-supporting-texts-how-to-edit-your-ticket-itinerary-template" },

  // ── Statistics ───────────────────────────────────────────────────────────
  "statistics":               { section: "getting-started", file: "1-gol-ibe-2-gol-ibe-step-by-step-statistics" },
  "statistics/sales-report":  { section: "getting-started", file: "sales-report" },

  // ── Tips & Tricks ────────────────────────────────────────────────────────
  "tips":                     { section: "getting-started", file: "tips-and-tricks" },

  // ── Basic Settings ───────────────────────────────────────────────────────
  "basic-settings":           { section: "configuration",  file: "gol-ibe-basic-settings" },
  "basic-settings/auto-ticketing": { section: "configuration", file: "basic-auto-ticketing" },
  "basic-settings/design":    { section: "configuration",  file: "1-gol-ibe-3-gol-ibe-basic-settings-how-to-design-your-gol-ibe-site" },
  "basic-settings/working-hours": { section: "configuration", file: "1-gol-ibe-3-gol-ibe-basic-settings-how-to-set-up-working-hours-in-your-gol-ibe" },
  "basic-settings/service-fee": { section: "configuration", file: "1-gol-ibe-3-gol-ibe-basic-settings-how-to-set-up-service-fee" },
  "basic-settings/notifications": { section: "configuration", file: "1-gol-ibe-3-gol-ibe-basic-settings-how-to-customize-notifications-in-your-gol-ibe" },
  "basic-settings/search-form": { section: "configuration", file: "1-gol-ibe-3-gol-ibe-basic-settings-how-to-implement-the-air-ticket-search-form-into-your-agency-website" },

  // ── Advanced Settings ────────────────────────────────────────────────────
  "advanced-settings":        { section: "configuration",  file: "gol-ibe-advanced-settings" },
  "advanced-settings/connectors": { section: "configuration", file: "advanced-connectors" },
  "advanced-settings/api":    { section: "configuration",  file: "advanced-api" },
  "advanced-settings/mir":    { section: "configuration",  file: "1-gol-ibe-4-gol-ibe-advanced-settings-mir" },
  "advanced-settings/multi-pcc": { section: "configuration", file: "1-gol-ibe-4-gol-ibe-advanced-settings-multipcc-dotazovani" },
  "advanced-settings/parallel-queries": { section: "configuration", file: "1-gol-ibe-4-gol-ibe-advanced-settings-paraleleni-dotazovani" },
  "advanced-settings/airline-commission-fee": { section: "configuration", file: "1-gol-ibe-4-gol-ibe-advanced-settings-servisni-poplatek-z-provize-letecke-spolecnosti" },
};
