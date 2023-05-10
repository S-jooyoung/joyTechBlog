import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './style.scss';

function PostCard({ post }) {
  const { id, slug, title, excerpt, date, categories, thumbnail } = post;
  const thumbnailSrc = getImage(thumbnail);

  return (
    <div className="post-card-wrapper">
      <Link className="post-card" key={id} to={slug}>
        <GatsbyImage className="thumbnail" image={thumbnailSrc} alt="thumbnail" />
        <div>
          <div className="title">{title}</div>
          <p className="description" dangerouslySetInnerHTML={{ __html: excerpt }} />
          <div className="info">
            <div className="date">{date}</div>
            <div className="categories">
              {categories.map((category) => (
                <div className="category" key={category}>
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
