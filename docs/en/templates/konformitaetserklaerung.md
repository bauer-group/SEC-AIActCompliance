# Template: EU Declaration of Conformity (Art. 47)

::: tip SINGLE SOURCE OF TRUTH
This declaration is generated from the machine-readable file `.compliance/ai-act-statement.json`. Always make changes in the JSON file — the human-readable version is derived from it. See: [Machine-Readable Format](/en/08-konformitaet/maschinenlesbar)
:::

---

## EU DECLARATION OF CONFORMITY

### No. [declaration_id]

### Regulation (EU) 2024/1689 — Artificial Intelligence Act

---

**1. AI System:**

| Field | Value |
|-------|-------|
| Designation | [ai_system.name] |
| Trade name / brand | [ai_system.trade_name or "Not applicable"] |
| Type | [ai_system.type] |
| Version | [ai_system.version] |
| Model / variant | [ai_system.model or "Not applicable"] |
| Batch / serial number | [ai_system.serial_number or "Not applicable"] |
| System ID | [ai_system.identifier] |
| Intended purpose | [ai_system.intended_purpose] |

**2. Name and address of the provider and, where applicable, their authorised representative:**

| Field | Value |
|-------|-------|
| Company | [provider.name] |
| Address | [provider.address] |
| E-mail | [provider.contact_email] |
| Website | [provider.website] |
| **Authorised representative** (if applicable) | [provider.authorised_representative \|\| "Not applicable"] |

**3. This declaration of conformity is issued under the sole responsibility of the provider.**

**4. Risk classification:**

| Field | Value |
|-------|-------|
| Risk level | [risk_classification.risk_level] |
| Annex III category | [risk_classification.annex_iii_category \|\| "Not applicable"] |
| Annex I product | [risk_classification.annex_i_product \|\| "Not applicable"] |
| Rationale | [risk_classification.classification_rationale] |

**5. The AI system described above is in conformity with the requirements of Regulation (EU) 2024/1689:**

| Requirement | Article | Fulfilled |
|-------------|---------|:---------:|
| Risk management system | Art. 9 | [compliance.art_9_risk_management] |
| Data and data governance | Art. 10 | [compliance.art_10_data_governance] |
| Technical documentation | Art. 11 | [compliance.art_11_technical_documentation] |
| Record-keeping | Art. 12 | [compliance.art_12_record_keeping] |
| Transparency and provision of information to deployers | Art. 13 | [compliance.art_13_transparency] |
| Human oversight | Art. 14 | [compliance.art_14_human_oversight] |
| Accuracy, robustness and cybersecurity | Art. 15 | [compliance.art_15_accuracy_robustness] |
| Quality management system | Art. 17 | [compliance.art_17_qms] |

**6. Reference to applied harmonised standards / technical specifications:**

| Standard / Specification | Description |
|--------------------------|-------------|
| [harmonised_standards[].identifier] | [harmonised_standards[].description] |

**7. Member States in which the AI system has been placed on the market or put into service:**

[List of Member States or "EU-wide"]

**8. Conformity assessment procedure:**

| Field | Value |
|-------|-------|
| Procedure | [conformity_assessment.procedure] |
| Notified body | [conformity_assessment.notified_body or "Not applicable (Annex VI)"] |
| Certificate number | [conformity_assessment.certificate_id or "Not applicable"] |
| Date of assessment | [conformity_assessment.assessment_date] |

**9. Transparency and registration:**

| Field | Value |
|-------|-------|
| AI interaction disclosed | [transparency.ai_interaction_disclosed] |
| Deployer instructions for use | [transparency.deployer_instructions_provided] |
| EU database registration | [transparency.eu_database_registered] |
| Registration ID | [transparency.eu_database_id \|\| "Pending"] |

**10. Support period:**

| Field | Value |
|-------|-------|
| Support start | [support_period.start_date] |
| Support end | [support_period.end_date] |
| Post-market monitoring | [support_period.post_market_monitoring] |

---

**Signed for and on behalf of:**

[provider.name]

| Field | Value |
|-------|-------|
| Place | [Place] |
| Date | [conformity_assessment.declaration_date] |
| Name | [First and last name] |
| Position | [Position/Title] |
| Signature | _________________________ |

---

::: warning LEGAL BINDING EFFECT
This declaration of conformity is a legally binding document. By signing, the provider confirms the conformity of the AI system with the requirements of the AI Act. Non-compliance may result in penalties under Art. 99 (up to EUR 15 million / 3% of global annual turnover). False or misleading information to authorities is separately sanctioned (up to EUR 7.5 million / 1%).
:::

*This declaration shall be retained for 10 years after the AI system is placed on the market (Art. 47(2)).*
