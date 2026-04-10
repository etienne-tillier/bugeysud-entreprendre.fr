import Link from "next/link";
import { footerNav, SITE_NAME, SITE_DOMAIN } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="#e87722"/>
                <rect x="4" y="15" width="6" height="9" rx="1.5" fill="white"/>
                <rect x="11" y="10" width="6" height="14" rx="1.5" fill="white"/>
                <rect x="18" y="5" width="6" height="19" rx="1.5" fill="white"/>
              </svg>
              <span>{SITE_NAME}</span>
            </div>
            <p>
              Le guide de référence pour créer votre entreprise dans les métiers
              manuels et du bâtiment. Démarches claires, conseils concrets,
              résultats réels.
            </p>
          </div>

          {/* Ressources */}
          <div className="footer-col">
            <h4>Ressources</h4>
            <ul className="footer-links">
              {footerNav.ressources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="footer-col">
            <h4>Informations</h4>
            <ul className="footer-links">
              {footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>
            © {year} {SITE_NAME} — {SITE_DOMAIN}
          </span>
          <span>
            Fait avec passion pour les artisans de France 🔨
          </span>
        </div>
      </div>
    </footer>
  );
}
