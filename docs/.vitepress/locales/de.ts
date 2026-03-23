import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const de: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: 'Deutsch',
  lang: 'de-DE',
  link: '/de/',
  description: 'EU AI Act – Compliance-Dokumentation | BAUER GROUP',

  themeConfig: {
    // -----------------------------------------------------------------
    // Announcement Banner
    // -----------------------------------------------------------------

    announcement: {
      text: 'Dieses Dokument befindet sich in aktiver Entwicklung und ist noch nicht finalisiert.',
      type: 'warning',
      dismissible: true,
    },

    // -----------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------

    nav: [
      { text: 'Überblick', link: '/de/overview/' },
      { text: 'Risikostufen', link: '/de/risk-classification/' },
      { text: 'Hochrisiko-KI', link: '/de/high-risk-ai/' },
      { text: 'GPAI', link: '/de/gpai/' },
      { text: 'Compliance-Matrix', link: '/de/compliance-matrix/' },
    ],

    // -----------------------------------------------------------------
    // Sidebar
    // -----------------------------------------------------------------

    sidebar: {
      '/de/': [
        {
          text: '1. Überblick',
          collapsed: false,
          items: [
            { text: 'Einführung', link: '/de/overview/' },
            { text: 'Zeitplan & Fristen', link: '/de/overview/timeline' },
            { text: 'Geltungsbereich', link: '/de/overview/scope' },
            { text: 'Wirtschaftsakteure & Rollen', link: '/de/overview/economic-operators' },
            { text: 'BAUER GROUP Positionierung', link: '/de/overview/bauer-group' },
            { text: 'Go/No-Go Entscheidungsrahmen', link: '/de/overview/go-no-go' },
          ],
        },
        {
          text: '2. Risikoklassifizierung',
          collapsed: false,
          items: [
            { text: 'Risikostufen-Übersicht', link: '/de/risk-classification/' },
            { text: 'Klassifizierungsentscheidung', link: '/de/risk-classification/decision' },
            { text: 'Annex I – Harmonisierungsrecht', link: '/de/risk-classification/annex-i' },
            { text: 'Annex III – Hochrisiko-Kategorien', link: '/de/risk-classification/annex-iii' },
            { text: 'Nicht-Hochrisiko-Dokumentation', link: '/de/risk-classification/non-high-risk' },
          ],
        },
        {
          text: '3. Verbotene Praktiken',
          collapsed: true,
          items: [
            { text: 'Übersicht Art. 5', link: '/de/prohibited-practices/' },
            { text: 'Verbotskatalog', link: '/de/prohibited-practices/catalogue' },
            { text: 'Prüfschema für BAUER GROUP Produkte', link: '/de/prohibited-practices/screening' },
          ],
        },
        {
          text: '4. Hochrisiko-KI-Systeme',
          collapsed: true,
          items: [
            { text: 'Anforderungen Art. 8–15', link: '/de/high-risk-ai/' },
            { text: 'Risikomanagement (Art. 9)', link: '/de/high-risk-ai/risk-management' },
            { text: 'Daten & Data Governance (Art. 10)', link: '/de/high-risk-ai/data-governance' },
            { text: 'Technische Dokumentation (Art. 11)', link: '/de/high-risk-ai/technical-documentation' },
            { text: 'Protokollierung (Art. 12)', link: '/de/high-risk-ai/logging' },
            { text: 'Transparenz (Art. 13)', link: '/de/high-risk-ai/transparenz' },
            { text: 'Menschliche Aufsicht (Art. 14)', link: '/de/high-risk-ai/human-oversight' },
            { text: 'Genauigkeit & Robustheit (Art. 15)', link: '/de/high-risk-ai/accuracy-robustness' },
            { text: 'Provider-Pflichten (Art. 16–21)', link: '/de/high-risk-ai/provider-obligations' },
            { text: 'Qualitätsmanagementsystem (Art. 17)', link: '/de/high-risk-ai/qms' },
          ],
        },
        {
          text: '5. General-Purpose AI (GPAI)',
          collapsed: true,
          items: [
            { text: 'GPAI-Modelle (Art. 51–56)', link: '/de/gpai/' },
            { text: 'Pflichten GPAI-Anbieter (Art. 53)', link: '/de/gpai/obligations' },
            { text: 'Systemisches Risiko (Art. 51/55)', link: '/de/gpai/systemic-risk' },
            { text: 'BAUER GROUP als GPAI-Deployer', link: '/de/gpai/deployer-perspective' },
          ],
        },
        {
          text: '6. Transparenzpflichten',
          collapsed: true,
          items: [
            { text: 'Übersicht (Art. 50)', link: '/de/transparency/' },
            { text: 'KI-Interaktion offenlegen', link: '/de/transparency/ai-interaction' },
            { text: 'Deepfakes & synthetische Inhalte', link: '/de/transparency/deepfakes' },
            { text: 'Kennzeichnungspflichten', link: '/de/transparency/labelling' },
          ],
        },
        {
          text: '7. Governance & AI Literacy',
          collapsed: true,
          items: [
            { text: 'AI Literacy (Art. 4)', link: '/de/governance/' },
            { text: 'AI Governance Framework', link: '/de/governance/framework' },
            { text: 'Rollen & Verantwortlichkeiten', link: '/de/governance/roles' },
            { text: 'KI-Inventar & Registrierung', link: '/de/governance/inventory' },
          ],
        },
        {
          text: '8. Konformitätsbewertung',
          collapsed: true,
          items: [
            { text: 'Übersicht (Art. 43)', link: '/de/conformity/' },
            { text: 'Selbstbewertung (Annex VI)', link: '/de/conformity/self-assessment' },
            { text: 'QMS + Techn. Doku (Annex VII)', link: '/de/conformity/annex-vii' },
            { text: 'CE-Kennzeichnung (Art. 48)', link: '/de/conformity/ce-marking' },
            { text: 'EU-Konformitätserklärung (Art. 47)', link: '/de/conformity/declaration-of-conformity' },
            { text: 'Maschinenlesbares Format (JSON)', link: '/de/conformity/machine-readable' },
            { text: 'EU-Datenbank-Registrierung (Art. 49)', link: '/de/conformity/registration' },
          ],
        },
        {
          text: '9. Durchsetzung & Sanktionen',
          collapsed: true,
          items: [
            { text: 'Sanktionsregime (Art. 99)', link: '/de/enforcement/' },
            { text: 'Marktüberwachung', link: '/de/enforcement/market-surveillance' },
            { text: 'AI Office & AI Board', link: '/de/enforcement/ai-office' },
          ],
        },
        {
          text: '10. Compliance-Matrix',
          collapsed: false,
          items: [
            { text: 'Anforderungs-Zuordnung', link: '/de/compliance-matrix/' },
            { text: 'Aufwandsbewertung & Go/No-Go', link: '/de/compliance-matrix/effort-assessment' },
          ],
        },
        {
          text: 'A. Templates',
          collapsed: true,
          items: [
            { text: 'KI-System-Inventar', link: '/de/templates/ai-inventory' },
            { text: 'Risikoklassifizierungs-Formular', link: '/de/templates/risk-classification' },
            { text: 'Nicht-Hochrisiko-Assessment', link: '/de/templates/non-high-risk' },
            { text: 'EU-Konformitätserklärung', link: '/de/templates/declaration-of-conformity' },
            { text: 'Transparenz-Hinweis', link: '/de/templates/transparency-notice' },
            { text: 'AI Literacy Schulungsnachweis', link: '/de/templates/ai-literacy' },
            { text: 'Go/No-Go Entscheidungsprotokoll', link: '/de/templates/go-no-go' },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------
    // UI Translations
    // -----------------------------------------------------------------

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-AIActCompliance/edit/main/docs/:path',
      text: 'Diese Seite bearbeiten'
    },
    lastUpdated: {
      text: 'Zuletzt aktualisiert',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: 'Auf dieser Seite', level: [2, 3] },
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
    returnToTopLabel: 'Zurück nach oben',
    sidebarMenuLabel: 'Menü',
    darkModeSwitchLabel: 'Erscheinungsbild',
    langMenuLabel: 'Sprache',

    footer: {
      message: 'Dokumentation lizenziert unter <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> · Code lizenziert unter <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP. Kommerzielle Nutzung der Dokumentation nicht gestattet.`
    },
  }
}
