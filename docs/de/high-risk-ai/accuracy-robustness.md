# Genauigkeit, Robustheit, Cybersicherheit – Art. 15

## Anforderung

Hochrisiko-KI-Systeme müssen ein **angemessenes Maß an Genauigkeit, Robustheit und Cybersicherheit** aufweisen.

## Genauigkeit

- Genauigkeitsgrade müssen in den **Gebrauchsanweisungen deklariert** werden
- Geeignete **Metriken** für den jeweiligen Verwendungszweck definieren und messen
- Genauigkeitslevel müssen für den bestimmungsgemäßen Zweck **angemessen** sein

## Robustheit

- Widerstandsfähigkeit gegen **Fehler, Störungen und Inkonsistenzen** in der Betriebsumgebung
- Technische Redundanz (Backup-Systeme, Fail-Safe-Mechanismen)
- Robustheit gegen **adversariale Angriffe** (Adversarial ML)

## Cybersicherheit

- Schutz gegen unbefugten Zugriff und Manipulation
- **Model Poisoning**, **Data Poisoning** und **Adversarial Examples** adressieren
- Maßnahmen zum Schutz der **Vertraulichkeit, Integrität und Verfügbarkeit**

::: tip CRA-Synergien
Die Cybersicherheitsanforderungen des Art. 15 überschneiden sich erheblich mit den CRA-Anforderungen (Annex I Teil II). Die bestehende CRA-Sicherheitsarchitektur und das Schwachstellenmanagement decken den Großteil dieser Anforderungen bereits ab. Ergänzend sind KI-spezifische Bedrohungen (Adversarial ML, Prompt Injection, Model Extraction) zu adressieren.
:::

## BAUER GROUP Umsetzung

| Art. 15 Anforderung | CRA-Abdeckung | AI-Act-Ergänzung |
|---|---|---|
| Cybersicherheit | ✅ CRA Art. 10–14 | + Adversarial ML, Prompt Injection |
| Genauigkeit | ❌ Nicht im CRA | Modell-Metriken in CI/CD + Doku |
| Robustheit | Teilweise (CRA Annex I) | + ML-spezifische Stresstests |
