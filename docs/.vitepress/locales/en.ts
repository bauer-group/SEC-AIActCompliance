import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const en: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: 'English',
  lang: 'en',
  link: '/en/',
  description: 'EU AI Act – Compliance Documentation | BAUER GROUP',

  themeConfig: {
    // -----------------------------------------------------------------
    // Announcement Banner
    // -----------------------------------------------------------------

    announcement: {
      text: 'This document is under active development and has not been finalised.',
      type: 'warning',
      dismissible: true,
    },

    // -----------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------

    nav: [
      { text: 'Overview', link: '/en/01-ueberblick/' },
      { text: 'Risk Levels', link: '/en/02-risikoklassifizierung/' },
      { text: 'High-Risk AI', link: '/en/04-hochrisiko-ki/' },
      { text: 'GPAI', link: '/en/05-gpai/' },
      { text: 'Compliance Matrix', link: '/en/10-compliance-matrix/' },
    ],

    // -----------------------------------------------------------------
    // Sidebar
    // -----------------------------------------------------------------

    sidebar: {
      '/en/': [
        {
          text: '1. Overview',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/en/01-ueberblick/' },
            { text: 'Timeline & Deadlines', link: '/en/01-ueberblick/zeitplan' },
            { text: 'Scope', link: '/en/01-ueberblick/geltungsbereich' },
            { text: 'Economic Operators & Roles', link: '/en/01-ueberblick/wirtschaftsakteure' },
            { text: 'BAUER GROUP Positioning', link: '/en/01-ueberblick/bauer-group' },
            { text: 'Go/No-Go Decision Framework', link: '/en/01-ueberblick/go-no-go' },
          ],
        },
        {
          text: '2. Risk Classification',
          collapsed: false,
          items: [
            { text: 'Risk Levels Overview', link: '/en/02-risikoklassifizierung/' },
            { text: 'Classification Decision', link: '/en/02-risikoklassifizierung/entscheidung' },
            { text: 'Annex I – Harmonisation Legislation', link: '/en/02-risikoklassifizierung/annex-i' },
            { text: 'Annex III – High-Risk Categories', link: '/en/02-risikoklassifizierung/annex-iii' },
            { text: 'Non-High-Risk Documentation', link: '/en/02-risikoklassifizierung/nicht-hochrisiko' },
          ],
        },
        {
          text: '3. Prohibited Practices',
          collapsed: true,
          items: [
            { text: 'Overview Art. 5', link: '/en/03-verbotene-praktiken/' },
            { text: 'Prohibition Catalogue', link: '/en/03-verbotene-praktiken/katalog' },
            { text: 'Screening for BAUER Products', link: '/en/03-verbotene-praktiken/pruefschema' },
          ],
        },
        {
          text: '4. High-Risk AI Systems',
          collapsed: true,
          items: [
            { text: 'Requirements Art. 8–15', link: '/en/04-hochrisiko-ki/' },
            { text: 'Risk Management (Art. 9)', link: '/en/04-hochrisiko-ki/risikomanagement' },
            { text: 'Data & Data Governance (Art. 10)', link: '/en/04-hochrisiko-ki/data-governance' },
            { text: 'Technical Documentation (Art. 11)', link: '/en/04-hochrisiko-ki/technische-doku' },
            { text: 'Record-Keeping (Art. 12)', link: '/en/04-hochrisiko-ki/protokollierung' },
            { text: 'Transparency (Art. 13)', link: '/en/04-hochrisiko-ki/transparenz' },
            { text: 'Human Oversight (Art. 14)', link: '/en/04-hochrisiko-ki/menschliche-aufsicht' },
            { text: 'Accuracy & Robustness (Art. 15)', link: '/en/04-hochrisiko-ki/genauigkeit-robustheit' },
            { text: 'Provider Obligations (Art. 16–21)', link: '/en/04-hochrisiko-ki/provider-pflichten' },
            { text: 'Quality Management System (Art. 17)', link: '/en/04-hochrisiko-ki/qms' },
          ],
        },
        {
          text: '5. General-Purpose AI (GPAI)',
          collapsed: true,
          items: [
            { text: 'GPAI Models (Art. 51–56)', link: '/en/05-gpai/' },
            { text: 'GPAI Provider Obligations (Art. 53)', link: '/en/05-gpai/pflichten' },
            { text: 'Systemic Risk (Art. 51/55)', link: '/en/05-gpai/systemisches-risiko' },
            { text: 'BAUER GROUP as GPAI Deployer', link: '/en/05-gpai/deployer-perspektive' },
          ],
        },
        {
          text: '6. Transparency Obligations',
          collapsed: true,
          items: [
            { text: 'Overview (Art. 50)', link: '/en/06-transparenz/' },
            { text: 'AI Interaction Disclosure', link: '/en/06-transparenz/ki-interaktion' },
            { text: 'Deepfakes & Synthetic Content', link: '/en/06-transparenz/deepfakes' },
            { text: 'Labelling Requirements', link: '/en/06-transparenz/kennzeichnung' },
          ],
        },
        {
          text: '7. Governance & AI Literacy',
          collapsed: true,
          items: [
            { text: 'AI Literacy (Art. 4)', link: '/en/07-governance/' },
            { text: 'AI Governance Framework', link: '/en/07-governance/framework' },
            { text: 'Roles & Responsibilities', link: '/en/07-governance/rollen' },
            { text: 'AI Inventory & Registration', link: '/en/07-governance/inventar' },
          ],
        },
        {
          text: '8. Conformity Assessment',
          collapsed: true,
          items: [
            { text: 'Overview (Art. 43)', link: '/en/08-konformitaet/' },
            { text: 'Self-Assessment (Annex VI)', link: '/en/08-konformitaet/selbstbewertung' },
            { text: 'QMS + Tech. Documentation (Annex VII)', link: '/en/08-konformitaet/annex-vii' },
            { text: 'CE Marking (Art. 48)', link: '/en/08-konformitaet/ce-kennzeichnung' },
            { text: 'EU Declaration of Conformity (Art. 47)', link: '/en/08-konformitaet/konformitaetserklaerung' },
            { text: 'Machine-Readable Format (JSON)', link: '/en/08-konformitaet/maschinenlesbar' },
            { text: 'EU Database Registration (Art. 49)', link: '/en/08-konformitaet/registrierung' },
          ],
        },
        {
          text: '9. Enforcement & Sanctions',
          collapsed: true,
          items: [
            { text: 'Sanctions Regime (Art. 99)', link: '/en/09-durchsetzung/' },
            { text: 'Market Surveillance', link: '/en/09-durchsetzung/marktueberwachung' },
            { text: 'AI Office & AI Board', link: '/en/09-durchsetzung/ai-office' },
          ],
        },
        {
          text: '10. Compliance Matrix',
          collapsed: false,
          items: [
            { text: 'Requirements Mapping', link: '/en/10-compliance-matrix/' },
            { text: 'Effort Assessment & Go/No-Go', link: '/en/10-compliance-matrix/aufwand' },
          ],
        },
        {
          text: 'A. Templates',
          collapsed: true,
          items: [
            { text: 'AI System Inventory', link: '/en/templates/ki-inventar' },
            { text: 'Risk Classification Form', link: '/en/templates/risikoklassifizierung' },
            { text: 'Non-High-Risk Assessment', link: '/en/templates/nicht-hochrisiko' },
            { text: 'EU Declaration of Conformity', link: '/en/templates/konformitaetserklaerung' },
            { text: 'Transparency Notice', link: '/en/templates/transparenz-hinweis' },
            { text: 'AI Literacy Training Record', link: '/en/templates/ai-literacy' },
            { text: 'Go/No-Go Decision Protocol', link: '/en/templates/go-no-go' },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------
    // UI Translations
    // -----------------------------------------------------------------

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-AIActCompliance/edit/main/docs/:path',
      text: 'Edit this page'
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: 'On this page', level: [2, 3] },
    docFooter: { prev: 'Previous', next: 'Next' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    langMenuLabel: 'Language',

    footer: {
      message: 'Documentation licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> · Code licensed under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP. Commercial use of the documentation is not permitted.`
    },
  }
}
