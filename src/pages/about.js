import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import TimeStampSection from '../components/timestamp-section';
import ProjectSection from '../components/project-section';

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps, projects } = about;
  return (
    <Layout>
      <Seo title="소개 | 조이 기술 블로그, 조이 테크" />
      <Bio author={author} language={language} />
      <TimeStampSection title="Work Experience." timestamps={timestamps} />
      <ProjectSection title="Personal Projects." projects={projects} />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }

        about {
          timestamps {
            activity
            activityDescription
            job
            jobDescriptions
            date
            link
          }

          projects {
            title
            subTitle
            affiliation
            descriptions
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;
