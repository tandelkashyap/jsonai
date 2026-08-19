import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        <h1>Post Not Found</h1>
        <p>The blog post you are looking for does not exist.</p>
        <Link to="/blog" style={{ color: 'var(--brand-color, #8b5cf6)', textDecoration: 'none' }}>&larr; Back to blog</Link>
      </div>
    );
  }

  return (
    <article style={{ maxWidth: '750px', margin: '0 auto', padding: '40px 20px 80px' }}>
      <div style={{ marginBottom: '40px' }}>
        <Link 
          to="/blog" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: 'var(--text-muted, #888)', 
            textDecoration: 'none',
            marginBottom: '20px',
            fontSize: '0.9rem'
          }}
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>
        <h1 style={{ fontSize: '3rem', margin: '0 0 15px 0', lineHeight: 1.2 }}>{post.title}</h1>
        <div style={{ fontSize: '1rem', color: 'var(--text-muted, #888)' }}>
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
      
      <div 
        className="blog-content"
        style={{
          fontSize: '1.1rem',
          lineHeight: 1.8,
          opacity: 0.9
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <style>{`
        .blog-content h2 { margin-top: 2em; margin-bottom: 0.75em; font-size: 1.8rem; }
        .blog-content h3 { margin-top: 1.5em; margin-bottom: 0.5em; font-size: 1.4rem; }
        .blog-content p { margin-bottom: 1.5em; }
        .blog-content ul, .blog-content ol { margin-bottom: 1.5em; padding-left: 1.5em; }
        .blog-content li { margin-bottom: 0.5em; }
        .blog-content a { color: var(--brand-color, #8b5cf6); text-decoration: underline; }
      `}</style>
    </article>
  );
}
