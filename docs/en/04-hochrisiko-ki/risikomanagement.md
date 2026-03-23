# Risk Management – Art. 9

## Requirement

Providers of high-risk AI systems must implement a **risk management system** as a continuous iterative process throughout the entire lifecycle.

## Mandatory Components

The risk management system must:

1. **Identify and analyse known and foreseeable risks** — during intended use and during reasonably foreseeable misuse
2. **Assess risks** that may arise during intended use and during reasonably foreseeable misuse
3. **Develop and implement appropriate risk mitigation measures**
4. **Assess and document residual risks** — taking into account the risk mitigation measures
5. **Test** — before placing on the market and throughout the lifecycle, to ensure the system functions as intended

## Testing Requirements

- Tests against **pre-defined metrics and thresholds**
- Consideration of the **intended purpose**
- Testing for **bias** with regard to affected groups of persons
- Regardless of data format: structured, unstructured, mixed

## BAUER GROUP Implementation (Minimal Approach)

| Measure | Implementation |
|---|---|
| Risk identification | Extension of the existing CRA risk assessment form with AI-specific risk categories |
| Risk assessment | Simple risk matrix (likelihood × impact) |
| Risk mitigation | Documentation of chosen measures in the CRA risk assessment form |
| Testing | Integration into the existing CI/CD pipeline (ML model metrics as quality gate) |
| Documentation | Template-based, product-specific |

::: tip Synergies with CRA
CRA vulnerability management already covers cybersecurity risks. AI Act risk management supplements this with AI-specific risks (bias, hallucination, explainability, robustness).
:::
