import { Box } from '@chakra-ui/react';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/ui/SEO';

export const pageQuery = graphql`
  query Resume {
    allMdx {
      nodes {
        id
        body
        frontmatter {
          title
        }
      }
    }
  }
`;

const About: React.FC<PageProps<GatsbyTypes.ResumeQuery>> = ({ data }) => {
  if (!data || !data.allMdx?.nodes[0].body || !data.allMdx?.nodes[0].id) {
    return null;
  }

  return (
    <div>
      <SEO title="職務経歴書" />
      <Layout pageTitle="職務経歴書">
        <Box mb={12} />
        {data.allMdx.nodes.map((node) => (
          <MDXRenderer key={node.id}>{node.body}</MDXRenderer>
        ))}
        <Box mb={24} />
        {/* <LinkButton
          as="button"
          onClick={() => {
            void navigate(-1);
          }}
        >
          ← 戻る
        </LinkButton> */}
      </Layout>
    </div>
  );
};

export default About;
