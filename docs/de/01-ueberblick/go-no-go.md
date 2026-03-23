# Go/No-Go Entscheidungsrahmen

## Prinzip

Jedes KI-System der BAUER GROUP durchläuft vor EU-Markteinführung eine **Aufwand-Nutzen-Bewertung**. Der AI Act sieht zwar keine solche Bewertung vor, aber als Unternehmen entscheiden wir autonom, welche Produkte wir wo vertreiben.

::: danger Kernregel
**Unverhältnismäßiger regulatorischer Aufwand = kein EU-Vertrieb.** Wir sind nicht verpflichtet, jedes Produkt in der EU anzubieten. Wenn die EU Innovation durch Regulierung verteuert, vertreiben wir das Produkt in Märkten ohne diese Einschränkungen.
:::

## Entscheidungsmatrix

```
┌─────────────────────────────────────────────┐
│ Enthält das Produkt eine KI-Komponente?     │
│                                             │
│   NEIN → AI Act nicht anwendbar → GO        │
│   JA   ↓                                   │
├─────────────────────────────────────────────┤
│ Fällt das System unter Art. 5 (verboten)?   │
│                                             │
│   JA   → Produkt nicht entwickeln → STOP    │
│   NEIN ↓                                   │
├─────────────────────────────────────────────┤
│ Risikoklassifizierung (Art. 6, Annex III)   │
│                                             │
│   MINIMAL → GO (keine Pflichten)            │
│   BEGRENZT → GO (nur Transparenzpflichten)  │
│   HOCH ↓                                   │
├─────────────────────────────────────────────┤
│ Aufwand-Nutzen-Bewertung Hochrisiko         │
│                                             │
│   Compliance-Aufwand ≤ 15% des              │
│   3J-Deckungsbeitrags → GO                  │
│                                             │
│   Compliance-Aufwand > 15% des              │
│   3J-Deckungsbeitrags → NO-GO EU            │
│   → Prüfung Drittmarkt-Vertrieb            │
└─────────────────────────────────────────────┘
```

## Compliance-Aufwand Hochrisiko (geschätzt)

| Posten | Einmalig | Jährlich |
|---|---|---|
| Risikomanagementsystem (Art. 9) | 40–80h | 20–40h |
| Data Governance Dokumentation (Art. 10) | 60–120h | 10–20h |
| Technische Dokumentation (Art. 11, Annex IV) | 80–160h | 20–40h |
| QMS-Aufbau und -Nachweis (Art. 17) | 40–80h | 20–40h |
| Konformitätsbewertung (Art. 43) | 40–80h | 10–20h |
| EU-Datenbank-Registrierung (Art. 49) | 8–16h | 4–8h |
| Post-Market-Monitoring | — | 20–40h |
| **Summe Hochrisiko** | **268–536h** | **104–208h** |

Bei einem internen Stundensatz von 120 EUR bedeutet das **32.160–64.320 EUR einmalig** plus **12.480–24.960 EUR/Jahr** — ohne externe Beratung, ohne Notified-Body-Kosten.

## Schwellwert-Kalkulation

Beispiel: Produkt mit KI-Komponente, erwarteter 3-Jahres-Deckungsbeitrag 200.000 EUR.

- 15%-Schwelle: 30.000 EUR
- Geschätzter Compliance-Aufwand (Minimum): ~57.000 EUR (3 Jahre)
- **Ergebnis: NO-GO EU** — Vertrieb nur in Drittmärkten

## Alternativen bei NO-GO EU

1. **KI-Komponente entfernen** — regelbasierte Alternative implementieren
2. **Drittmarkt-Vertrieb** — APAC, MENA, Lateinamerika
3. **KI-Komponente als Optional Feature** — EU-Version ohne KI, Vollversion für Drittmärkte
4. **Warten auf Vereinfachung** — Digital Omnibus / delegierte Rechtsakte abwarten

## Dokumentationspflicht

Jede Go/No-Go-Entscheidung wird im [Entscheidungsprotokoll-Template](/de/templates/go-no-go) dokumentiert und archiviert.
