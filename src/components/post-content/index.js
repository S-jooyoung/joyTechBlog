import React from 'react';
import './style.scss';
import AdSense from '../adsense';
function PostContent({ html }) {
  return (
    <div className="post-content">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default PostContent;
