import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
// import Post from '../../models/post';
// import PostSearch from '../post-search';
import './style.scss';

const PageHeader = ({ siteTitle, type, logo }) => {
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
              <Link className="link link-logo" to="/">
                <img className="logo" src={logo} alt="logo" />
                <span className="primary">{siteTitle}</span> {type}
              </Link>
            </div>
            <div className="trailing-section">
              <Link className="link" id="menu" to="/posts">
                포스트
              </Link>
              <Link className="introduce" to="/about">
                소개
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
};

export default PageHeader;
