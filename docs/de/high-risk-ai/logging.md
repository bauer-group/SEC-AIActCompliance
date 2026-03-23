# Protokollierung – Art. 12

## Anforderung

Hochrisiko-KI-Systeme müssen technisch so konzipiert sein, dass **Ereignisse automatisch protokolliert** werden (Logging).

## Mindestanforderungen

Die automatische Protokollierung muss umfassen:

- **Nutzungszeiträume** (Start/Ende jeder Nutzung)
- **Referenzdatenbank** gegen die Input-Daten geprüft werden
- **Input-Daten**, die zu einer Suche geführt haben
- **Identifikation** der an der menschlichen Aufsicht beteiligten Personen

## Aufbewahrungsfristen

- Provider: Logs aufbewahren, **soweit unter ihrer Kontrolle**
- Deployer: Logs **mindestens 6 Monate** aufbewahren (Art. 26 Abs. 6)

## BAUER GROUP Umsetzung

| Maßnahme | Implementierung |
|---|---|
| Automatische Logs | Structured Logging (JSON) in bestehender Logging-Infrastruktur |
| Aufbewahrung | Retention Policy ≥ 6 Monate (bereits durch CRA-Anforderungen abgedeckt) |
| Zugriff | Logs auf Anfrage für Behörden bereitstellbar |

::: tip Minimaler Aufwand
Wenn das System bereits über Structured Logging verfügt (was bei BAUER GROUP Produkten Standard ist), beschränkt sich der Mehraufwand auf die Sicherstellung, dass die AI-Act-spezifischen Felder enthalten sind.
:::
