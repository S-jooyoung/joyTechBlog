import { Button } from '@mui/material';
import { navigate } from 'gatsby-link';
import React, { useCallback } from 'react';
import PostCard from '../post-card';
import './style.scss';

function PostCardColumn({ posts, showMoreButton, moreUrl }) {
  const onMoreButtonClick = useCallback(() => {
    navigate(moreUrl);
  }, [moreUrl]);

  return (
    <>
      <div className="post-tabs-latest">
        <p>Latest</p>
      </div>
      <div className="post-card-column-wrapper">
        <div className="post-card-column">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
      <div className="post-card-column-more">
        {showMoreButton && (
          <Button variant="outlined" onClick={onMoreButtonClick}>
            더보기
          </Button>
        )}
      </div>
    </>
  );
}

export default PostCardColumn;
