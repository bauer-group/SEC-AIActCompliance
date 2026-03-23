# Data & Data Governance – Art. 10

## Requirement

Training, validation and test datasets for high-risk AI systems are subject to specific Data Governance requirements.

## Data Requirements

Datasets must:

- Be **relevant** to the intended purpose
- Be **sufficiently representative**, particularly for affected groups of persons
- Be **as far as possible free from errors** and **complete**
- Possess appropriate **statistical properties** (including with regard to geographical, behavioural and functional aspects)

## Data Governance Measures

Providers must document:

- **Data provenance** and collection methods
- **Data preparation processes** (labelling, cleansing, enrichment)
- **Bias assessment** and countermeasures taken
- Measures for the detection and remediation of **data gaps and deficiencies**
- Legal basis under data protection law (GDPR compliance)

## BAUER GROUP Implementation

| Scenario | Approach |
|---|---|
| BAUER trains its own models | Full Data Governance documentation required |
| BAUER uses third-party models (API) | Documentation of the provider's terms of use, input/output monitoring |
| BAUER fine-tunes third-party models | Data Governance for the fine-tuning dataset required |

::: warning Disproportionate Effort
Where the Data Governance requirements (particularly for training data documentation, bias analysis, representativeness evidence) exceed the product value → **No-Go EU**, distribution in third-country markets only.
:::
