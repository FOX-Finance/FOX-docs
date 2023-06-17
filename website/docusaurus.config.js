// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');
const mdxMermaid = require('mdx-mermaid');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FOX Finance',
  tagline: 'Fractional Over-Collateralized Stablecoin',
  url: 'https://fox-finance.github.io/',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'D3LAB', // Usually your GitHub org/user name.
  projectName: 'FOX Finance', // Usually your repo name.

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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math, mdxMermaid],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'FOX Finance',
        logo: {
          alt: 'FOX Finance Logo',
          src: 'img/FOX.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Fox-Finance',
            position: 'left',
            label: 'Document',
          },
          {
            href: '/category/for-developers',
            position: 'left',
            label: 'For Developers',
          },
          {
            href: 'https://github.com/FOX-Finance',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Document',
                to: '/',
              },
              {
                label: 'For Developers',
                to: '/category/for-developers',
              },
            ],
          },
          {
            title: 'External Links',
            items: [
              {
                label: 'Website',
                href: 'https://fox-finance.github.io/webapp/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/FOX-Finance',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'stablefox.finance@gmail.com',
                href: 'mailto:stablefox.finance@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FOX Finance.`,
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
