# Risikomanagement – Art. 9

## Anforderung

Provider von Hochrisiko-KI-Systemen müssen ein **Risikomanagementsystem** als kontinuierlichen iterativen Prozess über den gesamten Lebenszyklus implementieren.

## Pflichtbestandteile

Das Risikomanagementsystem muss:

1. **Bekannte und vorhersehbare Risiken** identifizieren und analysieren — bei bestimmungsgemäßem Einsatz und bei vorhersehbarem Missbrauch
2. **Risiken bewerten**, die bei bestimmungsgemäßer Nutzung und bei vorhersehbarem Missbrauch entstehen können
3. **Geeignete Risikominderungsmaßnahmen** entwickeln und umsetzen
4. **Restrisiken** bewerten und dokumentieren — unter Berücksichtigung der Risikominderungsmaßnahmen
5. **Testen** — vor Markteinführung und während des Lebenszyklus, um sicherzustellen, dass das System wie vorgesehen funktioniert

## Testanforderungen

- Tests gegen **vorab definierte Metriken und Schwellenwerte**
- Berücksichtigung des **bestimmungsgemäßen Zwecks**
- Testing auf **Verzerrungen (Bias)** in Bezug auf betroffene Personengruppen
- Unabhängig vom Datenformat: strukturiert, unstrukturiert, gemischt

## BAUER GROUP Umsetzung (Minimaler Ansatz)

| Maßnahme | Umsetzung |
|---|---|
| Risikoidentifikation | Erweiterung des bestehenden CRA-Risikobewertungsformulars um KI-spezifische Risikokategorien |
| Risikobewertung | Einfache Risikomatrix (Eintrittswahrscheinlichkeit × Auswirkung) |
| Risikominderung | Dokumentation der gewählten Maßnahmen im CRA-Risikobewertungsbogen |
| Testing | Integration in bestehende CI/CD-Pipeline (ML-Modell-Metriken als Quality Gate) |
| Dokumentation | Template-basiert, produktspezifisch |

::: tip Synergien mit CRA
Das CRA-Schwachstellenmanagement deckt bereits Cybersicherheitsrisiken ab. Das AI-Act-Risikomanagement ergänzt um KI-spezifische Risiken (Bias, Halluzination, Erklärbarkeit, Robustheit).
:::
