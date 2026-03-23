# Template: EU-Konformitätserklärung (Art. 47)

::: tip SINGLE SOURCE OF TRUTH
Diese Erklärung wird aus der maschinenlesbaren Datei `.compliance/ai-act-statement.json` generiert. Änderungen immer in der JSON-Datei vornehmen — die menschenlesbare Version wird daraus abgeleitet. Siehe: [Maschinenlesbares Format](/de/conformity/machine-readable)
:::

---

## EU-KONFORMITÄTSERKLÄRUNG

### Nr. [DoC-YYYY-NNN]

### Verordnung (EU) 2024/1689 — Artificial Intelligence Act

---

**1. KI-System:**

| Feld | Wert |
|------|------|
| Bezeichnung | [ai_system.name] |
| Handelsname / Marke | [ai_system.trade_name oder „Entfällt"] |
| Typ | [ai_system.type] |
| Version | [ai_system.version] |
| Modell / Variante | [ai_system.model oder „Entfällt"] |
| Chargen- / Seriennummer | [ai_system.serial_number oder „Entfällt"] |
| System-ID | [ai_system.identifier] |
| Bestimmungsgemäße Verwendung | [ai_system.intended_purpose] |

**2. Name und Anschrift des Providers und gegebenenfalls seines Bevollmächtigten:**

| Feld | Wert |
|------|------|
| Unternehmen | [provider.name] |
| Anschrift | [provider.address] |
| E-Mail | [provider.contact_email] |
| Webseite | [provider.website] |
| **Bevollmächtigter** (falls zutreffend) | [provider.authorised_representative oder „Entfällt"] |

**3. Diese Konformitätserklärung wird in alleiniger Verantwortung des Providers ausgestellt.**

**4. Risikoklassifizierung:**

| Feld | Wert |
|------|------|
| Risikostufe | [risk_classification.risk_level] |
| Annex-III-Kategorie | [risk_classification.annex_iii_category oder „Entfällt"] |
| Annex-I-Produkt | [risk_classification.annex_i_product oder „Entfällt"] |
| Begründung | [risk_classification.classification_rationale] |

**5. Das oben beschriebene KI-System erfüllt die Anforderungen der Verordnung (EU) 2024/1689:**

| Anforderung | Artikel | Erfüllt |
|-------------|---------|:-------:|
| Risikomanagementsystem | Art. 9 | [compliance.art_9_risk_management] |
| Daten und Data Governance | Art. 10 | [compliance.art_10_data_governance] |
| Technische Dokumentation | Art. 11 | [compliance.art_11_technical_documentation] |
| Protokollierung | Art. 12 | [compliance.art_12_record_keeping] |
| Transparenz und Information für Deployer | Art. 13 | [compliance.art_13_transparency] |
| Menschliche Aufsicht | Art. 14 | [compliance.art_14_human_oversight] |
| Genauigkeit, Robustheit und Cybersicherheit | Art. 15 | [compliance.art_15_accuracy_robustness] |
| Qualitätsmanagementsystem | Art. 17 | [compliance.art_17_qms] |

**6. Verweis auf angewandte harmonisierte Normen / technische Spezifikationen:**

| Norm / Spezifikation | Beschreibung |
|----------------------|--------------|
| [harmonised_standards.identifier] | [harmonised_standards.description] |

**7. Mitgliedstaaten, in denen das KI-System in Verkehr gebracht oder in Betrieb genommen wurde:**

[Auflistung der Mitgliedstaaten oder „EU-weit"]

**8. Konformitätsbewertungsverfahren:**

| Feld | Wert |
|------|------|
| Verfahren | [conformity_assessment.procedure] |
| Notified Body | [conformity_assessment.notified_body oder „Entfällt (Annex VI)"] |
| Zertifikatsnummer | [conformity_assessment.certificate_id oder „Entfällt"] |
| Datum der Bewertung | [conformity_assessment.assessment_date] |

**9. Transparenz und Registrierung:**

| Feld | Wert |
|------|------|
| KI-Interaktion offengelegt | [transparency.ai_interaction_disclosed] |
| Deployer-Gebrauchsanweisung | [transparency.deployer_instructions_provided] |
| EU-Datenbank-Registrierung | [transparency.eu_database_registered] |
| Registrierungs-ID | [transparency.eu_database_id oder „Ausstehend"] |

**10. Support-Zeitraum:**

| Feld | Wert |
|------|------|
| Support-Beginn | [support_period.start_date] |
| Support-Ende | [support_period.end_date] |
| Post-Market-Monitoring | [support_period.post_market_monitoring] |

---

**Unterzeichnet für und im Namen von:**

[provider.name]

| Feld | Wert |
|------|------|
| Ort | [Ort] |
| Datum | [conformity_assessment.declaration_date] |
| Name | [Vor- und Nachname] |
| Funktion | [Funktion/Titel] |
| Unterschrift | _________________________ |

---

::: warning RECHTSVERBINDLICHKEIT
Diese Konformitätserklärung ist ein rechtsverbindliches Dokument. Durch die Unterzeichnung bestätigt der Provider die Konformität des KI-Systems mit den Anforderungen des AI Act. Nichtkonformität kann zu Sanktionen gemäß Art. 99 führen (bis zu 15 Mio. EUR / 3% des weltweiten Jahresumsatzes). Falsche oder irreführende Angaben an Behörden werden gesondert sanktioniert (bis zu 7,5 Mio. EUR / 1%).
:::

*Diese Erklärung wird 10 Jahre nach Markteinführung des KI-Systems aufbewahrt (Art. 47 Abs. 2).*
