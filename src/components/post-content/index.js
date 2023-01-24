import React from 'react';
import './style.scss';
import Adsense from '../adsense';

function PostContent({ html }) {
  return (
    <div className="post-content">
      <Adsense client="cp-pub-4083591465738564" slot="6299083370" />
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default PostContent;
