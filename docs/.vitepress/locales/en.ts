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
      { text: 'Overview', link: '/en/overview/' },
      { text: 'Risk Levels', link: '/en/risk-classification/' },
      { text: 'High-Risk AI', link: '/en/high-risk-ai/' },
      { text: 'GPAI', link: '/en/gpai/' },
      { text: 'Compliance Matrix', link: '/en/compliance-matrix/' },
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
            { text: 'Introduction', link: '/en/overview/' },
            { text: 'Timeline & Deadlines', link: '/en/overview/timeline' },
            { text: 'Scope', link: '/en/overview/scope' },
            { text: 'Economic Operators & Roles', link: '/en/overview/economic-operators' },
            { text: 'BAUER GROUP Positioning', link: '/en/overview/bauer-group' },
            { text: 'Go/No-Go Decision Framework', link: '/en/overview/go-no-go' },
          ],
        },
        {
          text: '2. Risk Classification',
          collapsed: false,
          items: [
            { text: 'Risk Levels Overview', link: '/en/risk-classification/' },
            { text: 'Classification Decision', link: '/en/risk-classification/decision' },
            { text: 'Annex I – Harmonisation Legislation', link: '/en/risk-classification/annex-i' },
            { text: 'Annex III – High-Risk Categories', link: '/en/risk-classification/annex-iii' },
            { text: 'Non-High-Risk Documentation', link: '/en/risk-classification/non-high-risk' },
          ],
        },
        {
          text: '3. Prohibited Practices',
          collapsed: true,
          items: [
            { text: 'Overview Art. 5', link: '/en/prohibited-practices/' },
            { text: 'Prohibition Catalogue', link: '/en/prohibited-practices/catalogue' },
            { text: 'Screening for BAUER GROUP Products', link: '/en/prohibited-practices/screening' },
          ],
        },
        {
          text: '4. High-Risk AI Systems',
          collapsed: true,
          items: [
            { text: 'Requirements Art. 8–15', link: '/en/high-risk-ai/' },
            { text: 'Risk Management (Art. 9)', link: '/en/high-risk-ai/risk-management' },
            { text: 'Data & Data Governance (Art. 10)', link: '/en/high-risk-ai/data-governance' },
            { text: 'Technical Documentation (Art. 11)', link: '/en/high-risk-ai/technical-documentation' },
            { text: 'Record-Keeping (Art. 12)', link: '/en/high-risk-ai/logging' },
            { text: 'Transparency (Art. 13)', link: '/en/high-risk-ai/transparenz' },
            { text: 'Human Oversight (Art. 14)', link: '/en/high-risk-ai/human-oversight' },
            { text: 'Accuracy & Robustness (Art. 15)', link: '/en/high-risk-ai/accuracy-robustness' },
            { text: 'Provider Obligations (Art. 16–21)', link: '/en/high-risk-ai/provider-obligations' },
            { text: 'Quality Management System (Art. 17)', link: '/en/high-risk-ai/qms' },
          ],
        },
        {
          text: '5. General-Purpose AI (GPAI)',
          collapsed: true,
          items: [
            { text: 'GPAI Models (Art. 51–56)', link: '/en/gpai/' },
            { text: 'GPAI Provider Obligations (Art. 53)', link: '/en/gpai/obligations' },
            { text: 'Systemic Risk (Art. 51/55)', link: '/en/gpai/systemic-risk' },
            { text: 'BAUER GROUP as GPAI Deployer', link: '/en/gpai/deployer-perspective' },
          ],
        },
        {
          text: '6. Transparency Obligations',
          collapsed: true,
          items: [
            { text: 'Overview (Art. 50)', link: '/en/transparency/' },
            { text: 'AI Interaction Disclosure', link: '/en/transparency/ai-interaction' },
            { text: 'Deepfakes & Synthetic Content', link: '/en/transparency/deepfakes' },
            { text: 'Labelling Requirements', link: '/en/transparency/labelling' },
          ],
        },
        {
          text: '7. Governance & AI Literacy',
          collapsed: true,
          items: [
            { text: 'AI Literacy (Art. 4)', link: '/en/governance/' },
            { text: 'AI Governance Framework', link: '/en/governance/framework' },
            { text: 'Roles & Responsibilities', link: '/en/governance/roles' },
            { text: 'AI Inventory & Registration', link: '/en/governance/inventory' },
          ],
        },
        {
          text: '8. Conformity Assessment',
          collapsed: true,
          items: [
            { text: 'Overview (Art. 43)', link: '/en/conformity/' },
            { text: 'Self-Assessment (Annex VI)', link: '/en/conformity/self-assessment' },
            { text: 'QMS + Tech. Documentation (Annex VII)', link: '/en/conformity/annex-vii' },
            { text: 'CE Marking (Art. 48)', link: '/en/conformity/ce-marking' },
            { text: 'EU Declaration of Conformity (Art. 47)', link: '/en/conformity/declaration-of-conformity' },
            { text: 'Machine-Readable Format (JSON)', link: '/en/conformity/machine-readable' },
            { text: 'EU Database Registration (Art. 49)', link: '/en/conformity/registration' },
          ],
        },
        {
          text: '9. Enforcement & Sanctions',
          collapsed: true,
          items: [
            { text: 'Sanctions Regime (Art. 99)', link: '/en/enforcement/' },
            { text: 'Market Surveillance', link: '/en/enforcement/market-surveillance' },
            { text: 'AI Office & AI Board', link: '/en/enforcement/ai-office' },
          ],
        },
        {
          text: '10. Compliance Matrix',
          collapsed: false,
          items: [
            { text: 'Requirements Mapping', link: '/en/compliance-matrix/' },
            { text: 'Effort Assessment & Go/No-Go', link: '/en/compliance-matrix/effort-assessment' },
          ],
        },
        {
          text: 'A. Templates',
          collapsed: true,
          items: [
            { text: 'AI System Inventory', link: '/en/templates/ai-inventory' },
            { text: 'Risk Classification Form', link: '/en/templates/risk-classification' },
            { text: 'Non-High-Risk Assessment', link: '/en/templates/non-high-risk' },
            { text: 'EU Declaration of Conformity', link: '/en/templates/declaration-of-conformity' },
            { text: 'Transparency Notice', link: '/en/templates/transparency-notice' },
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
