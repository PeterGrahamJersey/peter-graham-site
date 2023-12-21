import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Thoughts and blog on education and design.">
      <main>
        <div className="container">
          <div>Teacher</div>
          <div>+</div>
          <div>Designer</div>
          <div></div>
          <div>Peter Graham</div>
        </div>
      </main>
    </Layout>
  );
}
