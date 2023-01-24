import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

function Seo({ description, title }) {
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
          content: site.siteMetadata.ogImage,
        },

        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    >
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4083591465738564"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  );
}

export default Seo;
