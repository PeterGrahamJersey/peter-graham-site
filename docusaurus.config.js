// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PETER GRAHAM',
  tagline: 'Teacher + Designer, Peter Graham',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mr-graham.co.uk',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PeterGrahamJersey', // Usually your GitHub org/user name.
  projectName: 'peter-graham-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          routeBasePath: '/teacher',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'PETER GRAHAM',
        items: [
          {
            to: '/teacher', 
            label: 'teacher', 
            position: 'left'
          },
          {
            to: '/designer', 
            label: 'designer', 
            position: 'left'
          },
          {
            href: 'mailto:petergrahamjerseysite@gmail.com',
            label: 'contact',
            position: 'left',
          },
          {
            href: 'https://arcaneatlas.games',
            label: 'Arcane Atlas Games',
            position: 'right',
          },
          {
            href: 'https://tarsiamaker.co.uk',
            label: 'Tarsia Maker',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Peter Graham. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          /**
           * Required for any multi-instance plugin
           */
          id: 'second-blog',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'designer',
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: './blogDesigner',
          showReadingTime: false
        },
      ],
    ],
};

module.exports = config;
