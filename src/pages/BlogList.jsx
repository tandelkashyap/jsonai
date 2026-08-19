import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

export default function BlogList() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-bg-orbs">
          <div className="blog-hero-orb blog-hero-orb-1"></div>
          <div className="blog-hero-orb blog-hero-orb-2"></div>
        </div>
        <div className="blog-hero-content">
          <div className="blog-badge">
            <span className="blog-badge-dot"></span> Resources
          </div>
          <h1>
            JSON AI <span className="blog-gradient-text">Blog</span>
          </h1>
          <p className="blog-subtitle">
            Insights, guides, and tutorials on how to master JSON processing and leverage AI effectively.
          </p>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-content">
                <div className="blog-tags">
                  <span className="blog-tag">Tutorial</span>
                  <span className="blog-tag">JSON</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>JSON AI Team</span>
                  <span className="separator">&bull;</span>
                  <time>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
