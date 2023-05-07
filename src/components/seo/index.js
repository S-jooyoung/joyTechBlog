import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

function Seo({ description, title, thumbnail }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            ogImage
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaThumbnail = thumbnail || site.siteMetadata.ogImage;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: 'og:author',
          content: site.siteMetadata.author.name,
        },
        {
          property: 'og:image',
          content: metaThumbnail,
        },

        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    ></Helmet>
  );
}

export default Seo;
