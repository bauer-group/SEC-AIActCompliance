# EU-Konformitätserklärung – Art. 47

## Anforderung

Provider von Hochrisiko-KI-Systemen müssen eine **EU-Konformitätserklärung** gemäß **Annex V** ausstellen, die bestätigt, dass das System die Anforderungen des AI Act erfüllt.

## Inhalt (Annex V)

Die Erklärung muss mindestens enthalten:

- Name und Anschrift des Providers
- Eindeutige Identifikation des KI-Systems (Name, Typ, Seriennummer/Version)
- Erklärung, dass das System den Anforderungen des AI Act entspricht
- Verweis auf angewandte harmonisierte Normen oder andere technische Spezifikationen
- Ggf. Name und Kennnummer der benannten Stelle (bei Annex VII)
- Datum und Unterschrift

## Single Source of Truth

Die EU-Konformitätserklärung wird aus der maschinenlesbaren Datei `.compliance/ai-act-statement.json` generiert. Damit ist sichergestellt, dass:

- **Eine Quelle** — JSON ist der einzige Ort, an dem Compliance-Daten gepflegt werden
- **Konsistenz** — Menschenlesbare DoC, CE-Kennzeichnung und EU-Datenbank-Registrierung nutzen dieselben Daten
- **Automatisierung** — Validierung und Generierung in der CI/CD-Pipeline

Siehe: [Maschinenlesbares Format](/de/08-konformitaet/maschinenlesbar)

## Aufbewahrung

Die EU-Konformitätserklärung muss **10 Jahre** nach Markteinführung aufbewahrt und auf Anfrage den zuständigen Behörden vorgelegt werden.

## Template

Siehe: [EU-Konformitätserklärung Template](/de/templates/konformitaetserklaerung)
