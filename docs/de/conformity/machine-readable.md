# Maschinenlesbares Format – AI Act Compliance Statement

## Zweck

Maschinenlesbare Compliance-Daten ermöglichen:

- **Automatisierte Publikation** auf dem Compliance-Portal
- **Programmatische Validierung** in CI/CD-Pipelines
- **Aggregation** über alle KI-Systeme in einem zentralen Dashboard
- **Behördenzugang** via API für Marktaufsichtsbehörden
- **Generierung** der menschenlesbaren EU-Konformitätserklärung (Annex V)

::: tip FORMAT
**JSON** ist das primäre Format. Der Dateiname ist `ai-act-statement.json`, Speicherort ist `.compliance/` im Produkt-Repository.
:::

## JSON-Schema

Das AI Act Compliance Statement folgt einem definierten JSON-Schema:

```json
{
  "$schema": "https://ai-act.app.bauer-group.com/schemas/ai-act-statement/v1.json",
  "schema_version": "1.0.0",

  "provider": {
    "name": "BAUER GROUP",
    "address": "[Vollständige Postanschrift]",
    "contact_email": "compliance@bauer-group.com",
    "website": "[URL]",
    "authorised_representative": null
  },

  "ai_system": {
    "name": "[Name des KI-Systems]",
    "version": "[X.Y.Z]",
    "type": "[standalone|embedded|gpai_based]",
    "description": "[Kurzbeschreibung des Einsatzzwecks]",
    "identifier": "AI-BGI-XXXX",
    "intended_purpose": "[Bestimmungsgemäße Verwendung gemäß Art. 13]",
    "deployer_type": "[internal|b2b|b2c|public_authority]"
  },

  "risk_classification": {
    "risk_level": "[minimal|limited|high_risk]",
    "annex_iii_category": "[1-8 oder null]",
    "annex_i_product": "[Annex-I-Referenz oder null]",
    "classification_rationale": "[Begründung der Einstufung]"
  },

  "conformity_assessment": {
    "procedure": "[annex_vi|annex_vii]",
    "notified_body": null,
    "assessment_date": "[YYYY-MM-DD]",
    "declaration_url": "[URL zur vollständigen DoC]",
    "declaration_date": "[YYYY-MM-DD]",
    "ce_marking": true,
    "ce_marking_placement": "[product|packaging|documentation|digital]"
  },

  "compliance": {
    "art_9_risk_management": true,
    "art_10_data_governance": true,
    "art_11_technical_documentation": true,
    "art_12_record_keeping": true,
    "art_13_transparency": true,
    "art_14_human_oversight": true,
    "art_15_accuracy_robustness": true,
    "art_17_qms": true
  },

  "transparency": {
    "ai_interaction_disclosed": true,
    "synthetic_content_labelled": false,
    "deployer_instructions_provided": true,
    "eu_database_registered": true,
    "eu_database_id": "[Registrierungsnummer oder null]"
  },

  "support_period": {
    "start_date": "[YYYY-MM-DD]",
    "end_date": "[YYYY-MM-DD]",
    "phase": "[active|monitoring|eol]",
    "post_market_monitoring": true
  },

  "harmonised_standards": [
    {
      "identifier": "[z.B. EN XXXXX:YYYY]",
      "description": "[Beschreibung]"
    }
  ],

  "metadata": {
    "generated_at": "[ISO 8601 Timestamp]",
    "generator": "[Tool oder manuell]",
    "statement_version": "[Version des Statements]",
    "regulation": "(EU) 2024/1689"
  }
}
```

## Feldübersicht

### Pflichtfelder

| Feld | Typ | Beschreibung |
|------|-----|-------------|
| `schema_version` | string | Version des Schemas (SemVer) |
| `provider.name` | string | Firmenname des Providers |
| `provider.contact_email` | string | Compliance-Kontakt |
| `ai_system.name` | string | Name des KI-Systems |
| `ai_system.version` | string | Aktuelle Version (SemVer) |
| `ai_system.type` | enum | `standalone`, `embedded`, `gpai_based` |
| `ai_system.identifier` | string | Eindeutige System-ID |
| `ai_system.intended_purpose` | string | Bestimmungsgemäße Verwendung |
| `risk_classification.risk_level` | enum | `minimal`, `limited`, `high_risk` (kein `prohibited` — verbotene Systeme erhalten keine Konformitätserklärung) |
| `conformity_assessment.procedure` | enum | `annex_vi`, `annex_vii` |
| `conformity_assessment.assessment_date` | string (Datum) | Datum der Konformitätsbewertung |
| `conformity_assessment.declaration_date` | string (Datum) | Datum der DoC |
| `conformity_assessment.ce_marking` | boolean | CE-Kennzeichnung angebracht? |
| `compliance.art_9_risk_management` | boolean | Art. 9 erfüllt? |
| `compliance.art_10_data_governance` | boolean | Art. 10 erfüllt? |
| `compliance.art_11_technical_documentation` | boolean | Art. 11 erfüllt? |
| `compliance.art_12_record_keeping` | boolean | Art. 12 erfüllt? |
| `compliance.art_13_transparency` | boolean | Art. 13 erfüllt? |
| `compliance.art_14_human_oversight` | boolean | Art. 14 erfüllt? |
| `compliance.art_15_accuracy_robustness` | boolean | Art. 15 erfüllt? |
| `compliance.art_17_qms` | boolean | Art. 17 QMS vorhanden? |
| `support_period.start_date` | string (Datum) | Support-Beginn |
| `support_period.end_date` | string (Datum) | Support-Ende |

### Optionale Felder

| Feld | Typ | Beschreibung |
|------|-----|-------------|
| `provider.address` | string | Postanschrift |
| `provider.website` | string (URL) | Unternehmenswebsite |
| `provider.authorised_representative` | string | Bevollmächtigter (falls zutreffend) |
| `ai_system.description` | string | Kurzbeschreibung |
| `ai_system.deployer_type` | enum | `internal`, `b2b`, `b2c`, `public_authority` |
| `risk_classification.annex_iii_category` | integer | Annex-III-Kategorie (1–8) |
| `risk_classification.annex_i_product` | string | Annex-I-Produktverweis |
| `risk_classification.classification_rationale` | string | Begründung |
| `conformity_assessment.notified_body` | string | Benannte Stelle (bei Annex VII) |
| `conformity_assessment.declaration_url` | string (URL) | Link zur DoC |
| `transparency.eu_database_id` | string | EU-Datenbank-Registrierungsnr. |
| `support_period.phase` | enum | `active`, `monitoring`, `eol` |
| `harmonised_standards[]` | array | Angewandte Normen |
| `metadata.*` | object | Generierungsinformationen |

## Generierungsfluss

```
.compliance/ai-act-statement.json (Single Source of Truth)
    ↓
    ├─→ EU-Konformitätserklärung (PDF/HTML — Annex V)
    ├─→ CE-Kennzeichnung (Produkt, Verpackung, Dokumentation)
    ├─→ EU-Datenbank-Registrierung (Art. 49)
    ├─→ Compliance-Dashboard (zentrale Aggregation)
    └─→ Deployer-Information (Gebrauchsanweisung Art. 13)
```

## Validierung

### CI/CD-Pipeline

```yaml
# Beispiel: GitHub Actions Step
- name: Validate AI Act Statement
  run: |
    npx ajv validate \
      -s schemas/ai-act-statement-v1.schema.json \
      -d .compliance/ai-act-statement.json
```

### Validierungsregeln

| Prüfung | Schweregrad | Beschreibung |
|---------|:-----------:|-------------|
| Schema-Konformität | 🔴 Blocker | JSON muss gegen Schema validieren |
| Pflichtfelder vorhanden | 🔴 Blocker | Alle Pflichtfelder müssen ausgefüllt sein |
| Risikostufe ↔ Compliance-Felder | 🔴 Blocker | Bei `high_risk` müssen alle Art. 8–15 Felder `true` sein |
| Annex-VI ↔ Notified Body | 🔴 Blocker | Bei `annex_vi` darf `notified_body` nicht gesetzt sein |
| Datum-Konsistenz | 🟡 Warning | `end_date` muss nach `start_date` liegen |
| Support nicht abgelaufen | 🟡 Warning | `end_date` sollte in der Zukunft liegen |
| EU-Datenbank-ID | 🟡 Warning | Bei `high_risk` sollte `eu_database_id` gesetzt sein |

## Vollständiges Beispiel

```json
{
  "$schema": "https://ai-act.app.bauer-group.com/schemas/ai-act-statement/v1.json",
  "schema_version": "1.0.0",

  "provider": {
    "name": "BAUER GROUP",
    "address": "Musterstraße 1, 12345 Musterstadt, Deutschland",
    "contact_email": "compliance@bauer-group.com",
    "website": "https://bauer-group.com",
    "authorised_representative": null
  },

  "ai_system": {
    "name": "BAUER Predictive Maintenance Engine",
    "version": "1.2.0",
    "type": "embedded",
    "description": "KI-basierte vorausschauende Wartung für Baumaschinen-Hydrauliksysteme",
    "identifier": "AI-BGI-0042",
    "intended_purpose": "Vorhersage von Wartungsbedarf auf Basis von Sensordaten (Vibration, Temperatur, Druck) zur Vermeidung ungeplanter Ausfälle",
    "deployer_type": "b2b"
  },

  "risk_classification": {
    "risk_level": "high_risk",
    "annex_iii_category": 2,
    "annex_i_product": "Maschinenverordnung (EU) 2023/1230",
    "classification_rationale": "Sicherheitskomponente in Annex-I-Produkt (Baumaschine) — Art. 6 Abs. 1"
  },

  "conformity_assessment": {
    "procedure": "annex_vi",
    "notified_body": null,
    "assessment_date": "2026-07-15",
    "declaration_url": "https://ai-act.app.bauer-group.com/systems/AI-BGI-0042/doc",
    "declaration_date": "2026-07-15",
    "ce_marking": true,
    "ce_marking_placement": "documentation"
  },

  "compliance": {
    "art_9_risk_management": true,
    "art_10_data_governance": true,
    "art_11_technical_documentation": true,
    "art_12_record_keeping": true,
    "art_13_transparency": true,
    "art_14_human_oversight": true,
    "art_15_accuracy_robustness": true,
    "art_17_qms": true
  },

  "transparency": {
    "ai_interaction_disclosed": false,
    "synthetic_content_labelled": false,
    "deployer_instructions_provided": true,
    "eu_database_registered": true,
    "eu_database_id": "EU-AI-DB-2026-004217"
  },

  "support_period": {
    "start_date": "2026-07-15",
    "end_date": "2031-07-15",
    "phase": "active",
    "post_market_monitoring": true
  },

  "harmonised_standards": [
    {
      "identifier": "ISO/IEC 42001:2023",
      "description": "AI Management System"
    },
    {
      "identifier": "ISO/IEC 23894:2023",
      "description": "AI Risk Management"
    }
  ],

  "metadata": {
    "generated_at": "2026-07-15T09:00:00Z",
    "generator": "manual",
    "statement_version": "1.0.0",
    "regulation": "(EU) 2024/1689"
  }
}
```

## Schema-Versionierung

| Feld | Regel |
|------|-------|
| `schema_version` | Folgt SemVer (MAJOR.MINOR.PATCH) |
| MAJOR | Inkompatible Änderungen (neue Pflichtfelder, Strukturänderungen) |
| MINOR | Rückwärtskompatible Erweiterungen (neue optionale Felder) |
| PATCH | Korrekturen an Beschreibungen oder Validierungsregeln |

::: warning KOMPATIBILITÄT
Bei einem Schema-MAJOR-Update müssen alle bestehenden `ai-act-statement.json`-Dateien migriert werden. Migration Guides werden in diesem Manual dokumentiert.
:::

## Querverweise

| Thema | Link |
|-------|------|
| EU-Konformitätserklärung (Inhalt) | [Art. 47 Erläuterung](/de/conformity/declaration-of-conformity) |
| EU-Konformitätserklärung (Template) | [Template](/de/templates/declaration-of-conformity) |
| EU-Datenbank-Registrierung | [Art. 49](/de/conformity/registration) |
| CE-Kennzeichnung | [Art. 48](/de/conformity/ce-marking) |
| Risikoklassifizierung | [Kapitel 2](/de/risk-classification/) |
