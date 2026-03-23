# Go/No-Go Decision Framework

## Principle

Every AI system of the BAUER GROUP undergoes a **cost-benefit assessment** before EU market launch. The AI Act does not prescribe such an assessment, but as an organisation we autonomously decide which products we distribute and where.

::: danger Core Rule
**Disproportionate regulatory effort = no EU distribution.** We are not obliged to offer every product in the EU. Where the EU makes innovation more expensive through regulation, we distribute the product in markets without these constraints.
:::

## Decision Matrix

```
┌─────────────────────────────────────────────┐
│ Does the product contain an AI component?   │
│                                             │
│   NO  → AI Act not applicable → GO          │
│   YES ↓                                    │
├─────────────────────────────────────────────┤
│ Does the system fall under Art. 5            │
│ (prohibited)?                               │
│                                             │
│   YES → Do not develop product → STOP       │
│   NO  ↓                                    │
├─────────────────────────────────────────────┤
│ Risk classification (Art. 6, Annex III)      │
│                                             │
│   MINIMAL  → GO (no obligations)            │
│   LIMITED  → GO (transparency obligations   │
│              only)                           │
│   HIGH ↓                                   │
├─────────────────────────────────────────────┤
│ Cost-benefit assessment for high-risk        │
│                                             │
│   Compliance effort ≤ 15% of                │
│   3Y contribution margin → GO               │
│                                             │
│   Compliance effort > 15% of                │
│   3Y contribution margin → NO-GO EU         │
│   → Assess third-market distribution        │
└─────────────────────────────────────────────┘
```

## Compliance Effort for High-Risk (estimated)

| Item | One-off | Annual |
|---|---|---|
| Risk management system (Art. 9) | 40–80h | 20–40h |
| Data governance documentation (Art. 10) | 60–120h | 10–20h |
| Technical documentation (Art. 11, Annex IV) | 80–160h | 20–40h |
| QMS setup and evidence (Art. 17) | 40–80h | 20–40h |
| Conformity assessment (Art. 43) | 40–80h | 10–20h |
| EU database registration (Art. 49) | 8–16h | 4–8h |
| Post-market monitoring | — | 20–40h |
| **Total high-risk** | **268–536h** | **104–208h** |

At an internal hourly rate of EUR 120 this equates to **EUR 32,160–64,320 one-off** plus **EUR 12,480–24,960/year** — excluding external consultancy and notified body costs.

## Threshold Calculation

Example: product with AI component, expected 3-year contribution margin EUR 200,000.

- 15% threshold: EUR 30,000
- Estimated compliance effort (minimum): ~EUR 57,000 (3 years)
- **Result: NO-GO EU** — distribution in third-country markets only

## Alternatives in Case of NO-GO EU

1. **Remove AI component** — implement a rule-based alternative
2. **Third-market distribution** — APAC, MENA, Latin America
3. **AI component as optional feature** — EU version without AI, full version for third-country markets
4. **Wait for simplification** — await Digital Omnibus / delegated acts

## Documentation Requirement

Every Go/No-Go decision is documented and archived in the [Decision Protocol Template](/en/templates/go-no-go).
