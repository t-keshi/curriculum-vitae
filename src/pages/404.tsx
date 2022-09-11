import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/ui/SEO';

const NotFound: React.FC = () => (
  <div>
    <SEO title="Page Not Found" />
    <Layout pageTitle="Page Not Found">page not fount</Layout>
  </div>
);

export default NotFound;
