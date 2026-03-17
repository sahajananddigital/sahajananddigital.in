import { getPostBySlug, getPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./post.module.css";

export async function generateStaticParams() {
  const posts = getPosts("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug("blog", slug);
  if (!post) return {};

  return {
    title: `${post.title} | Sahajanand Digital`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug("blog", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.date}>{new Date(post.date).toLocaleDateString()}</div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.imageWrapper}>
            <Image
              src={post.image.startsWith('/') ? post.image : `/${post.image}`}
              alt={post.title}
              width={1000}
              height={500}
              className={styles.image}
              priority
            />
          </div>
        </div>
        <div className={styles.content}>
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
