import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function SkillBlogList({ params }: { params: { skill: string } }) {
  const blogDir = path.join(process.cwd(), 'public/blogs', params.skill);
  const files = fs.readdirSync(blogDir);

  type Post = {
    slug: string;
    title: any;
    date: any;
    description?: string;
    [key: string]: any;
  };

  const posts: Post[] = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title ?? filename.replace(/\.md$/, ''),
      date: data.date,
      description: data.description,
      ...data
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 capitalize border-b border-blue-500 pb-2">{params.skill} Blog Posts</h1>
        <ul className="space-y-6">
          {posts.map(post => (
            <li key={post.slug} className="p-4 rounded-lg border border-slate-700 bg-slate-800/60 hover:bg-slate-700 transition-all">
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