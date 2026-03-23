import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const de: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    nav: [
      { text: 'Überblick', link: '/de/01-ueberblick/' },
      { text: 'Risikostufen', link: '/de/02-risikoklassifizierung/' },
      { text: 'Hochrisiko-KI', link: '/de/04-hochrisiko-ki/' },
      { text: 'GPAI', link: '/de/05-gpai/' },
      { text: 'Compliance-Matrix', link: '/de/10-compliance-matrix/' },
    ],
    sidebar: {
      '/de/': [
        {
          text: '1. Überblick',
          collapsed: false,
          items: [
            { text: 'Einführung', link: '/de/01-ueberblick/' },
            { text: 'Zeitplan & Fristen', link: '/de/01-ueberblick/zeitplan' },
            { text: 'Geltungsbereich', link: '/de/01-ueberblick/geltungsbereich' },
            { text: 'Wirtschaftsakteure & Rollen', link: '/de/01-ueberblick/wirtschaftsakteure' },
            { text: 'BAUER GROUP Positionierung', link: '/de/01-ueberblick/bauer-group' },
            { text: 'Go/No-Go Entscheidungsrahmen', link: '/de/01-ueberblick/go-no-go' },
          ],
        },
        {
          text: '2. Risikoklassifizierung',
          collapsed: false,
          items: [
            { text: 'Risikostufen-Übersicht', link: '/de/02-risikoklassifizierung/' },
            { text: 'Klassifizierungsentscheidung', link: '/de/02-risikoklassifizierung/entscheidung' },
            { text: 'Annex I – Harmonisierungsrecht', link: '/de/02-risikoklassifizierung/annex-i' },
            { text: 'Annex III – Hochrisiko-Kategorien', link: '/de/02-risikoklassifizierung/annex-iii' },
            { text: 'Nicht-Hochrisiko-Dokumentation', link: '/de/02-risikoklassifizierung/nicht-hochrisiko' },
          ],
        },
        {
          text: '3. Verbotene Praktiken',
          collapsed: true,
          items: [
            { text: 'Übersicht Art. 5', link: '/de/03-verbotene-praktiken/' },
            { text: 'Verbotskatalog', link: '/de/03-verbotene-praktiken/katalog' },
            { text: 'Prüfschema für BAUER Produkte', link: '/de/03-verbotene-praktiken/pruefschema' },
          ],
        },
        {
          text: '4. Hochrisiko-KI-Systeme',
          collapsed: true,
          items: [
            { text: 'Anforderungen Art. 8–15', link: '/de/04-hochrisiko-ki/' },
            { text: 'Risikomanagement (Art. 9)', link: '/de/04-hochrisiko-ki/risikomanagement' },
            { text: 'Daten & Data Governance (Art. 10)', link: '/de/04-hochrisiko-ki/data-governance' },
            { text: 'Technische Dokumentation (Art. 11)', link: '/de/04-hochrisiko-ki/technische-doku' },
            { text: 'Protokollierung (Art. 12)', link: '/de/04-hochrisiko-ki/protokollierung' },
            { text: 'Transparenz (Art. 13)', link: '/de/04-hochrisiko-ki/transparenz' },
            { text: 'Menschliche Aufsicht (Art. 14)', link: '/de/04-hochrisiko-ki/menschliche-aufsicht' },
            { text: 'Genauigkeit & Robustheit (Art. 15)', link: '/de/04-hochrisiko-ki/genauigkeit-robustheit' },
            { text: 'Provider-Pflichten (Art. 16–21)', link: '/de/04-hochrisiko-ki/provider-pflichten' },
            { text: 'Qualitätsmanagementsystem (Art. 17)', link: '/de/04-hochrisiko-ki/qms' },
          ],
        },
        {
          text: '5. General-Purpose AI (GPAI)',
          collapsed: true,
          items: [
            { text: 'GPAI-Modelle (Art. 51–56)', link: '/de/05-gpai/' },
            { text: 'Pflichten GPAI-Anbieter (Art. 53)', link: '/de/05-gpai/pflichten' },
            { text: 'Systemisches Risiko (Art. 55)', link: '/de/05-gpai/systemisches-risiko' },
            { text: 'BAUER GROUP als GPAI-Deployer', link: '/de/05-gpai/deployer-perspektive' },
          ],
        },
        {
          text: '6. Transparenzpflichten',
          collapsed: true,
          items: [
            { text: 'Übersicht (Art. 50)', link: '/de/06-transparenz/' },
            { text: 'KI-Interaktion offenlegen', link: '/de/06-transparenz/ki-interaktion' },
            { text: 'Deepfakes & synthetische Inhalte', link: '/de/06-transparenz/deepfakes' },
            { text: 'Kennzeichnungspflichten', link: '/de/06-transparenz/kennzeichnung' },
          ],
        },
        {
          text: '7. Governance & AI Literacy',
          collapsed: true,
          items: [
            { text: 'AI Literacy (Art. 4)', link: '/de/07-governance/' },
            { text: 'AI Governance Framework', link: '/de/07-governance/framework' },
            { text: 'Rollen & Verantwortlichkeiten', link: '/de/07-governance/rollen' },
            { text: 'KI-Inventar & Registrierung', link: '/de/07-governance/inventar' },
          ],
        },
        {
          text: '8. Konformitätsbewertung',
          collapsed: true,
          items: [
            { text: 'Übersicht (Art. 43)', link: '/de/08-konformitaet/' },
            { text: 'Selbstbewertung (Annex VI)', link: '/de/08-konformitaet/selbstbewertung' },
            { text: 'QMS + Techn. Doku (Annex VII)', link: '/de/08-konformitaet/annex-vii' },
            { text: 'CE-Kennzeichnung (Art. 48)', link: '/de/08-konformitaet/ce-kennzeichnung' },
            { text: 'EU-Konformitätserklärung (Art. 47)', link: '/de/08-konformitaet/konformitaetserklaerung' },
            { text: 'EU-Datenbank-Registrierung (Art. 49)', link: '/de/08-konformitaet/registrierung' },
          ],
        },
        {
          text: '9. Durchsetzung & Sanktionen',
          collapsed: true,
          items: [
            { text: 'Sanktionsregime (Art. 99)', link: '/de/09-durchsetzung/' },
            { text: 'Marktüberwachung', link: '/de/09-durchsetzung/marktueberwachung' },
            { text: 'AI Office & AI Board', link: '/de/09-durchsetzung/ai-office' },
          ],
        },
        {
          text: '10. Compliance-Matrix',
          collapsed: false,
          items: [
            { text: 'Anforderungs-Zuordnung', link: '/de/10-compliance-matrix/' },
            { text: 'Aufwandsbewertung & Go/No-Go', link: '/de/10-compliance-matrix/aufwand' },
          ],
        },
        {
          text: 'A. Templates',
          collapsed: true,
          items: [
            { text: 'KI-System-Inventar', link: '/de/templates/ki-inventar' },
            { text: 'Risikoklassifizierungs-Formular', link: '/de/templates/risikoklassifizierung' },
            { text: 'Nicht-Hochrisiko-Assessment', link: '/de/templates/nicht-hochrisiko' },
            { text: 'EU-Konformitätserklärung', link: '/de/templates/konformitaetserklaerung' },
            { text: 'Transparenz-Hinweis', link: '/de/templates/transparenz-hinweis' },
            { text: 'AI Literacy Schulungsnachweis', link: '/de/templates/ai-literacy' },
            { text: 'Go/No-Go Entscheidungsprotokoll', link: '/de/templates/go-no-go' },
          ],
        },
      ],
    },
    outline: { label: 'Auf dieser Seite' },
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
    lastUpdated: { text: 'Zuletzt aktualisiert' },
    editLink: { text: 'Diese Seite auf GitHub bearbeiten' },
  },
}
