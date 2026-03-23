# Record-Keeping – Art. 12

## Requirement

High-risk AI systems must be technically designed in such a way that **events are automatically recorded** (logging).

## Minimum Requirements

The automatic logging must cover:

- **Periods of use** (start/end of each use)
- **Reference database** against which input data are checked
- **Input data** that led to a search
- **Identification** of the natural persons involved in human oversight

## Retention Periods

- Provider: retain logs **in so far as under their control**
- Deployer: retain logs for **at least 6 months** (Art. 26(6))

## BAUER GROUP Implementation

| Measure | Implementation |
|---|---|
| Automatic logs | Structured logging (JSON) within the existing logging infrastructure |
| Retention | Retention policy ≥ 6 months (already covered by CRA requirements) |
| Access | Logs available to authorities upon request |

::: tip Minimal Effort
Where the system already has structured logging in place (which is standard for BAUER GROUP products), the additional effort is limited to ensuring that the AI Act-specific fields are included.
:::
