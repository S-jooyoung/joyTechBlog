import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './style.scss';
import Image from '../image';

function PostHeader({ post, profileImage }) {
  const thumbnailSrc = getImage(post.thumbnail);
  return (
    <header className="post-header">
      <GatsbyImage className="thumbnail" image={thumbnailSrc} alt="thumbnail" />
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
        <div>
          <Image className="profileImage" src={profileImage} alt="profileImage" />
        </div>
        <div className="introduce">
          <div className="author">
            <strong>{post.author}</strong>
          </div>
          <div className="date">{post.date}</div>
        </div>
      </div>
    </header>
  );
}
export default PostHeader;
