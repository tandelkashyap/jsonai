import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft } from 'lucide-react';
import './Blog.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 20px', textAlign: 'center' }}>
        <h1>Post Not Found</h1>
        <p style={{ color: 'var(--text-muted)' }}>The blog post you are looking for does not exist.</p>
        <Link to="/blog" style={{ color: 'var(--brand-color)', textDecoration: 'none', marginTop: '20px', display: 'inline-block' }}>&larr; Back to blog</Link>
      </div>
    );
  }

  return (
    <article className="blog-post-page">
      <header className="blog-post-header">
        <Link to="/blog" className="blog-post-back">
          <ArrowLeft size={18} />
          Back to blog
        </Link>
        <h1>{post.title}</h1>
        <div className="blog-post-meta">
          <span>JSON AI Team</span>
          <span style={{ margin: '0 8px' }}>&bull;</span>
          <time>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>
      </header>
      
      <div 
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
