import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

const BlogCard = ({ title, excerpt, image, link }: BlogCardProps) => {
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
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI Assistants",
      excerpt: "Discover how autonomous AI agents are revolutionizing productivity and redefining human-computer interaction.",
      image: "/blog-1.jpg",
      link: "/blog/future-of-ai-assistants"
    },
    {
      id: 2,
      title: "Workflow Automation vs. Autonomous Agents",
      excerpt: "Understanding the fundamental differences between traditional workflow automation and truly autonomous AI agents.",
      image: "/blog-2.jpg",
      link: "/blog/workflow-vs-autonomous"
    },
    {
      id: 3,
      title: "How AI Agents Collaborate",
      excerpt: "An inside look at the sophisticated mechanisms enabling multiple AI agents to work together seamlessly.",
      image: "/blog-3.jpg",
      link: "/blog/ai-agent-collaboration"
    },
    {
      id: 4,
      title: "The Next Generation of Personal AI",
      excerpt: "Explore how personal AI assistants are evolving to become more intelligent and capable.",
      image: "/blog-1.jpg", // Reusing image for example
      link: "/blog/next-gen-personal-ai"
    }
  ];

  return (
    <section className="w-full py-24 md:py-28 bg-[#F6F6F6]">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#222222]">
          From the Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 