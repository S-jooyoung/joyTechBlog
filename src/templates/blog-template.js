import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import PostHeader from '../components/post-header';
import PostNavigator from '../components/post-navigator';
import Post from '../models/post';
import PostContent from '../components/post-content';
import Giscus from '../components/giscus';

function BlogTemplate({ data }) {
  const curPost = new Post(data.cur);
  const prevPost = data.prev && new Post(data.prev);
  const nextPost = data.next && new Post(data.next);
  const { comments, author } = data.site?.siteMetadata;
  const profileImage = author?.bio.thumbnailSmall;
  const giscusConfig = comments?.giscus;

  return (
    <Layout>
      <div className="blog-template-wrapper">
        <Seo
          title={curPost?.title}
          description={curPost?.excerpt}
          thumbnail={curPost?.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src}
        />
        <PostHeader post={curPost} profileImage={profileImage} />
        <PostContent html={curPost.html} />
        <PostNavigator prevPost={prevPost} nextPost={nextPost} />
        {giscusConfig && (
          <Giscus
            repo={giscusConfig.repo}
            repoId={giscusConfig.repoId}
            category={giscusConfig.category}
            categoryId={giscusConfig.categoryId}
            mapping={giscusConfig.mapping}
          />
        )}
      </div>
    </Layout>
  );
}

export default BlogTemplate;

export const pageQuery = graphql`
  query ($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 80, truncate: true)
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
        author
        emoji
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
        author
        emoji
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        categories
        author
        emoji
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      fields {
        slug
      }
    }

    site {
      siteMetadata {
        siteUrl
        comments {
          giscus {
            repo
            repoId
            category
            categoryId
            mapping
          }
        }
        author {
          bio {
            thumbnail
            thumbnailSmall
          }
        }
      }
    }
  }
`;
