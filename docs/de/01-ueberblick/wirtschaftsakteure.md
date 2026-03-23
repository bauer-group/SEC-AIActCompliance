# Wirtschaftsakteure & Rollen

## Rollen im AI Act

Der AI Act unterscheidet verschiedene Rollen in der KI-Wertschöpfungskette, analog zum CRA-Modell der Wirtschaftsakteure:

### Provider (Anbieter) — Art. 3 Nr. 3

Natürliche oder juristische Person, die ein KI-System **entwickelt** oder entwickeln lässt und es unter eigenem Namen oder Marke in Verkehr bringt oder in Betrieb nimmt.

**Pflichten (Kurzform):**

- Konformitätsbewertung vor Markteinführung
- Technische Dokumentation + QMS
- CE-Kennzeichnung + EU-Konformitätserklärung
- Registrierung in EU-Datenbank
- Post-Market-Monitoring
- Korrekturmaßnahmen und Meldepflichten

### Deployer (Betreiber) — Art. 3 Nr. 4

Natürliche oder juristische Person, die ein KI-System **in professioneller Eigenschaft** einsetzt (nicht der Endverbraucher).

**Pflichten (Kurzform):**

- Bestimmungsgemäßer Einsatz gemäß Anbieteranweisungen
- Menschliche Aufsicht sicherstellen
- Input-Datenqualität gewährleisten
- Logs aufbewahren (mind. 6 Monate)
- Risiken und Incidents an Anbieter melden
- Arbeitnehmer über KI-Einsatz informieren (bei Hochrisiko)

### Importeur — Art. 23

Bringt KI-Systeme von Drittstaaten-Anbietern im EU-Markt in Verkehr. Muss sicherstellen, dass der Anbieter die Konformitätsbewertung durchgeführt hat.

### Distributor — Art. 24

Macht KI-Systeme auf dem EU-Markt verfügbar, ohne Provider oder Importeur zu sein. Sorgfaltspflichten hinsichtlich Konformität.

## BAUER GROUP Rollenzuordnung

| Szenario | Rolle | Pflichtenkatalog |
|---|---|---|
| BAUER GROUP entwickelt eigenes KI-System für Kunden | **Provider** | Vollständig (Art. 16–21) |
| BAUER GROUP integriert Dritt-KI (z.B. OpenAI, Claude) in eigenes Produkt | **Provider** (Art. 25) | Vollständig — wer KI unter eigenem Namen vertreibt, übernimmt Provider-Pflichten |
| BAUER GROUP nutzt KI-Tools intern (z.B. Claude, GitHub Copilot) | **Deployer** | Reduziert (Art. 26) |
| BAUER GROUP vertreibt KI-System eines Partners | **Distributor** | Sorgfaltspflichten (Art. 24) |

::: warning Wichtig: Art. 25 – Verantwortungsverlagerung
Wer ein KI-System **unter eigenem Namen** in Verkehr bringt, wird zum Provider — auch wenn man das System nicht selbst entwickelt hat. Das gilt auch für **wesentliche Änderungen** an einem bestehenden System oder die Zweckänderung eines Hochrisiko-Systems.
:::

## Bevollmächtigte Vertreter (Art. 22)

Drittstaaten-Provider müssen vor Markteinführung einen **Bevollmächtigten in der EU** benennen. Für die BAUER GROUP (Sitz in Deutschland) entfällt diese Pflicht bei Eigenentwicklungen.
