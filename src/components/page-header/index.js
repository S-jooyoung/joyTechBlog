import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Post from '../../models/post';
import PostSearch from '../post-search';
import './style.scss';
import { useEffect, useState } from 'react';

const PageHeader = ({ siteTitle, type, logo }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0 && isTop) {
        setIsTop(false);
      } else if (scrollPosition === 0 && !isTop) {
        setIsTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTop]);

  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
        <header className={`page-header-wrapper ${isTop ? 'page-header-transparent' : ''}`}>
          <div className="page-header">
            <div className="front-section">
              <Link className="link link-logo" to="/">
                <img className="logo" src={logo} alt="logo" />
                <span className="primary">{siteTitle}</span> {type}
              </Link>
            </div>
            <div className="trailing-section">
              <div className="search">
                <PostSearch
                  posts={data.allMarkdownRemark.edges.map(({ node }) => new Post(node, true))}
                />
              </div>
              <div>
                <Link className="link" id="menu" to="/posts">
                  포스트
                </Link>
                <Link className="introduce" to="/about">
                  소개
                </Link>
              </div>
            </div>
          </div>
        </header>
      )}
    />
  );
};

export default PageHeader;
