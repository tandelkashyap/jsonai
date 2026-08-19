import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function BlogList() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>JSON AI Blog</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '40px' }}>
        Updates, tutorials, and insights on JSON, developer tools, and client-side web development.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {blogPosts.map((post) => (
          <article 
            key={post.slug} 
            style={{
              padding: '24px',
              borderRadius: '8px',
              backgroundColor: 'var(--bg-secondary, #1a1a1a)',
              border: '1px solid var(--border-color, #333)',
              textDecoration: 'none'
            }}
          >
            <h2 style={{ fontSize: '1.5rem', margin: '0 0 10px 0' }}>
              <Link to={`/blog/${post.slug}`} style={{ color: 'var(--text-primary, #fff)', textDecoration: 'none' }}>
                {post.title}
              </Link>
            </h2>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted, #888)', marginBottom: '15px' }}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <p style={{ margin: '0 0 20px 0', lineHeight: 1.6, opacity: 0.9 }}>
              {post.excerpt}
            </p>
            <Link 
              to={`/blog/${post.slug}`} 
              style={{
                display: 'inline-block',
                color: 'var(--brand-color, #8b5cf6)',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              Read article &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
