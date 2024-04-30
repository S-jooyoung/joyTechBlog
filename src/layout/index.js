import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import ThemeSwitch from '../components/theme-switch';
import './style.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          type
          logo
          author {
            name
            social {
              github
            }
          }
        }
      }
    }
  `);
  const { title, type, logo, author } = data.site.siteMetadata;

  return (
    <>
      <div className="page-wrapper">
        <div className="page-wrapper-point">
          <div className="page-wrapper-point-inner" />
        </div>
        <PageHeader siteTitle={title || `Title`} type={type || `Type`} logo={logo || `Logo`} />
        <main className="page-content">{children}</main>
        <PageFooter
          author={author.name || `Author`}
          githubUrl={author.social?.github || `https://www.github.com`}
        />
        <ThemeSwitch />
      </div>
    </>
  );
};

export default Layout;
