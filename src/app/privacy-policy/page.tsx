import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

export default function PolicyPage() {
  const filePath = path.join(process.cwd(), "content/english/privacy-policy/_index.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <div className="section">
      <div className="container">
        <h1>{data.title}</h1>
        <div className="mb-8"></div>
        <div style={{ lineHeight: 1.8 }}>
          <MDXRemote source={content} />
        </div>
      </div>
    </div>
  );
}
