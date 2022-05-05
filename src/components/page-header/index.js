import { Link, StaticQuery, graphql } from 'gatsby';
import React, { useRef, memo } from 'react';
// import Post from '../../models/post';
// import PostSearch from '../post-search';
import './style.scss';

const PageHeader = memo(({ siteTitle }) => {
  const markerRef = useRef();
  const aboutRef = useRef();
  const postsRef = useRef();

  const onAboutClick = () => {
    markerRef.current.style.left = aboutRef.current.offsetLeft + 'px';
    markerRef.current.style.width = aboutRef.current.offsetWidth + 'px';
  };

  const onPostsClick = () => {
    markerRef.current.style.left = postsRef.current.offsetLeft + 'px';
    markerRef.current.style.width = postsRef.current.offsetWidth + 'px';
  };

  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
              node {
                frontmatter {
                  title
                  categories
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <header className="page-header-wrapper">
          <div className="page-header">
            <div className="front-section">
              <Link className="link" to="/">
                {siteTitle} <span className="primary">,</span>
              </Link>
            </div>
            <div className="trailing-section">
              <div id="marker" ref={markerRef}></div>
              <Link
                className="link"
                to="/about"
                onClick={() => {
                  onAboutClick();
                }}
                ref={aboutRef}
              >
                about
              </Link>
              <Link
                className="link"
                to="/posts"
                onClick={() => {
                  onPostsClick();
                }}
                ref={postsRef}
              >
                posts
              </Link>
              {/* <PostSearch
                posts={data.allMarkdownRemark.edges.map(({ node }) => new Post(node, true))}
              /> */}
            </div>
          </div>
        </header>
      )}
    />
  );
});

export default PageHeader;
