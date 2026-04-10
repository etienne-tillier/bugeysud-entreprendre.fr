import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact — BugeySud Entreprendre",
  description:
    "Posez vos questions sur la création d'entreprise dans les métiers manuels. Notre équipe répond à toutes vos interrogations en 48h.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

const faq = [
  {
    q: "Puis-je créer une entreprise sans diplôme ?",
    a: "Oui, dans la grande majorité des métiers manuels. Certains métiers réglementés (électricité, gaz) requièrent des habilitations spécifiques, mais pas de diplôme d'État au sens strict. On vous détaille tout dans nos guides.",
  },
  {
    q: "Quelle est la différence entre micro-entreprise et SASU ?",
    a: "La micro-entreprise est plus simple à gérer mais plafonnée en chiffre d'affaires. La SASU offre plus de flexibilité et protège mieux vos biens personnels, mais implique plus de formalités. Notre guide comparatif vous aide à choisir.",
  },
  {
    q: "Comment trouver mes premiers clients ?",
    a: "Bouche-à-oreille dans votre réseau, Leboncoin Pro, Google My Business, flyers dans le quartier, partenariats avec des artisans complémentaires… On a listé les 8 méthodes les plus efficaces pour démarrer.",
  },
  {
    q: "Combien de temps faut-il pour créer sa micro-entreprise ?",
    a: "Entre 30 minutes et 48h en ligne sur le Guichet Unique (guichet-entreprises.fr). Le numéro SIRET est attribué sous 1 à 4 semaines selon l'URSSAF.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <span className="page-header-tag">Parlons de votre projet</span>
          <h1>Contactez-nous</h1>
          <p>
            Une question sur votre situation, un doute sur le statut à
            choisir, un besoin d&apos;orientation ? On est là pour vous aider.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info card */}
            <div className="contact-info-card">
              <h2 style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: "1.3rem", color: "#fff", marginBottom: "1.5rem" }}>
                Comment nous joindre
              </h2>

              <div className="contact-info-item">
                <div className="contact-info-icon">✉️</div>
                <div className="contact-info-text">
                  <strong>Email</strong>
                  <p>
                    <a href="mailto:contact@bugeysud-entreprendre.fr">
                      contact@bugeysud-entreprendre.fr
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">⏱️</div>
                <div className="contact-info-text">
                  <strong>Délai de réponse</strong>
                  <p>Sous 48h ouvrées, du lundi au vendredi</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div className="contact-info-text">
                  <strong>Secteur principal</strong>
                  <p>Bugey Sud, Ain (01) — France entière</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">🎯</div>
                <div className="contact-info-text">
                  <strong>On répond à</strong>
                  <p>
                    Vos questions sur la création d&apos;entreprise, le choix du
                    statut, les démarches, la fiscalité, le matériel et la
                    prospection commerciale.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: "2rem", padding: "1.25rem", background: "rgba(232,119,34,0.15)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(232,119,34,0.3)" }}>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  💡 <strong style={{ color: "#fff" }}>Astuce :</strong> Avant d&apos;écrire, consultez notre{" "}
                  <Link href="/blog" style={{ color: "var(--accent-light)", textDecoration: "underline" }}>
                    blog
                  </Link>{" "}
                  — votre question y a peut-être déjà une réponse détaillée.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="contact-faq">
              <h2 style={{ fontFamily: "var(--font-title)", fontWeight: 800, fontSize: "1.3rem", color: "var(--primary)", marginBottom: "1.5rem" }}>
                Questions fréquentes
              </h2>

              {faq.map((item) => (
                <div key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}

              <div style={{ marginTop: "2rem", padding: "1.25rem", background: "var(--sand)", borderRadius: "var(--radius-sm)", border: "1px solid var(--sand-dark)" }}>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                  Votre question ne figure pas ici ? Envoyez-nous un email à{" "}
                  <a
                    href="mailto:contact@bugeysud-entreprendre.fr"
                    style={{ color: "var(--primary)", fontWeight: 600 }}
                  >
                    contact@bugeysud-entreprendre.fr
                  </a>{" "}
                  en décrivant votre situation (métier visé, situation personnelle,
                  questions spécifiques). On vous répond dans les 48h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
