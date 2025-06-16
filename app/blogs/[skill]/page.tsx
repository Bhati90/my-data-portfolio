// app/blogs/[skill]/page.tsx
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';


export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), 'public/blogs');
  try {
    const skills = await fs.readdir(blogsDir);
    return skills.map((skill) => ({ skill }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogListPage({ params }:{ params: any }) {
    const { skill } = params;
  const blogDir = path.join(process.cwd(), 'public/blogs', skill);

  let files: string[] = [];
  try {
    const entries = await fs.readdir(blogDir, { withFileTypes: true });
    files = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
      .map((entry) => entry.name);
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-gray-300">
        <p>No blog directory found for "{skill}"</p>
      </div>
    );
  }

  const posts = await Promise.all(
    files.map(async (filename) => {
      const fileContent = await fs.readFile(path.join(blogDir, filename), 'utf-8');
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title || filename,
        date: data.date || '',
        description: data.description || '',
      };
    })
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 capitalize border-b border-blue-500 pb-2">
          {params.skill} Blog Posts
        </h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="p-4 rounded-lg border border-slate-700 bg-slate-800/60 hover:bg-slate-700 transition-all"
            >
              <Link href={`/blogs/${params.skill}/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-blue-400 hover:underline">{post.title}</h2>
              </Link>
              <p className="text-sm text-gray-400 mt-1">{post.date}</p>
              {post.description && <p className="mt-2 text-gray-300 text-sm">{post.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
