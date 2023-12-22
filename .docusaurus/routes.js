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
    path: '/designer',
    component: ComponentCreator('/designer', 'a77'),
    exact: true
  },
  {
    path: '/designer/archive',
    component: ComponentCreator('/designer/archive', '34a'),
    exact: true
  },
  {
    path: '/designer/fist-shriek',
    component: ComponentCreator('/designer/fist-shriek', 'd5b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '271'),
    exact: true
  },
  {
    path: '/teacher',
    component: ComponentCreator('/teacher', 'fbc'),
    exact: true
  },
  {
    path: '/teacher/archive',
    component: ComponentCreator('/teacher/archive', '42f'),
    exact: true
  },
  {
    path: '/teacher/before-it-all-kicks-off',
    component: ComponentCreator('/teacher/before-it-all-kicks-off', '636'),
    exact: true
  },
  {
    path: '/teacher/tags',
    component: ComponentCreator('/teacher/tags', '133'),
    exact: true
  },
  {
    path: '/teacher/tags/education',
    component: ComponentCreator('/teacher/tags/education', 'a46'),
    exact: true
  },
  {
    path: '/teacher/week-1-preparation-review',
    component: ComponentCreator('/teacher/week-1-preparation-review', '8f0'),
    exact: true
  },
  {
    path: '/teacher/week-2-over-planning',
    component: ComponentCreator('/teacher/week-2-over-planning', 'e30'),
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
