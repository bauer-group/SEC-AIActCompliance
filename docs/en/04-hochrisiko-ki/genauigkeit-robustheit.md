# Accuracy, Robustness, Cybersecurity – Art. 15

## Requirement

High-risk AI systems must exhibit an **appropriate level of accuracy, robustness and cybersecurity**.

## Accuracy

- Accuracy levels must be **declared in the instructions for use**
- Define and measure appropriate **metrics** for the respective intended purpose
- Accuracy levels must be **appropriate** for the intended purpose

## Robustness

- Resilience against **errors, faults and inconsistencies** in the operating environment
- Technical redundancy (backup systems, fail-safe mechanisms)
- Robustness against **adversarial attacks** (Adversarial ML)

## Cybersecurity

- Protection against unauthorised access and manipulation
- Address **Model Poisoning**, **Data Poisoning** and **Adversarial Examples**
- Measures to protect **confidentiality, integrity and availability**

::: tip CRA Synergies
The cybersecurity requirements of Art. 15 overlap considerably with the CRA requirements (Annex I Part II). The existing CRA security architecture and vulnerability management already cover the majority of these requirements. In addition, AI-specific threats (Adversarial ML, Prompt Injection, Model Extraction) must be addressed.
:::

## BAUER GROUP Implementation

| Art. 15 Requirement | CRA Coverage | AI Act Supplement |
|---|---|---|
| Cybersecurity | ✅ CRA Art. 10–14 | + Adversarial ML, Prompt Injection |
| Accuracy | ❌ Not in CRA | Model metrics in CI/CD + documentation |
| Robustness | Partial (CRA Annex I) | + ML-specific stress tests |
