import type { Metadata } from "next";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { SITE_URL } from "@/config/site";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Blog Entrepreneuriat — Guides et Conseils pour Artisans",
  description:
    "Guides pratiques, démarches administratives et conseils concrets pour créer votre entreprise dans les métiers manuels et du bâtiment.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog BugeySud Entreprendre — Guides pour Artisans",
    description:
      "Guides pratiques pour électriciens, plombiers, peintres et tous les artisans qui veulent créer leur entreprise.",
    url: `${SITE_URL}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts(24, 0);

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <span className="page-header-tag">Ressources</span>
          <h1>Blog & Guides pratiques</h1>
          <p>
            Démarches, statuts, premiers clients, matériel, facturation…
            Tout ce qu&apos;il faut savoir pour créer et développer votre
            entreprise artisanale.
          </p>
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
        </div>
      </div>
    </>
  );
}
