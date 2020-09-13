import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        This framework is built to be simple, easy to understand and easy to use.
      </>
    ),
  },
  {
    title: 'Component-Based',
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Build small components that manage their own state as a building blocks to build larger applications.
      </>
    ),
  },
  {
    title: 'Small',
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        11KB core library. 14KB vermillion starter application.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Sponsors() {
  return (
    <section className={styles.features} style={{borderTop: 'solid 1px #eceeef'}}>
      <div className="container">
        <h3 style={{textAlign: 'center', color: '#1c1e21cc'}}>Patreon Sponsors</h3>
        <h3 style={{textAlign: 'center', color: '#ccc'}}>. . .</h3>
        <div style={{textAlign: 'center'}}>
          <button class="button button--outline button--secondary sponsor-link-btn">Become a sponsor</button>
        </div>
      </div>
    </section>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <Sponsors />
      </main>
    </Layout>
  );
}

export default Home;
