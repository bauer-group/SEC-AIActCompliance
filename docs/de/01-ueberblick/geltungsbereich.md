# Geltungsbereich

## Was ist ein KI-System?

Art. 3 Abs. 1 AI Act definiert ein **KI-System** als:

> Ein maschinengestütztes System, das so konzipiert ist, dass es mit unterschiedlichem Grad an Autonomie arbeiten kann und das nach dem Einsatz Anpassungsfähigkeit zeigen kann, und das für explizite oder implizite Ziele aus den empfangenen Eingaben ableitet, wie Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen erzeugt werden, die physische oder virtuelle Umgebungen beeinflussen können.

### Abgrenzung: Was ist KEIN KI-System?

Folgende Software fällt **nicht** unter den AI Act:

- Regelbasierte Systeme ohne Lernkomponente (klassische If-Then-Logik)
- Einfache statistische Methoden (Regression, Mittelwertberechnung)
- Konventionelle Datenbanksysteme und Suchfunktionen
- Standard-Automatisierungssoftware (RPA ohne ML-Komponente)
- Rein mathematische Optimierungsalgorithmen

::: tip BAUER GROUP Praxisregel
Die Mehrheit unserer Software-Produkte (ERP-Module, Infrastruktur-Monitoring, SCADA-Anbindungen, Web-Applikationen) sind **keine KI-Systeme** im Sinne des AI Act. Nur Systeme mit ML/DL-Komponenten, LLM-Integration oder autonomer Entscheidungsfindung unterliegen der Verordnung.
:::

## Räumlicher Geltungsbereich

Der AI Act gilt für:

| Akteur | Sitz in EU | Sitz außerhalb EU |
|---|---|---|
| **Provider** (Anbieter) | ✅ Immer | ✅ Wenn System im EU-Markt platziert wird |
| **Deployer** (Betreiber) | ✅ Immer | ✅ Wenn Output in der EU verwendet wird |
| **Importeur** | ✅ Immer | — |
| **Distributor** | ✅ Immer | — |

## Ausnahmen

Der AI Act gilt **nicht** für:

- KI-Systeme ausschließlich für **militärische oder Verteidigungszwecke**
- KI-Systeme für **Forschung und Entwicklung** (vor Markteinführung)
- Privatpersonen, die KI für **rein persönliche, nicht-professionelle** Aktivitäten nutzen
- KI-Systeme aus **Drittstaaten**, deren Output nicht in der EU genutzt wird
- **Open-Source-KI** unter bestimmten Bedingungen (Art. 2 Abs. 12) — außer bei Hochrisiko oder verbotenen Praktiken

## BAUER GROUP Produkt-Screening

Für jedes BAUER GROUP Produkt ist zu prüfen:

1. **Enthält das Produkt eine KI-Komponente?** → Wenn nein: AI Act nicht anwendbar, Ende.
2. **Wird das Produkt im EU-Markt angeboten?** → Wenn nein: AI Act nicht anwendbar (außer Output-Nutzung in EU).
3. **Welche Risikostufe?** → Siehe [Risikoklassifizierung](/de/02-risikoklassifizierung/).
4. **Go/No-Go?** → Siehe [Entscheidungsrahmen](/de/01-ueberblick/go-no-go).
