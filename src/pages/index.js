import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeTitle from '../components/homeTitle'

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Thoughts and blog on education and design.">
      <main>
        <div className={styles.homeTitleContainer}>
          <HomeTitle/>
        </div>
      </main>
    </Layout>
  );
}
