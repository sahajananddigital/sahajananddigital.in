import { getPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog | Sahajanand Digital",
  description: "Read our latest articles on web development, SEO, and IT solutions.",
};

export default function BlogPage() {
  const posts = getPosts("blog");

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-8">
          <h1>Latest Blog Posts</h1>
          <p>Insights and articles from our team.</p>
        </div>
        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post.slug} className={styles.card}>
              <Link href={`/blog/${post.slug}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.image.startsWith('/') ? post.image : `/${post.image}`}
                    alt={post.title}
                    fill
                    className={styles.image}
                  />
                </div>
              </Link>
              <div className={styles.content}>
                <div className={styles.date}>{new Date(post.date).toLocaleDateString()}</div>
                <h2 className={styles.title}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className={styles.description}>{post.description}</p>
                <Link href={`/blog/${post.slug}`} className={styles.link}>
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
