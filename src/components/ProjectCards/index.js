import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const ProjectList = [
  {
    title: 'Educator',
    // image: require('@site/static/img/arcane-atlas-logo.png').default,
    description: (
      <>
        <p>Maths teacher in Hove, UK. ECT 1. Sharing my thoughts and approach as I learn.</p>
        <div className={styles.buttons}>
          <Link to='docs/category/teaching' className='button button--secondary button--lg'>Current approach</Link>
        </div>
        <p />
        <div className={styles.buttons}>
          <Link to='blog' className='button button--secondary button--lg'>Blog</Link>
        </div>
      </>
    ),
  },
  {
    title: 'Designer',
    image: require('@site/static/img/arcane-atlas-logo.png').default,
    description: (
      <>
        1/2 of Arcane Atlas Games, designing tabletop roleplaying games.
      </>
    ),
  },
  {
    title: 'Tarsia Maker',
    image: require('@site/static/img/tarsia-maker.png').default,
    description: (
      <>
        Creator of the Tarsia Maker website.
      </>
    ),
  },
];

function Project({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--left">
        <img src={image} role="img" />
      </div>
    </div>
  );
}

export default function ProjectCards() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
