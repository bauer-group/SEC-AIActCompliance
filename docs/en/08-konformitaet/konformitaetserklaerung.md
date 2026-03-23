# EU Declaration of Conformity – Art. 47

## Requirement

Providers of high-risk AI systems must issue an **EU Declaration of Conformity** confirming that the system meets the requirements of the AI Act.

## Content

The declaration must contain at least:

- Name and address of the provider
- Unique identification of the AI system (name, type, serial number/version)
- Statement that the system complies with the requirements of the AI Act
- Reference to applied harmonised standards or other technical specifications
- Where applicable, name and identification number of the notified body (for Annex VII)
- Date and signature

## Single Source of Truth

The EU Declaration of Conformity is generated from the machine-readable file `.compliance/ai-act-statement.json`. This ensures that:

- **One source** — JSON is the sole location where compliance data are maintained
- **Consistency** — Human-readable DoC, CE marking and EU database registration use the same data
- **Automation** — Validation and generation in the CI/CD pipeline

See: [Machine-Readable Format](/en/08-konformitaet/maschinenlesbar)

## Retention

The EU Declaration of Conformity must be retained for **10 years** after the AI system is placed on the market and presented to the competent authorities upon request.

## Template

See: [EU Declaration of Conformity Template](/en/templates/konformitaetserklaerung)
