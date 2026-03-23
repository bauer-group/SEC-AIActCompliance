# Template: Risikoklassifizierungs-Formular

## KI-System-Identifikation

| Feld | Wert |
|---|---|
| System-ID | AI-BGI-XXXX |
| Name | |
| Version | |
| Datum der Klassifizierung | |
| Durchgeführt von | |

## Schritt 1: KI-System-Definition

Ist das System ein KI-System gem. Art. 3 Nr. 1?

- [ ] Ja → Weiter mit Schritt 2
- [ ] Nein → AI Act nicht anwendbar → **ENDE**

Begründung: ___

## Schritt 2: Verbotsprüfung (Art. 5)

Fällt das System unter einen der acht Verbotsgründe?

- [ ] Nein → Weiter mit Schritt 3
- [ ] Ja → **VERBOTEN** — Entwicklung einstellen

## Schritt 3: Hochrisiko-Prüfung (Art. 6)

### 3a: Annex I (Produktsicherheit)

Ist das System Sicherheitskomponente eines Annex-I-Produkts?

- [ ] Nein → Weiter mit 3b
- [ ] Ja → **HOCHRISIKO** → Weiter mit Schritt 4

### 3b: Annex III (Kategorien)

Fällt das System unter eine Annex-III-Kategorie?

- [ ] Nein → Weiter mit Schritt 3c
- [ ] Ja, Kategorie Nr.: ___ → Weiter mit 3d

### 3c: Transparenzpflichten (Art. 50)

Interagiert das System direkt mit natürlichen Personen oder erzeugt synthetische Inhalte?

- [ ] Nein → **MINIMALES RISIKO** → **ENDE**
- [ ] Ja → **BEGRENZTES RISIKO** → **ENDE**

### 3d: Profiling-Prüfung

Führt das System Profiling natürlicher Personen durch?

- [ ] Ja → **HOCHRISIKO (immer)** → Weiter mit Schritt 4
- [ ] Nein → Weiter mit 3e

### 3e: Ausnahme Art. 6 Abs. 3

Erfüllt das System ALLE drei Ausnahmekriterien?

- [ ] Ja → **NICHT-HOCHRISIKO** → Dokumentation + Registrierung → **ENDE**
- [ ] Nein → **HOCHRISIKO** → Weiter mit Schritt 4

## Schritt 4: Go/No-Go (nur bei Hochrisiko)

| Kriterium | Bewertung |
|---|---|
| Geschätzter 3J-Deckungsbeitrag EU | EUR ___ |
| Geschätzter Compliance-Aufwand | EUR ___ |
| Annex VI (Selbstbewertung) oder Annex VII (Drittstelle)? | |
| Compliance-Aufwand ≤ 15% des 3J-DB? | [ ] Ja / [ ] Nein |

**Entscheidung:** [ ] GO EU / [ ] NO-GO EU / [ ] Zurückgestellt

## Unterschrift

| | |
|---|---|
| Durchgeführt von | |
| Datum | |
| Freigegeben von | |
| Datum | |
