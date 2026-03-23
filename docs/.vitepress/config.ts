import { defineConfig } from 'vitepress'
import { de } from './locales/de'
import { en } from './locales/en'
import { zh } from './locales/zh'

export default defineConfig({
  title: 'AI Act Compliance',
  description: 'EU AI Act (Verordnung (EU) 2024/1689) Compliance-Dokumentation der BAUER GROUP',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1a56db' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'BAUER GROUP AI Act Compliance' }],
  ],

  locales: {
    de: { label: 'Deutsch', lang: 'de-DE', link: '/de/', ...de },
    en: { label: 'English', lang: 'en-US', link: '/en/', ...en },
    zh: { label: '简体中文', lang: 'zh-CN', link: '/zh/', ...zh },
  },

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bauer-group/SEC-AIActCompliance' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          de: { translations: { button: { buttonText: 'Suchen', buttonAriaLabel: 'Suche' } } },
          zh: { translations: { button: { buttonText: '搜索', buttonAriaLabel: '搜索' } } },
        },
      },
    },
    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-AIActCompliance/edit/main/docs/:path',
    },
  },
})
