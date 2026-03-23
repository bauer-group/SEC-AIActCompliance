# Machine-Readable Format – AI Act Compliance Statement

## Purpose

Machine-readable compliance data enable:

- **Automated publication** on the compliance portal
- **Programmatic validation** in CI/CD pipelines
- **Aggregation** across all AI systems in a central dashboard
- **Authority access** via API for market surveillance authorities
- **Generation** of the human-readable EU Declaration of Conformity (Annex V)

::: tip FORMAT
**JSON** is the primary format. The file name is `ai-act-statement.json`, stored in `.compliance/` within the product repository.
:::

## JSON Schema

The AI Act Compliance Statement follows a defined JSON schema:

```json
{
  "$schema": "https://ai-act.app.bauer-group.com/schemas/ai-act-statement/v1.json",
  "schema_version": "1.0.0",

  "provider": {
    "name": "BAUER GROUP",
    "address": "[Full postal address]",
    "contact_email": "ai-compliance@bauer-group.com",
    "website": "[URL]",
    "authorised_representative": null
  },

  "ai_system": {
    "name": "[Name of the AI system]",
    "version": "[X.Y.Z]",
    "type": "[standalone|embedded|gpai_based]",
    "description": "[Brief description of the intended use]",
    "identifier": "AI-BGI-XXXX",
    "intended_purpose": "[Intended purpose pursuant to Art. 13]",
    "deployer_type": "[internal|b2b|b2c|public_authority]"
  },

  "risk_classification": {
    "risk_level": "[minimal|limited|high_risk]",
    "annex_iii_category": "[1-8 or null]",
    "annex_i_product": "[Annex I reference or null]",
    "classification_rationale": "[Rationale for the classification]"
  },

  "conformity_assessment": {
    "procedure": "[annex_vi|annex_vii]",
    "notified_body": null,
    "assessment_date": "[YYYY-MM-DD]",
    "declaration_url": "[URL to the full DoC]",
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
    "eu_database_id": "[Registration number or null]"
  },

  "support_period": {
    "start_date": "[YYYY-MM-DD]",
    "end_date": "[YYYY-MM-DD]",
    "phase": "[active|monitoring|eol]",
    "post_market_monitoring": true
  },

  "harmonised_standards": [
    {
      "identifier": "[e.g. EN XXXXX:YYYY]",
      "description": "[Description]"
    }
  ],

  "metadata": {
    "generated_at": "[ISO 8601 Timestamp]",
    "generator": "[Tool or manual]",
    "statement_version": "[Version of the statement]",
    "regulation": "(EU) 2024/1689"
  }
}
```

## Field Overview

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `schema_version` | string | Version of the schema (SemVer) |
| `provider.name` | string | Company name of the provider |
| `provider.contact_email` | string | Compliance contact |
| `ai_system.name` | string | Name of the AI system |
| `ai_system.version` | string | Current version (SemVer) |
| `ai_system.type` | enum | `standalone`, `embedded`, `gpai_based` |
| `ai_system.identifier` | string | Unique system ID |
| `ai_system.intended_purpose` | string | Intended purpose |
| `risk_classification.risk_level` | enum | `minimal`, `limited`, `high_risk` |
| `conformity_assessment.procedure` | enum | `annex_vi`, `annex_vii` |
| `conformity_assessment.assessment_date` | string (date) | Date of the conformity assessment |
| `conformity_assessment.declaration_date` | string (date) | Date of the DoC |
| `conformity_assessment.ce_marking` | boolean | CE marking affixed? |
| `compliance.art_9_risk_management` | boolean | Art. 9 fulfilled? |
| `compliance.art_10_data_governance` | boolean | Art. 10 fulfilled? |
| `compliance.art_11_technical_documentation` | boolean | Art. 11 fulfilled? |
| `compliance.art_12_record_keeping` | boolean | Art. 12 fulfilled? |
| `compliance.art_13_transparency` | boolean | Art. 13 fulfilled? |
| `compliance.art_14_human_oversight` | boolean | Art. 14 fulfilled? |
| `compliance.art_15_accuracy_robustness` | boolean | Art. 15 fulfilled? |
| `compliance.art_17_qms` | boolean | Art. 17 QMS in place? |
| `support_period.start_date` | string (date) | Support start |
| `support_period.end_date` | string (date) | Support end |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `provider.address` | string | Postal address |
| `provider.website` | string (URL) | Company website |
| `provider.authorised_representative` | string | Authorised representative (if applicable) |
| `ai_system.description` | string | Brief description |
| `ai_system.deployer_type` | enum | `internal`, `b2b`, `b2c`, `public_authority` |
| `risk_classification.annex_iii_category` | integer | Annex III category (1–8) |
| `risk_classification.annex_i_product` | string | Annex I product reference |
| `risk_classification.classification_rationale` | string | Rationale |
| `conformity_assessment.notified_body` | string | Notified body (for Annex VII) |
| `conformity_assessment.declaration_url` | string (URL) | Link to the DoC |
| `transparency.eu_database_id` | string | EU database registration no. |
| `support_period.phase` | enum | `active`, `monitoring`, `eol` |
| `harmonised_standards[]` | array | Applied standards |
| `metadata.*` | object | Generation information |

## Generation Flow

```
.compliance/ai-act-statement.json (Single Source of Truth)
    ↓
    ├─→ EU Declaration of Conformity (PDF/HTML — Annex V)
    ├─→ CE Marking (product, packaging, documentation)
    ├─→ EU Database Registration (Art. 49)
    ├─→ Compliance Dashboard (central aggregation)
    └─→ Deployer Information (instructions for use Art. 13)
```

## Validation

### CI/CD Pipeline

```yaml
# Example: GitHub Actions Step
- name: Validate AI Act Statement
  run: |
    npx ajv validate \
      -s schemas/ai-act-statement-v1.schema.json \
      -d .compliance/ai-act-statement.json
```

### Validation Rules

| Check | Severity | Description |
|-------|:--------:|-------------|
| Schema conformity | 🔴 Blocker | JSON must validate against the schema |
| Required fields present | 🔴 Blocker | All required fields must be completed |
| Risk level ↔ compliance fields | 🔴 Blocker | For `high_risk`, all Art. 8–15 fields must be `true` |
| Annex VI ↔ notified body | 🔴 Blocker | For `annex_vi`, `notified_body` must not be set |
| Date consistency | 🟡 Warning | `end_date` must be after `start_date` |
| Support not expired | 🟡 Warning | `end_date` should be in the future |
| EU database ID | 🟡 Warning | For `high_risk`, `eu_database_id` should be set |

## Complete Example

```json
{
  "$schema": "https://ai-act.app.bauer-group.com/schemas/ai-act-statement/v1.json",
  "schema_version": "1.0.0",

  "provider": {
    "name": "BAUER GROUP",
    "address": "Musterstraße 1, 12345 Musterstadt, Deutschland",
    "contact_email": "ai-compliance@bauer-group.com",
    "website": "https://www.bauer-group.com",
    "authorised_representative": null
  },

  "ai_system": {
    "name": "BAUER Predictive Maintenance Engine",
    "version": "1.2.0",
    "type": "embedded",
    "description": "AI-based predictive maintenance for construction machinery hydraulic systems",
    "identifier": "AI-BGI-0042",
    "intended_purpose": "Prediction of maintenance needs based on sensor data (vibration, temperature, pressure) to prevent unplanned downtime",
    "deployer_type": "b2b"
  },

  "risk_classification": {
    "risk_level": "high_risk",
    "annex_iii_category": 2,
    "annex_i_product": "Machinery Regulation (EU) 2023/1230",
    "classification_rationale": "Safety component in Annex I product (construction machinery) — Art. 6(1)"
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

## Schema Versioning

| Field | Rule |
|-------|------|
| `schema_version` | Follows SemVer (MAJOR.MINOR.PATCH) |
| MAJOR | Incompatible changes (new required fields, structural changes) |
| MINOR | Backwards-compatible extensions (new optional fields) |
| PATCH | Corrections to descriptions or validation rules |

::: warning COMPATIBILITY
When a schema MAJOR update occurs, all existing `ai-act-statement.json` files must be migrated. Migration guides are documented in this manual.
:::

## Cross-References

| Topic | Link |
|-------|------|
| EU Declaration of Conformity (content) | [Art. 47 Explanation](/en/08-konformitaet/konformitaetserklaerung) |
| EU Declaration of Conformity (template) | [Template](/en/templates/konformitaetserklaerung) |
| EU Database Registration | [Art. 49](/en/08-konformitaet/registrierung) |
| CE Marking | [Art. 48](/en/08-konformitaet/ce-kennzeichnung) |
| Risk Classification | [Chapter 2](/en/02-risikoklassifizierung/) |
