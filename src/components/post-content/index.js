import React from 'react';
import './style.scss';
import AdSense from '../adsense';
function PostContent({ html }) {
  return (
    <div className="post-content">
      <AdSense client="ca-pub-4083591465738564" slot="4148110521" />
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default PostContent;
