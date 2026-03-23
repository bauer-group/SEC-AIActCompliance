# Annex I – EU-Harmonisierungsrecht

## Überblick

Annex I listet die EU-Harmonisierungsrechtsakte, bei denen KI-Systeme als **Sicherheitskomponenten** des regulierten Produkts gelten können (Art. 6 Abs. 1).

## Sektion A – Relevante Rechtsakte (Auswahl)

| Rechtsakt | Typische Produkte | BAUER GROUP Relevanz |
|---|---|---|
| Maschinenverordnung (EU) 2023/1230 | Industriemaschinen, Roboter | ⚠️ Embedded AI in Robotik |
| Medizinprodukte-VO (EU) 2017/745 | Medizinprodukte mit KI | ❌ Nicht im Portfolio |
| Aufzugsrichtlinie 2014/33/EU | Aufzüge mit KI-Steuerung | ❌ Nicht im Portfolio |
| Funkanlagen-RL 2014/53/EU | IoT-Geräte mit KI | ⚠️ IoT-Produkte prüfen |
| Niederspannungs-RL 2014/35/EU | Elektrische Geräte | ❌ Nicht relevant |
| Spielzeug-RL 2009/48/EG | KI-Spielzeug | ❌ Nicht im Portfolio |
| Seilbahn-VO (EU) 2016/424 | Seilbahnen | ❌ Nicht relevant |

## Sektion B – Weitere Rechtsakte

Sektion B umfasst zusätzliche Rechtsakte (Zivilluftfahrt, Fahrzeugsicherheit, etc.), bei denen die Hochrisiko-Einstufung erst ab **2. August 2027** greift.

## BAUER GROUP Bewertung

Für die BAUER GROUP sind aus Annex I primär relevant:

1. **Maschinenverordnung** — nur wenn BAUER GROUP autonome Robotik-Systeme mit KI-Steuerung unter eigenem Namen vertreibt
2. **Funkanlagen-RL** — nur wenn IoT-Geräte (ESP32 etc.) eine KI-Entscheidungskomponente enthalten, die sicherheitsrelevant ist

::: tip Praxisregel
Unsere IoT-/Embedded-Produkte verwenden typischerweise deterministische Firmware. KI-Komponenten (z.B. Edge ML für Anomalie-Erkennung) sind nicht sicherheitsrelevant im Sinne des Annex I. Einzelfallprüfung bei neuen Produkten erforderlich.
:::
