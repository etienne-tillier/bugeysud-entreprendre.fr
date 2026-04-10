import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "À propos — BugeySud Entreprendre",
  description:
    "Découvrez l'histoire et la mission de BugeySud Entreprendre : accompagner les artisans et futurs entrepreneurs du Bugey Sud et de toute la France.",
  alternates: { canonical: `${SITE_URL}/a-propos` },
};

const values = [
  {
    icon: "🎯",
    title: "Clarté avant tout",
    desc: "Pas de jargon administratif. Des explications que votre voisin comprendrait.",
  },
  {
    icon: "🤝",
    title: "Accessibilité",
    desc: "Diplôme ou pas, famille ou pas, capital ou pas : on part de votre situation réelle.",
  },
  {
    icon: "⚒️",
    title: "Concret et actionnable",
    desc: "Chaque guide contient des étapes précises, des outils gratuits et des exemples réels.",
  },
  {
    icon: "🌱",
    title: "Pragmatisme",
    desc: "On ne vend pas de rêve. On montre un chemin réaliste avec ses opportunités et ses défis.",
  },
];

const milestones = [
  { year: "2022", event: "Création de la plateforme, premiers guides publiés" },
  { year: "2023", event: "+50 guides pratiques, lancement des témoignages d'artisans" },
  { year: "2024", event: "Partenariats avec des Chambres de Métiers locales" },
  { year: "2025", event: "Refonte complète et ouverture à toute la France" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <span className="page-header-tag">Qui sommes-nous</span>
          <h1>À propos de BugeySud Entreprendre</h1>
          <p>
            Une plateforme née d&apos;un constat simple : trop d&apos;artisans talentueux
            n&apos;osent pas se lancer faute d&apos;information accessible.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="about-hero-img">
            <Image
              src="/images/reassure-trades.jpeg"
              alt="Artisans et entrepreneurs du Bugey Sud"
              width={1200}
              height={450}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              priority
            />
          </div>

          <div style={{ maxWidth: 800 }}>
            <span className="section-tag">Notre histoire</span>
            <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "var(--text)", margin: "0.75rem 0 1.25rem" }}>
              Nés du terrain, pour le terrain
            </h2>
            <div className="content-page">
              <p>
                BugeySud Entreprendre est né en 2022 dans l&apos;Ain, au cœur du Bugey Sud.
                À l&apos;origine, un groupe d&apos;entrepreneurs locaux et de professionnels de
                l&apos;accompagnement à la création d&apos;entreprise qui partageaient le même
                constat : les ressources existantes sont soit trop complexes, soit trop
                generiques.
              </p>
              <p>
                L&apos;artisan qui veut se lancer n&apos;a pas besoin d&apos;un traité de droit des
                sociétés. Il a besoin de savoir <strong>concrètement</strong> comment
                s&apos;immatriculer en ligne, quel régime choisir pour sa situation de famille,
                et comment décrocher ses trois premiers clients.
              </p>
              <p>
                Depuis sa création, la plateforme a accompagné des centaines d&apos;artisans
                dans leur transition vers l&apos;indépendance : électriciens, plombiers,
                peintres, menuisiers, jardiniers, boulangers, couvreurs, carreleurs…
                Tous ont une chose en commun : ils avaient le savoir-faire, pas la méthode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Ce qui nous guide</span>
            <h2>Nos valeurs</h2>
            <p>Quatre principes qui orientent chaque guide, chaque article, chaque réponse.</p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Notre parcours</span>
            <h2>Quelques jalons</h2>
          </div>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            {milestones.map((m, i) => (
              <div
                key={m.year}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  paddingBottom: i < milestones.length - 1 ? "1.5rem" : 0,
                  borderBottom: i < milestones.length - 1 ? "1px solid var(--border)" : "none",
                  marginBottom: i < milestones.length - 1 ? "1.5rem" : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-title)",
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    color: "var(--accent)",
                    minWidth: 60,
                    paddingTop: "0.1rem",
                  }}
                >
                  {m.year}
                </div>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {m.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>
            Prêt à écrire votre propre histoire ?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "2rem", maxWidth: 480, margin: "0 auto 2rem" }}>
            Consultez nos guides ou contactez-nous pour un premier échange sur votre projet.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/blog" className="btn btn-primary">
              Découvrir les guides
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
