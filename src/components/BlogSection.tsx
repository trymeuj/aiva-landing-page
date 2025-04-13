import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  link: string;
  date: string;
  author: string;
}

const BlogCard = ({ title, excerpt, image, link, date, author }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.05)] border border-[#EEEEEE] overflow-hidden transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_8px_12px_rgba(0,0,0,0.08)]">
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-7">
        <div className="flex items-center mb-3 text-sm text-[#666666]">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-[#333333]">{title}</h3>
        <p className="text-[#666666] text-base mb-4 line-clamp-2">{excerpt}</p>
        <Link 
          href={link} 
          className="text-[#0056B3] font-medium hover:opacity-80 transition-opacity"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  // Use only the first 4 blog posts for the home page
  const displayedPosts = blogPosts.slice(0, 4);

  return (
    <section className="w-full py-24 md:py-28 bg-[#F6F6F6]">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4 md:mb-0">
            From the Blog
          </h2>
          <Link 
            href="/blog" 
            className="text-[#0056B3] font-medium text-lg hover:opacity-80 transition-opacity"
          >
            View all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPosts.map(post => (
            <BlogCard 
              key={post.id} 
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              link={`/blog/${post.slug}`}
              date={post.date}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 