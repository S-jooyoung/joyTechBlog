import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import './style.scss';

function PostHeader({ post, viewCount }) {
  return (
    <header className="post-header">
      <Img className="thumbnail" fluid={post.thumbnail.childImageSharp.fluid} alt="thumbnail" />
      <div className="info">
        <div className="categories">
          {post.categories.map((category) => (
            <Link className="category" key={category} to={`/posts/${category}`}>
              {category}
            </Link>
          ))}
        </div>
      </div>
      <h1 className="title">{post.title}</h1>
      <div className="info">
        <div className="author">
          posted by <strong>{post.author}</strong>,
        </div>{' '}
        {post.date}
        {viewCount && ` · ${viewCount} views`}
      </div>
    </header>
  );
}
export default PostHeader;
