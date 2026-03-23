# Daten & Data Governance – Art. 10

## Anforderung

Trainings-, Validierungs- und Testdatensätze für Hochrisiko-KI-Systeme unterliegen spezifischen Anforderungen an Data Governance.

## Datenanforderungen

Datensätze müssen:

- **Relevant** sein für den bestimmungsgemäßen Zweck
- **Hinreichend repräsentativ** sein, insbesondere für betroffene Personengruppen
- **Soweit möglich fehlerfrei** und **vollständig** sein
- Geeignete **statistische Eigenschaften** aufweisen (auch bezüglich geografischer, verhaltensbezogener und funktionaler Aspekte)

## Data Governance Maßnahmen

Provider müssen dokumentieren:

- **Datenherkunft** und Erhebungsmethoden
- **Datenaufbereitungsprozesse** (Labeling, Bereinigung, Anreicherung)
- **Bias-Bewertung** und ergriffene Gegenmaßnahmen
- Maßnahmen zur Erkennung und Behebung von **Datenlücken und -mängeln**
- Datenschutzrechtliche Grundlage (DSGVO-Konformität)

## BAUER GROUP Umsetzung

| Szenario | Ansatz |
|---|---|
| BAUER trainiert eigene Modelle | Vollständige Data-Governance-Dokumentation erforderlich |
| BAUER nutzt Dritt-Modelle (API) | Dokumentation der Nutzungsbedingungen des Anbieters, Input/Output-Monitoring |
| BAUER finetuned Dritt-Modelle | Data Governance für Finetuning-Datensatz erforderlich |

::: warning Unverhältnismäßiger Aufwand
Wenn die Data-Governance-Anforderungen (insb. für Trainingsdaten-Dokumentation, Bias-Analyse, Repräsentativitätsnachweis) den Produktwert übersteigen → **No-Go EU**, Vertrieb nur in Drittmärkten.
:::
