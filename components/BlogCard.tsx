import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const category = post.categories?.[0];
  const publishedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <article className="card" style={{ display: "flex", flexDirection: "column" }}>
      {post.cover?.file_url && (
        <div className="card-img">
          <Image
            src={post.cover.file_url}
            alt={post.cover.alt || post.h1 || post.slug}
            width={640}
            height={360}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            loading="lazy"
          />
        </div>
      )}
      <div className="card-body" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {category && (
          <Link
            href={`/blog/categorie/${category.slug}`}
            className="card-tag"
          >
            {category.label}
          </Link>
        )}
        <h2 className="card-title">
          <Link href={`/blog/${post.slug}`}>
            {post.h1 || post.seo_title || post.slug}
          </Link>
        </h2>
        {post.excerpt && (
          <p className="card-excerpt">{post.excerpt}</p>
        )}
        <div className="card-meta" style={{ marginTop: "auto" }}>
          {publishedDate && (
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <time dateTime={post.published_at}>{publishedDate}</time>
            </span>
          )}
          {post.author?.name && (
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              {post.author.name}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
