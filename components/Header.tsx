"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="site-logo" aria-label="BugeySud Entreprendre — Accueil">
          <div className="site-logo-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="12" width="4" height="6" rx="1" fill="white"/>
              <rect x="8" y="7" width="4" height="11" rx="1" fill="white"/>
              <rect x="14" y="3" width="4" height="15" rx="1" fill="white"/>
            </svg>
          </div>
          <span>BugeySud Entreprendre</span>
        </Link>

        {/* Navigation */}
        <nav className="main-nav" aria-label="Navigation principale">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.href === "/contact"
                ? "nav-cta"
                : pathname === item.href
                  ? "active"
                  : ""
              }
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
