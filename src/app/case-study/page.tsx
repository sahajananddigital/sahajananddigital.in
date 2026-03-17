import { getPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import styles from "./CaseStudy.module.css";

export const metadata = {
  title: "Case Studies | Sahajanand Digital",
  description: "Explore our successful projects and how we helped our clients grow through innovative digital solutions.",
};

export default function CaseStudyPage() {
  const posts = getPosts("case-study");

  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="mb-6">Proven Success Stories</h1>
          <p className="text-lg max-w-3xl mx-auto">Discover how we transform complex business challenges into elegant, scalable digital solutions that drive real business impact.</p>
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
                {post.category && <span className={styles.category}>{post.category}</span>}
                <h2 className={styles.title}>
                  <Link href={`/case-study/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className={styles.description}>{post.description}</p>
                <Link href={`/case-study/${post.slug}`} className={styles.link}>
                  View Case Study <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
