# Scope

## What Is an AI System?

Art. 3(1) AI Act defines an **AI system** as:

> A machine-based system that is designed to operate with varying levels of autonomy and that may exhibit adaptiveness after deployment, and that, for explicit or implicit objectives, infers from the inputs it receives how to generate outputs such as predictions, content, recommendations or decisions that can influence physical or virtual environments.

### Delineation: What Is NOT an AI System?

The following software does **not** fall within the scope of the AI Act:

- Rule-based systems without a learning component (classical if-then logic)
- Simple statistical methods (regression, mean calculation)
- Conventional database systems and search functions
- Standard automation software (RPA without ML component)
- Purely mathematical optimisation algorithms

::: tip BAUER GROUP Practical Rule
The majority of our software products (ERP modules, infrastructure monitoring, SCADA integrations, web applications) are **not AI systems** within the meaning of the AI Act. Only systems with ML/DL components, LLM integration or autonomous decision-making are subject to the Regulation.
:::

## Territorial Scope

The AI Act applies to:

| Actor | Established in EU | Established outside EU |
|---|---|---|
| **Provider** | ✅ Always | ✅ Where system is placed on the EU market |
| **Deployer** | ✅ Always | ✅ Where output is used in the EU |
| **Importer** | ✅ Always | — |
| **Distributor** | ✅ Always | — |

## Exemptions

The AI Act does **not** apply to:

- AI systems exclusively for **military or defence purposes**
- AI systems for **research and development** (before placing on the market)
- Natural persons using AI for **purely personal, non-professional** activities
- AI systems from **third countries** whose output is not used in the EU
- **Open-source AI** under certain conditions (Art. 2(12)) — except for high-risk or prohibited practices

## BAUER GROUP Product Screening

For each BAUER GROUP product the following must be assessed:

1. **Does the product contain an AI component?** → If no: AI Act not applicable, end.
2. **Is the product offered on the EU market?** → If no: AI Act not applicable (except where output is used in the EU).
3. **What risk level?** → See [Risk Classification](/en/risk-classification/).
4. **Go/No-Go?** → See [Decision Framework](/en/overview/go-no-go).
