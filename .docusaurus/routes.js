import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'da2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '559'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '9e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '338'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'a45'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e3a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '12f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '007'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e7b'),
    exact: true
  },
  {
    path: '/blog/before-it-all-kicks-off',
    component: ComponentCreator('/blog/before-it-all-kicks-off', 'c72'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '889'),
    exact: true
  },
  {
    path: '/blog/tags/education',
    component: ComponentCreator('/blog/tags/education', '8ed'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '271'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '644'),
    routes: [
      {
        path: '/docs/category/teaching',
        component: ComponentCreator('/docs/category/teaching', '5dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/teaching/classroom-management',
        component: ComponentCreator('/docs/teaching/classroom-management', '834'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/teaching/go-to-sites',
        component: ComponentCreator('/docs/teaching/go-to-sites', '244'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/teaching/planner',
        component: ComponentCreator('/docs/teaching/planner', '8a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/teaching/planning',
        component: ComponentCreator('/docs/teaching/planning', '708'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/teaching/standard-lesson',
        component: ComponentCreator('/docs/teaching/standard-lesson', 'dfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e31'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
