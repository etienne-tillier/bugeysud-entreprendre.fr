import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { MarkdownLink } from "@/components/MarkdownLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getBlogPostBySlug } from "@/lib/blog";
import { injectDofollowMarker } from "@/lib/dofollow";
import { SITE_URL, SITE_NAME } from "@/config/site";

export const revalidate = 21600;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const buildAlternatesByLocale = (post: {
  slug: string;
  default_locale?: string | null;
  translations?: unknown;
}) => {
  const siteOrigin = SITE_URL.replace(/\/+$/, "");
  const buildArticleUrl = (articleSlug: string) =>
    `${siteOrigin}/blog/${articleSlug}`;

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = buildArticleUrl(post.slug);

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(
      post.translations as Record<string, unknown>
    )) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug =
        typeof translation.slug === "string" ? translation.slug : "";
      const status =
        typeof translation.status === "string"
          ? translation.status
          : "published";
      if (!translatedSlug || status !== "published") continue;
      languages[locale] = buildArticleUrl(translatedSlug);
    }
  }

  return languages;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  const title = post.seo_title || post.h1 || post.slug;
  const description = post.meta_description || post.excerpt || "";
  const imageUrl = post.cover?.file_url || "/images/hero-artisan.jpeg";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
      languages: buildAlternatesByLocale(post),
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      authors: post.author?.name ? [post.author.name] : [SITE_NAME],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return notFound();

  // Handle translations
  let displayH1 = post.h1;
  let displayBody = post.body_md;
  if (post.slug !== slug && post.translations) {
    for (const [, val] of Object.entries(post.translations)) {
      if ((val as { slug?: string }).slug === slug) {
        displayH1 = (val as { h1?: string }).h1 || displayH1;
        displayBody = (val as { body_md?: string }).body_md || displayBody;
        break;
      }
    }
  }

  const bodyMd = injectDofollowMarker(displayBody || "");

  const publishedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const category = post.categories?.[0];

  return (
    <div className="section">
      <div className="container-narrow">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link>
          <span className="breadcrumb-sep" aria-hidden="true">›</span>
          <Link href="/blog">Blog</Link>
          {category && (
            <>
              <span className="breadcrumb-sep" aria-hidden="true">›</span>
              <Link href={`/blog/categorie/${category.slug}`}>{category.label}</Link>
            </>
          )}
          <span className="breadcrumb-sep" aria-hidden="true">›</span>
          <span aria-current="page">{displayH1}</span>
        </nav>

        {/* Cover image */}
        {post.cover?.file_url && (
          <div className="article-cover">
            <Image
              src={post.cover.file_url}
              alt={post.cover.alt || displayH1 || post.slug}
              width={1200}
              height={630}
              priority
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        )}

        {/* Language switcher */}
        <LanguageSwitcher post={post} currentSlug={slug} />

        {/* Article header */}
        <header className="article-header">
          {category && (
            <Link
              href={`/blog/categorie/${category.slug}`}
              className="card-tag"
              style={{ display: "inline-block", marginBottom: "0.75rem" }}
            >
              {category.label}
            </Link>
          )}
          <h1 className="article-header" style={{ fontFamily: "var(--font-title)", fontSize: "clamp(1.6rem,4vw,2.8rem)", fontWeight: 900, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.15 }}>
            {displayH1}
          </h1>
          <div className="article-meta">
            {publishedDate && (
              <span className="article-meta-chip">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <time dateTime={post.published_at ?? ""}>{publishedDate}</time>
              </span>
            )}
            {post.author?.name && (
              <span className="article-meta-chip">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                {post.author.name}
              </span>
            )}
          </div>
        </header>

        {/* Article body */}
        <article>
          <div className="prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{ a: MarkdownLink }}
            >
              {bodyMd}
            </ReactMarkdown>
          </div>

          {/* Author box */}
          {post.author && (
            <div className="author-box">
              {post.author.avatar_url && (
                <div className="author-box-avatar">
                  <Image
                    src={post.author.avatar_url}
                    alt={post.author.name}
                    width={64}
                    height={64}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <div>
                <div className="author-box-name">{post.author.name}</div>
                {post.author.bio && (
                  <div className="author-box-bio">{post.author.bio}</div>
                )}
              </div>
            </div>
          )}
        </article>

        {/* Back to blog */}
        <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
          <Link href="/blog" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Retour aux articles
          </Link>
        </div>
      </div>
    </div>
  );
}
