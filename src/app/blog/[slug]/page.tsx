import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

type Props = {
  params?: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((post) => post.slug === resolvedParams?.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Aiva',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | Aiva Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((post) => post.slug === resolvedParams?.slug);
  
  if (!post) {
    notFound();
  }
  
  // Find related posts (posts with at least one matching tag, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => 
      p.id !== post.id && 
      p.tags.some(tag => post.tags.includes(tag))
    )
    .slice(0, 3);
  
  return (
    <div className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Featured Image */}
        <section className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="max-w-[1200px] w-full mx-auto px-[5%] pb-12 text-white">
              <div className="flex items-center mb-4 text-sm md:text-base opacity-90">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-[800px]">
                {post.title}
              </h1>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-[1200px] mx-auto px-[5%]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.05)] p-8 md:p-10">
                  {/* Tags */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-[#F0F7FF] text-[#0056B3] text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Author */}
                  <div className="mt-12 pt-8 border-t border-[#EEEEEE]">
                    <h3 className="text-lg font-medium mb-2">Written by {post.author}</h3>
                    <p className="text-[#666666]">
                      Published on {post.date}
                    </p>
                  </div>
                </article>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Back to Blog */}
                <div className="mb-8">
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center text-[#0056B3] font-medium hover:opacity-80 transition-opacity"
                  >
                    <span className="mr-1">←</span> Back to Blog
                  </Link>
                </div>
                
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.05)] p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-5 pb-3 border-b border-[#EEEEEE]">
                      Related Articles
                    </h3>
                    <div className="space-y-6">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="flex flex-col md:flex-row gap-4">
                          <Link href={`/blog/${relatedPost.slug}`} className="block md:w-1/3 shrink-0">
                            <div className="relative h-24 w-full rounded-md overflow-hidden">
                              <Image
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                fill
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                          </Link>
                          <div>
                            <Link href={`/blog/${relatedPost.slug}`}>
                              <h4 className="text-lg font-medium hover:text-[#0056B3] transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                            </Link>
                            <p className="text-sm text-[#666666] mt-1">
                              {relatedPost.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Tags Cloud */}
                <div className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.05)] p-6">
                  <h3 className="text-xl font-semibold mb-5 pb-3 border-b border-[#EEEEEE]">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(blogPosts.flatMap(p => p.tags))).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-[#F0F7FF] text-[#0056B3] text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 