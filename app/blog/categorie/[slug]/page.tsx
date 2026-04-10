import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPostsByCategory, getCategoryInfo } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { SITE_URL } from "@/config/site";

export const revalidate = 21600;

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryInfo(slug);
  const label = category?.label || slug;

  return {
    title: `${label} — Articles et guides | BugeySud Entreprendre`,
    description:
      category?.description ||
      `Tous les articles sur "${label}" pour créer votre entreprise dans les métiers manuels.`,
    alternates: {
      canonical: `${SITE_URL}/blog/categorie/${slug}`,
    },
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [posts, category] = await Promise.all([
    getBlogPostsByCategory(slug, 24, 0),
    getCategoryInfo(slug),
  ]);

  const label = category?.label || slug;

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb" style={{ color: "rgba(255,255,255,0.5)" }} aria-label="Fil d'Ariane">
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)" }}>Accueil</Link>
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
            <Link href="/blog" style={{ color: "rgba(255,255,255,0.6)" }}>Blog</Link>
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
            <span style={{ color: "rgba(255,255,255,0.9)" }} aria-current="page">{label}</span>
          </nav>
          <span className="page-header-tag">Catégorie</span>
          <h1>{label}</h1>
          {category?.description && <p>{category.description}</p>}
        </div>
      </div>

      {/* Articles */}
      <div className="section">
        <div className="container">
          {posts.length === 0 ? (
            <div className="empty-state">
              <p>Aucun article publié pour le moment.</p>
            </div>
          ) : (
            <div className="grid-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
            <Link href="/blog" className="back-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }} aria-hidden="true">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              Voir tous les articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
