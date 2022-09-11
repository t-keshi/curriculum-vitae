import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const SEO: React.FC<Props> = ({ title, description, imageUrl }) => {
  const data = useStaticQuery<GatsbyTypes.SiteMetaDataQuery>(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          siteUrl
          description
          image
          twitterUsername
        }
      }
    }
  `);

  if (
    !data.site?.siteMetadata?.title ||
    !data.site.siteMetadata.siteUrl ||
    !data.site.siteMetadata.description ||
    !data.site.siteMetadata.image ||
    !data.site.siteMetadata.twitterUsername
  ) {
    return null;
  }

  const helmetData = {
    siteTitle: title ? `${data.site.siteMetadata.title} | ${title}` : data.site.siteMetadata.title,
    title: title || data.site.siteMetadata.title,
    description: description || data.site.siteMetadata.description,
    imageUrl: imageUrl || `${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.image}`,
    twitterUsername: `@${data.site.siteMetadata.twitterUsername}`,
    siteUrl: data.site.siteMetadata.siteUrl,
  };

  return (
    <Helmet>
      <html lang="ja" />
      <title>{helmetData.siteTitle}</title>
      <meta name="description" content={helmetData.description} />
      <meta property="image" content={helmetData.imageUrl} />
      <meta name="thumbnail" content={helmetData.imageUrl} />
      {/* ---------- twitter ----------  */}
      <meta name="twitter:creator" content={helmetData.twitterUsername} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={helmetData.title} />
      <meta name="twitter:description" content={helmetData.description} />
      <meta property="twitter:image" content={helmetData.imageUrl} />
      {/* ---------- OGP ----------  */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={helmetData.siteUrl} />
      <meta property="og:title" content={helmetData.title} />
      <meta property="og:description" content={helmetData.description} />
      <meta property="og:site_name" content={helmetData.siteTitle} />
      <meta property="og:image" content={helmetData.imageUrl} />
    </Helmet>
  );
};
