import React from "react";
import './blogcard.css';

const BlogCard = () => {

  return(
    <div className="blog-card">
      <img src="" alt="Blog cover" className="blog-image" />

      <div className="blog-content">
        <h3 className="blog-title">Title</h3>
        <p className="blog-excerpt">
          A short summary or excerpt from the blog post to grab attention.
        </p>
        <p className="blog-date">Published on May 15, 2025</p>

        <a href="/blog/sample-slug" className="read-more">Read more →</a>
      </div>
    </div>
  )
}

export default BlogCard;