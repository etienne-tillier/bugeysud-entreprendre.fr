import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { SITE_NAME, SITE_URL } from "@/config/site";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Entreprendre dans le Bâtiment | Guide Complet BugeySud",
  description:
    "Découvrez comment créer votre entreprise dans le bâtiment : démarches, matériel, premiers clients. Guides pratiques pour électriciens, plombiers, peintres et artisans.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — Votre guide pour créer votre boîte`,
    description:
      "Tout savoir pour entreprendre dans les métiers manuels : du projet à la facturation, guides et conseils pratiques.",
    url: SITE_URL,
    images: [{ url: "/images/hero-artisan.jpeg", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    num: "1",
    title: "Valider votre idée",
    desc: "Identifiez votre marché local, vos futurs clients et vos tarifs. Une journée suffit pour tester la viabilité.",
  },
  {
    num: "2",
    title: "Choisir un statut",
    desc: "Micro-entreprise, SASU, EURL… Chaque situation est unique. On vous guide sans jargon pour choisir le bon régime.",
  },
  {
    num: "3",
    title: "S'immatriculer",
    desc: "Infogreffe, Guichet Unique, URSSAF : les démarches en ligne en moins de 30 minutes avec notre checklist.",
  },
  {
    num: "4",
    title: "Trouver vos premiers clients",
    desc: "Bouche-à-oreille, réseaux locaux, Leboncoin Pro : 5 méthodes concrètes pour décrocher votre premier chantier.",
  },
  {
    num: "5",
    title: "Facturer et gérer",
    desc: "Devis, factures, TVA, cotisations : les outils gratuits et les bons réflexes pour rester en règle.",
  },
];

const trades = [
  {
    name: "Électricien",
    desc: "Habilitations, matériel, tarifs",
    img: "/images/trade-electrician.jpeg",
    alt: "Électricien professionnel au travail",
  },
  {
    name: "Plombier",
    desc: "Devis, normes, équipements",
    img: "/images/trade-plumber.jpeg",
    alt: "Plombier au travail sur un chantier",
  },
  {
    name: "Paysagiste",
    desc: "Saisonnalité, clientèle, outils",
    img: "/images/trade-landscaper.jpeg",
    alt: "Paysagiste créatif dans un jardin",
  },
];

const testimonials = [
  {
    text: "J'avais peur de me lancer sans diplôme. Grâce à ces guides, j'ai créé ma micro-entreprise en peinture en 3 semaines. Aujourd'hui j'ai plus de chantiers que je ne peux en accepter.",
    name: "David M.",
    role: "Peintre en bâtiment, Ain",
    emoji: "🖌️",
  },
  {
    text: "La partie sur les premiers clients était exactement ce dont j'avais besoin. J'avais les compétences, pas la méthode. Je me suis lancé à 42 ans et je n'ai jamais regretté.",
    name: "Sophie L.",
    role: "Électricienne indépendante, Bugey",
    emoji: "⚡",
  },
  {
    text: "Ce site m'a aidé à comprendre la différence entre SASU et micro-entreprise sans me noyer dans la paperasse. Simple, clair, efficace.",
    name: "Karim B.",
    role: "Plombier-chauffagiste, Belley",
    emoji: "🔧",
  },
];

export default async function HomePage() {
  const posts = await getPublishedBlogPosts(3, 0);

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Bannière principale">
        <div className="container">
          <div className="hero-inner">
            <div className="animate-fade-up">
              <div className="hero-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Guides pour artisans et indépendants du bâtiment
              </div>
              <h1>
                Créez votre entreprise dans le bâtiment{" "}
                <em>en toute confiance</em>
              </h1>
              <p>
                Pas de diplôme requis, pas de jargon inutile. Des guides
                concrets pour électriciens, plombiers, peintres, jardiniers
                et tous les artisans qui veulent se lancer.
              </p>
              <div className="hero-actions">
                <Link href="/blog" className="btn btn-primary btn-lg">
                  Voir les guides pratiques
                </Link>
                <Link href="/contact" className="btn btn-secondary btn-lg">
                  Poser une question
                </Link>
              </div>

              {/* Stats */}
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">+340 000</span>
                  <span className="stat-label">créations d&apos;entreprises artisanales / an</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">72 %</span>
                  <span className="stat-label">sans diplôme spécifique requis</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">48 h</span>
                  <span className="stat-label">pour créer sa micro-entreprise en ligne</span>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="hero-image animate-fade-up-delay-2" aria-hidden="true">
              <Image
                src="/images/hero-artisan.jpeg"
                alt="Artisan confiant dans son atelier"
                width={800}
                height={600}
                priority
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── RASSURER ───────────────────────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="rassurer-h2">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="section-tag">Pourquoi pas vous ?</span>
              <h2 id="rassurer-h2" style={{ fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>
                Tout le monde peut entreprendre — vraiment
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Vous avez un diplôme ? Parfait. Vous n&apos;en avez pas ? Aucun problème.
                En France, la plupart des métiers du bâtiment s&apos;exercent librement
                dès lors que vous êtes déclaré. Ce qu&apos;il faut, c&apos;est du savoir-faire,
                de la rigueur et un bon accompagnement.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Pas de bac indispensable pour démarrer en électricité, peinture ou plomberie",
                  "Une famille à charge ? La micro-entreprise vous protège sans risquer vos biens personnels",
                  "Pas de local ? Intervenez directement chez vos clients",
                  "Zéro capital de départ obligatoire pour une EURL ou auto-entreprise",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.95rem", color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--accent)", fontWeight: 700, marginTop: "0.1rem", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "4/3", boxShadow: "var(--shadow-lg)" }}>
              <Image
                src="/images/reassure-trades.jpeg"
                alt="Diversité des métiers manuels en France"
                width={700}
                height={525}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5 ÉTAPES ───────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="steps-h2">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Méthode</span>
            <h2 id="steps-h2">Les 5 étapes clés pour créer votre boîte</h2>
            <p>Un chemin balisé, de l&apos;idée à la première facture encaissée.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div className="steps-grid" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {steps.map((s) => (
                <div className="step-card" key={s.num} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div className="step-num" style={{ flexShrink: 0 }}>{s.num}</div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.35rem" }}>{s.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "4/5", boxShadow: "var(--shadow-lg)" }}>
              <Image
                src="/images/steps-business.jpeg"
                alt="Processus de création d'entreprise artisanale"
                width={600}
                height={750}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MÉTIERS ────────────────────────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="metiers-h2">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Votre secteur</span>
            <h2 id="metiers-h2">Guides par métier</h2>
            <p>
              Chaque métier a ses spécificités. Retrouvez les conseils adaptés
              à votre activité sur le blog.
            </p>
          </div>

          <div className="grid-3">
            {trades.map((trade) => (
              <div className="trade-card" key={trade.name}>
                <Image
                  src={trade.img}
                  alt={trade.alt}
                  width={400}
                  height={400}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                <div className="trade-card-overlay">
                  <h3>{trade.name}</h3>
                  <p>{trade.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p style={{ color: "var(--text-muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
              Et aussi : Maçon, Carreleur, Boulanger, Charpentier, Couvreur, Menuisier…
            </p>
            <Link href="/blog" className="btn btn-outline">
              Tous les guides métiers →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TÉMOIGNAGES ────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="temoignages-h2">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Ils l&apos;ont fait</span>
            <h2 id="temoignages-h2">Des artisans qui ont sauté le pas</h2>
            <p>Leurs parcours prouvent que c&apos;est possible, quel que soit votre profil.</p>
          </div>

          <div className="grid-3">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.emoji}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DERNIERS ARTICLES ──────────────────────────────────────────── */}
      {posts.length > 0 && (
        <section className="section section-alt" aria-labelledby="blog-h2">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Le blog</span>
              <h2 id="blog-h2">Derniers articles</h2>
              <p>Conseils pratiques, démarches pas-à-pas et retours d&apos;expérience.</p>
            </div>

            <div className="grid-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/blog" className="btn btn-outline">
                Voir tous les articles →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA FINAL ──────────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="cta-h2">
        <div className="container">
          <div className="cta-section">
            <span className="section-tag" style={{ color: "var(--accent-light)" }}>Passez à l&apos;action</span>
            <h2 id="cta-h2">Prêt à vous lancer ?</h2>
            <p>
              Une question sur votre situation ? Un doute sur le statut à
              choisir ? Écrivez-nous, on répond dans les 48h.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginRight: "1rem" }}>
              Nous contacter
            </Link>
            <Link href="/blog" className="btn btn-secondary btn-lg">
              Lire les guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
