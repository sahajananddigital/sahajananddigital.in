import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/english');

export function getPosts(type: string) {
  const dirPath = path.join(contentDirectory, type);
  if (!fs.existsSync(dirPath)) return [];
  
  const fileNames = fs.readdirSync(dirPath);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') && fileName !== '_index.md')
    .map((fileName) => {
      const filenameSlug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(dirPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug || filenameSlug,
        ...(data as { title: string; date: string; image: string; description: string; category?: string }),
        content,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(type: string, slug: string) {
  const dirPath = path.join(contentDirectory, type);
  if (!fs.existsSync(dirPath)) return null;

  const fileNames = fs.readdirSync(dirPath);
  for (const fileName of fileNames) {
    if (fileName === '_index.md' || !fileName.endsWith('.md')) continue;

    const fullPath = path.join(dirPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const filenameSlug = fileName.replace(/\.md$/, '');
    const currentSlug = data.slug || filenameSlug;

    if (currentSlug === slug) {
      return {
        slug: currentSlug,
        ...(data as { title: string; date: string; image: string; description: string }),
        content,
      };
    }
  }
  
  return null;
}
