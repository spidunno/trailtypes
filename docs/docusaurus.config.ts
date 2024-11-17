import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	plugins: [
		[
			'docusaurus-plugin-typedoc',
 
			// Options
			{
				entryPoints: ['../types/index.d.ts'],
				tsconfig: '../tsconfig.json',
				skipErrorChecking: true
			},
		],
	],
	title: 'TrailTypes',
	tagline: 'Tooling for creating Trailmakers mods using Typescript',
	favicon: 'img/favicon.png',

	// Set the production url of your site here
	url: 'https://your-docusaurus-site.example.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/trailtypes/trailtypes/tree/main/docs',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'TrailTypes',
			logo: {
				alt: 'TrailTypes Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'typedocSidebar',
					position: 'left',
					label: 'API',
				},
				{
					href: 'https://github.com/trailtypes/trailtypes',
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
							label: 'API',
							to: '/docs/api',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/trailtypes/',
						},
					],
				},
			],
			copyright: `Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
