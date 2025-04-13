import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog | Aiva',
  description: 'Explore our latest articles about AI assistants, automation, and productivity.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full py-20 bg-[#0056B3] text-white">
          <div className="max-w-[1200px] mx-auto px-[5%]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl max-w-[700px] opacity-90">
              Insights, updates, and deep dives into the world of AI assistants and autonomous agents.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="w-full py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-[5%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.05)] border border-[#EEEEEE] overflow-hidden transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_8px_12px_rgba(0,0,0,0.08)]"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-56 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </Link>
                  <div className="p-7">
                    <div className="flex items-center mb-4 text-sm text-[#666666]">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h2 className="text-2xl font-semibold mb-3 text-[#333333] hover:text-[#0056B3] transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-[#666666] text-base mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="inline-block bg-[#F0F7FF] text-[#0056B3] text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-[#0056B3] font-medium hover:opacity-80 transition-opacity inline-flex items-center"
                    >
                      Read more <span className="ml-1">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 