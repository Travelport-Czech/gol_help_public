"use client";

import { usePortal } from "@/app/portal/layout";
import s from "@/app/portal/portal-layout.module.css";

export function ArticleContactButton() {
  const { openContact, contactLabel } = usePortal();
  return (
    <button className={s.articleFooterBtnPrimary} onClick={openContact}>
      {contactLabel}
    </button>
  );
}
