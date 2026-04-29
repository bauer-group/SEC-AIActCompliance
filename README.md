# AI Act Compliance Documentation

Vollständige Compliance-Dokumentation für den **EU Artificial Intelligence Act** (Verordnung (EU) 2024/1689) der BAUER GROUP.

> **Live-Dokumentation:** [ai-act.docs.bauer-group.com](https://ai-act.docs.bauer-group.com)
>
> Verfügbar in **Deutsch**, **English** und **简体中文** (Vereinfachtes Chinesisch)

## Regulatorische Fristen

| Frist | Pflicht | Status |
| --- | --- | --- |
| **01.08.2024** | Inkrafttreten der Verordnung (EU) 2024/1689 | ✅ Erfolgt |
| **02.02.2025** | Verbotene KI-Praktiken (Art. 5), AI Literacy (Art. 4) | ✅ Anwendbar |
| **02.08.2025** | GPAI-Pflichten (Art. 51–56), Governance, Sanktionsregime | ✅ Anwendbar |
| **02.08.2026** | Hochrisiko-KI (Art. 6–49), Transparenz (Art. 50), alle übrigen Pflichten | ⚠️ Hauptfrist |
| **02.08.2027** | Hochrisiko-KI als Sicherheitskomponenten in Annex-I-Produkten | ⏳ Frist |

> **Hinweis – Digital Omnibus:** Die EU-Kommission hat Ende 2025 eine mögliche Verschiebung der Hochrisiko-Pflichten für Annex-III-Systeme bis **Dezember 2027** vorgeschlagen. BAUER GROUP plant konservativ mit **August 2026** als bindender Frist. Details siehe [Zeitplan & Fristen](docs/de/overview/timeline.md).

## Projektstruktur

```
.
├── docs/                          # VitePress-Dokumentation
│   ├── de/                        # Deutsche Dokumentation (Primärsprache)
│   │   ├── overview/             # Einführung, Zeitplan, Geltungsbereich, Go/No-Go
│   │   ├── risk-classification/  # 4 Risikostufen, Annex I/III
│   │   ├── prohibited-practices/ # Art. 5 Verbotskatalog
│   │   ├── high-risk-ai/         # Art. 8–15 Anforderungen, QMS
│   │   ├── gpai/                 # General-Purpose AI, Art. 51–56
│   │   ├── transparency/         # Art. 50, Kennzeichnung
│   │   ├── governance/           # AI Literacy, Framework, Rollen
│   │   ├── conformity/           # Art. 43, CE, Annex VI/VII, Machine-Readable JSON
│   │   ├── enforcement/          # Sanktionen, Marktüberwachung, AI Office
│   │   ├── compliance-matrix/    # Anforderungszuordnung, Aufwand
│   │   └── templates/            # 7 Templates (Inventar, Formulare, Erklärungen)
│   ├── en/                        # Englische Dokumentation (vollständig übersetzt)
│   ├── zh/                        # Chinesische Dokumentation (vollständig übersetzt)
│   ├── public/                    # Statische Assets (Logo, Favicon)
│   └── .vitepress/
│       ├── config.ts              # VitePress-Konfiguration (Sitemap, RSS pro Locale, hreflang)
│       ├── locales/               # DE/EN/ZH Navigation + Sidebar
│       └── theme/                 # Custom Theme (BAUER CI, Print-Stylesheet)
├── .github/
│   └── workflows/
│       ├── deploy-pages.yml       # VitePress-Build + GitHub Pages Deployment
│       ├── release.yml            # Semantic-Release Versionierung
│       ├── ai-issue-summary.yml   # Automatisierte Issue-Zusammenfassungen
│       └── teams-notifications.yml # MS-Teams-Benachrichtigungen
├── internal/docs/                 # Interne Konzeptdokumente (nicht veröffentlicht)
└── package.json                   # @bauer-group/ai-act-compliance
```

## Dokumentation

### Mehrsprachige Dokumentation — 56 Seiten je Locale (DE / EN / ZH)

| Kapitel | Sektion | Inhalt | Seiten |
| --- | --- | --- | --- |
| **1** | Überblick | Einführung, Zeitplan, Geltungsbereich, Wirtschaftsakteure, BAUER GROUP Positionierung, Go/No-Go | 6 |
| **2** | Risikoklassifizierung | 4 Risikostufen, Entscheidungsbaum, Annex I, Annex III, Nicht-Hochrisiko | 5 |
| **3** | Verbotene Praktiken | Art. 5 Übersicht, Verbotskatalog, BAUER GROUP Prüfschema | 3 |
| **4** | Hochrisiko-KI | Art. 8–15 Anforderungen, Risikomanagement, Data Governance, Techn. Doku, Protokollierung, Transparenz, Menschl. Aufsicht, Genauigkeit, Provider-Pflichten, QMS | 10 |
| **5** | GPAI | GPAI-Modelle, Provider-Pflichten, Systemisches Risiko, Deployer-Perspektive | 4 |
| **6** | Transparenz | Art. 50, KI-Interaktion, Deepfakes, Kennzeichnung | 4 |
| **7** | Governance | AI Literacy, Framework, Rollen, Inventar | 4 |
| **8** | Konformität | Art. 43, Selbstbewertung, Annex VII, CE, Konformitätserklärung, Registrierung, Machine-Readable JSON | 7 |
| **9** | Durchsetzung | Sanktionen, Marktüberwachung, AI Office | 3 |
| **10** | Compliance-Matrix | Anforderungszuordnung, Aufwandsbewertung | 2 |
| **A** | Templates | KI-Inventar, Risikoklassifizierung, Nicht-Hochrisiko-Assessment, Konformitätserklärung, Transparenz-Hinweis, AI Literacy Nachweis, Go/No-Go Protokoll | 7 |

### Abdeckung

* Alle 4 Risikostufen mit Entscheidungsbaum und BAUER-spezifischer Bewertung
* Vollständiger Verbotskatalog (Art. 5) mit Prüfschema
* Alle Hochrisiko-Anforderungen (Art. 8–15) mit CRA-Synergien
* GPAI-Regelungen (Art. 51–56) aus Deployer-Perspektive
* Transparenzpflichten (Art. 50) mit Implementierungstemplates
* Governance-Framework mit AI Literacy (Art. 4)
* Konformitätsbewertung (Annex VI/VII) mit Go/No-Go-Strategie
* Sanktionsregime (Art. 99) mit BAUER-Risikobewertung
* Compliance-Matrix mit Aufwandsschätzung und CRA-Synergien
* 7 praxisfertige Templates

### Leitprinzip

> Regulatorisch vollständig nach außen — intern minimaler Mehraufwand.
> Unverhältnismäßiger Compliance-Aufwand = kein EU-Vertrieb.

## Abgrenzung zum CRA

| | CRA-Dokumentation | AI-Act-Dokumentation |
| --- | --- | --- |
| **Repo** | `SEC-CRACompliance` | `SEC-AIActCompliance` |
| **Verordnung** | (EU) 2024/2847 | (EU) 2024/1689 |
| **Scope** | Produkte mit digitalen Elementen | KI-Systeme |
| **CI/CD** | SBOM, Vulnerability Scan, Signierung | — (rein dokumentarisch) |
| **Synergien** | → QMS, Techn. Doku, Cybersicherheit werden vom AI Act referenziert | ← Nutzt CRA-Basisarbeit |

## Quickstart

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run docs:dev

# Produktions-Build
npm run docs:build

# Build-Preview
npm run docs:preview
```

## Deployment

Push auf `main` (Änderungen in `docs/`, `package.json`, `package-lock.json`) triggert automatisch:

1. Checkout + Node.js Setup (via `.nvmrc`)
2. `npm ci` + Markdown-Lint
3. VitePress-Build
4. GitHub Pages Deployment

## Lizenz

Dieses Repository verwendet ein **Dual-License-Modell**:

| Bereich | Lizenz | SPDX |
| --- | --- | --- |
| Code, Workflows, Konfiguration | [MIT License](LICENSE) | `MIT` |
| Dokumentation (`docs/`) | [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) | `CC-BY-NC-4.0` |

Die Dokumentation darf mit Namensnennung geteilt und bearbeitet werden, jedoch nicht fuer kommerzielle Zwecke verwendet werden.

Copyright © 2026 BAUER GROUP
