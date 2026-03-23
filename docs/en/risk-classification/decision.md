# Classification Decision

## Decision Tree

For each identified AI system of the BAUER GROUP:

```
1. Is it an AI system pursuant to Art. 3(1)?
   │
   ├─ NO → AI Act not applicable → END
   │
   └─ YES ↓

2. Does it fall under Art. 5 (prohibited practices)?
   │
   ├─ YES → PROHIBITED → Cease development
   │
   └─ NO ↓

3. Is it a safety component of an Annex I product
   AND does it require a third-party conformity assessment?
   │
   ├─ YES → HIGH-RISK (Art. 6(1)) → Go/No-Go
   │
   └─ NO ↓

4. Does it fall under an Annex III category?
   │
   ├─ NO → Check Art. 50 (transparency obligations)
   │         │
   │         ├─ YES → LIMITED RISK
   │         └─ NO → MINIMAL RISK → END
   │
   └─ YES ↓

5. Does it perform profiling of natural persons?
   │
   ├─ YES → HIGH-RISK (always) → Go/No-Go
   │
   └─ NO ↓

6. Does the exception under Art. 6(3) apply?
   (narrow scope of tasks, no significant
    influence on human decision-making)
   │
   ├─ YES → NON-HIGH-RISK
   │        → Document the assessment (Art. 6(4))
   │        → Registration (Art. 49(2))
   │
   └─ NO → HIGH-RISK → Go/No-Go
```

## Practical Examples – BAUER GROUP

| System | AI Component | Annex III? | Profiling? | Result |
|---|---|---|---|---|
| Handwriting OCR (meter reading) | YOLO + TrOCR | No | No | **Minimal** – no obligations |
| Chatbot on customer website | LLM integration | No | No | **Limited** – labelling required |
| AI-assisted personnel pre-screening | ML ranking | Yes (No. 4a) | Yes | **High-risk** → Go/No-Go |
| Predictive maintenance (IoT) | Anomaly detection | Check (No. 2) | No | **Review required** |
| E-mail spam filter | Classification | No | No | **Minimal** – no obligations |

## Documentation

Every classification decision is recorded in the [Risk Classification Form](/en/templates/risk-classification).
