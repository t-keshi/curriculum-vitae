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
        body
        slug
      }
    }
  }
`;

const About: React.FC<PageProps<GatsbyTypes.ResumeQuery>> = ({ data }) => {
  if (!data || !data.allMdx?.nodes[0].body || !data.allMdx?.nodes[0].slug) {
    return null;
  }

  return (
    <div>
      <SEO title="職務経歴書" />
      <Layout pageTitle="職務経歴書">
        <Box mb={12} />
        {data.allMdx.nodes
          .slice(0)
          .sort((node) => parseInt(node.slug?.slice(0, 2) ?? '1', 10))
          .slice(1)
          .map((node) => (
            <MDXRenderer key={node.slug}>{node.body}</MDXRenderer>
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
