import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

type PageProps = {
  params: {
    skill: string;
    slug: string;
  };
};

export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), 'public/blogs');
  const params: { skill: string; slug: string }[] = [];

  try {
    const skills = await fs.readdir(blogsDir);
    for (const skill of skills) {
      const skillDir = path.join(blogsDir, skill);
      const files = await fs.readdir(skillDir);
      for (const file of files) {
        if (file.endsWith('.md')) {
          params.push({
            skill,
            slug: file.replace(/\.md$/, ''),
          });
        }
      }
    }
    return params;
  } catch (err) {
    console.error('Error generating static params:', err);
    return [];
  }
}

export default async function BlogPostPage({ params }: { params: any }) {
  const { skill, slug } = params as { skill: string; slug: string };

  const filePath = path.join(
    process.cwd(),
    'public/blogs',
    skill,
    `${slug}.md`
  );

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-12 text-white">
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/70 shadow-2xl border border-slate-700 p-8">
          <header className="mb-10 border-b border-slate-700 pb-6">
            <h1 className="text-4xl font-bold text-blue-400">{data.title}</h1>
            <p className="text-sm text-gray-400 mt-2">{data.date}</p>
          </header>
          <article className="prose prose-invert prose-slate max-w-none text-lg leading-relaxed">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
