import { getPostBySlug, getPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "../../blog/[slug]/post.module.css"; // Reuse blog post styles

export async function generateStaticParams() {
  const posts = getPosts("case-study");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug("case-study", slug);
  if (!post) return {};

  return {
    title: `${post.title} | Case Study`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function CaseStudyPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug("case-study", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container">
        <div className={styles.header}>
          {post.date && <span className={styles.date}>Published on {new Date(post.date).toLocaleDateString()}</span>}
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.imageWrapper}>
            <Image
              src={post.image.startsWith('/') ? post.image : `/${post.image}`}
              alt={post.title}
              width={1200}
              height={600}
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
