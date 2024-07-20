import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import TimeStampSection from '../components/timestamp-section';
import ProjectSection from '../components/project-section';
import IntroduceSection from '../components/introduce-section';

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps, projects, introduce } = about;
  return (
    <Layout>
      <Seo title="소개 | 조이 기술 블로그, 조이 테크" />
      <Bio author={author} language={language} />
      <IntroduceSection title="Introduce." descriptions={introduce} />
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
          introduce

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
