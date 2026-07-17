"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import { CeeBrand } from "@/components/CeeBrand";

export function ContentWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPortal = pathname?.startsWith("/portal");
  const isHome = pathname === "/" || pathname === "";

  if (isPortal || isHome) {
    return <>{children}</>;
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <CeeBrand height={26} className="brand" />
          <nav className="top-nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/portal" className="nav-link">Portal</Link>
            <Link href="/getting-started" className="nav-link">Getting Started</Link>
            <Link href="/configuration" className="nav-link">Configuration</Link>
            <Link href="/operations" className="nav-link">Operations</Link>
            <Link href="/troubleshooting" className="nav-link">Troubleshooting</Link>
            <Link href="/release-notes" className="nav-link">Release Notes</Link>
          </nav>
        </div>
      </header>
      <main className="container content-shell">{children}</main>
    </>
  );
}
