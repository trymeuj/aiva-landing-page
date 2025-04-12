import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ title, excerpt, image, link }) => {
  return (
    <div className="bg-white rounded-card shadow-card border border-cardBorder overflow-hidden card-hover">
      <div className="relative h-52 w-full">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-card-padding">
        <h3 className="text-card-heading font-medium mb-heading-margin text-secondary">{title}</h3>
        <p className="text-tertiary mb-5 line-clamp-2">{excerpt}</p>
        <Link 
          href={link} 
          className="text-linkColor font-medium hover:opacity-80 transition-opacity"
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
    }
  ];

  return (
    <section className="w-full py-section-mobile md:py-section">
      <div className="section-divider mb-section"></div>
      <div className="max-w-content mx-auto px-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-section-heading text-foreground">
          From the Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-margin">
          {blogPosts.map(post => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 