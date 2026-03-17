import { getPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import styles from "../blog/blog.module.css"; // Reuse blog styles for consistency

export const metadata = {
  title: "Case Studies | Sahajanand Digital",
  description: "Explore our successful projects and how we helped our clients grow.",
};

export default function CaseStudyPage() {
  const posts = getPosts("case-study");

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-8">
          <h1>Case Studies</h1>
          <p>Real-world examples of our expertise.</p>
        </div>
        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post.slug} className={styles.card}>
              <Link href={`/case-study/${post.slug}`}>
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
                <h2 className={styles.title}>
                  <Link href={`/case-study/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className={styles.description}>{post.description}</p>
                <Link href={`/case-study/${post.slug}`} className={styles.link}>
                  View Case Study &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
