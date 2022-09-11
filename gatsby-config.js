require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'curriculum vitae',
    siteUrl: 'https://curriculum-vitae',
    description: 'curriculum vitae',
    image: '/eyecatch.png',
    twitterUsername: 't__keshi',
  },
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.jpeg',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: ['gatsby-remark-line-breaks'],
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-typegen',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: 'https://curriculum-vitae',
      },
    },
    'gatsby-plugin-robots-txt',
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: process.env.GOOGLE_TAG_MANAGER_ID,
    //     includeInDevelopment: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
    //     pluginConfig: {
    //       head: true,
    //     },
    //   },
    // },
    'gatsby-plugin-catch-links',
    '@chakra-ui/gatsby-plugin',
  ],
};
