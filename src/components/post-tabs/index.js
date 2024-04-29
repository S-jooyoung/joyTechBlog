import React, { useMemo } from 'react';
import { Tabs, Tab } from '@mui/material';
import PostCardColumn from '../post-card-column';
import './style.scss';

function PostTabs({ tabIndex, onChange, tabs, posts, showMoreButton }) {
  const tabPosts = useMemo(() => {
    if (tabs[tabIndex] === '모두') return posts;
    return posts.filter((post) => post.categories.includes(tabs[tabIndex]));
  }, [posts, tabs, tabIndex]);

  return (
    <div className="post-tabs-wrapper">
      {showMoreButton ? (
        <div />
      ) : (
        <div className="post-tabs">
          <Tabs
            className="mui-tabs"
            value={tabIndex}
            onChange={onChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabs.map((title, index) => (
              <Tab label={title} key={index} />
            ))}
          </Tabs>
        </div>
      )}
      <PostCardColumn
        posts={showMoreButton ? tabPosts.slice(0, 6) : tabPosts}
        showMoreButton={showMoreButton && tabPosts.length > 6}
        moreUrl={`posts/${tabIndex === 0 ? '' : tabs[tabIndex]}`}
      />
    </div>
  );
}
export default PostTabs;
