import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/designer',
    component: ComponentCreator('/designer', '696'),
    exact: true
  },
  {
    path: '/designer/archive',
    component: ComponentCreator('/designer/archive', '980'),
    exact: true
  },
  {
    path: '/designer/arrr',
    component: ComponentCreator('/designer/arrr', '78f'),
    exact: true
  },
  {
    path: '/designer/fist-dollhouse',
    component: ComponentCreator('/designer/fist-dollhouse', '810'),
    exact: true
  },
  {
    path: '/designer/fist-shriek',
    component: ComponentCreator('/designer/fist-shriek', 'eb8'),
    exact: true
  },
  {
    path: '/designer/fist-the-only-agent-left',
    component: ComponentCreator('/designer/fist-the-only-agent-left', '7c2'),
    exact: true
  },
  {
    path: '/designer/haunting',
    component: ComponentCreator('/designer/haunting', 'f42'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/teacher',
    component: ComponentCreator('/teacher', '1c8'),
    exact: true
  },
  {
    path: '/teacher/archive',
    component: ComponentCreator('/teacher/archive', '524'),
    exact: true
  },
  {
    path: '/teacher/before-it-all-kicks-off',
    component: ComponentCreator('/teacher/before-it-all-kicks-off', '7e7'),
    exact: true
  },
  {
    path: '/teacher/class-culture-motivation',
    component: ComponentCreator('/teacher/class-culture-motivation', '61d'),
    exact: true
  },
  {
    path: '/teacher/tags',
    component: ComponentCreator('/teacher/tags', '6fd'),
    exact: true
  },
  {
    path: '/teacher/tags/class-culture',
    component: ComponentCreator('/teacher/tags/class-culture', '6e7'),
    exact: true
  },
  {
    path: '/teacher/week-1-preparation-review',
    component: ComponentCreator('/teacher/week-1-preparation-review', '120'),
    exact: true
  },
  {
    path: '/teacher/week-2-over-planning',
    component: ComponentCreator('/teacher/week-2-over-planning', '7dd'),
    exact: true
  },
  {
    path: '/teacher/week-3-motivating-students',
    component: ComponentCreator('/teacher/week-3-motivating-students', 'e4b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3f7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '00f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3d1'),
            routes: [
              {
                path: '/docs/test-doc',
                component: ComponentCreator('/docs/test-doc', 'f72'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
