import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales — BugeySud Entreprendre",
  description: "Mentions légales du site bugeysud-entreprendre.fr : éditeur, hébergeur, propriété intellectuelle et responsabilité.",
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Mentions légales</h1>
        </div>
      </div>

      <div className="section">
        <div className="container-narrow">
          <div className="content-page">

            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>bugeysud-entreprendre.fr</strong> est édité par :
            </p>
            <ul>
              <li><strong>Raison sociale :</strong> BugeySud Entreprendre</li>
              <li><strong>Forme juridique :</strong> Entreprise individuelle</li>
              <li><strong>Responsable de publication :</strong> Équipe BugeySud Entreprendre</li>
              <li><strong>Adresse :</strong> Bugey Sud, Ain (01), France</li>
              <li>
                <strong>Contact :</strong>{" "}
                <a href="mailto:contact@bugeysud-entreprendre.fr" style={{ color: "var(--primary)", fontWeight: 600 }}>
                  contact@bugeysud-entreprendre.fr
                </a>
              </li>
            </ul>

            <h2>2. Hébergeur</h2>
            <ul>
              <li><strong>Hébergeur :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
              <li><strong>Site web :</strong> <span>vercel.com</span></li>
            </ul>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, guides, images, structure,
              mise en page) est protégé par le droit de la propriété intellectuelle et reste la
              propriété exclusive de BugeySud Entreprendre, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation,
              totale ou partielle, de tout ou partie des contenus de ce site, quel que soit le
              moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable de
              BugeySud Entreprendre.
            </p>

            <h2>4. Limitation de responsabilité</h2>
            <p>
              Les informations publiées sur ce site ont un caractère informatif et général.
              Elles ne constituent pas un conseil juridique, fiscal ou comptable. BugeySud
              Entreprendre s&apos;efforce de maintenir ces informations à jour mais ne peut
              garantir leur exactitude, exhaustivité ou actualité.
            </p>
            <p>
              Pour toute décision importante concernant la création de votre entreprise,
              nous vous conseillons de consulter un professionnel qualifié (expert-comptable,
              avocat, conseiller CCI ou Chambre de Métiers).
            </p>

            <h2>5. Liens hypertextes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. BugeySud Entreprendre
              n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
              leur contenu ou leurs pratiques en matière de confidentialité.
            </p>

            <h2>6. Droit applicable</h2>
            <p>
              Le présent site est soumis au droit français. En cas de litige, les tribunaux
              français seront seuls compétents.
            </p>

            <h2>7. Contact</h2>
            <p>
              Pour toute question relative à ces mentions légales :{" "}
              <a href="mailto:contact@bugeysud-entreprendre.fr" style={{ color: "var(--primary)", fontWeight: 600 }}>
                contact@bugeysud-entreprendre.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
