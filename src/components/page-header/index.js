import { Link, StaticQuery, graphql } from 'gatsby';
import React, { useRef, memo, useState, useEffect } from 'react';
// import Post from '../../models/post';
// import PostSearch from '../post-search';
import './style.scss';

const PageHeader = ({ siteTitle }) => {
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
              <Link className="link" id="menu" to="/about">
                about
              </Link>
              <Link className="link" id="menu" to="/posts">
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
};

export default PageHeader;
