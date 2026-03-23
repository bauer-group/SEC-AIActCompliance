# Klassifizierungsentscheidung

## Entscheidungsbaum

Für jedes identifizierte KI-System der BAUER GROUP:

```
1. Ist es ein KI-System gem. Art. 3 Nr. 1?
   │
   ├─ NEIN → AI Act nicht anwendbar → ENDE
   │
   └─ JA ↓

2. Fällt es unter Art. 5 (verbotene Praktiken)?
   │
   ├─ JA → VERBOTEN → Entwicklung einstellen
   │
   └─ NEIN ↓

3. Ist es Sicherheitskomponente eines Annex-I-Produkts
   UND bedarf einer Drittstellen-Konformitätsbewertung?
   │
   ├─ JA → HOCHRISIKO (Art. 6 Abs. 1) → Go/No-Go
   │
   └─ NEIN ↓

4. Fällt es unter eine Annex-III-Kategorie?
   │
   ├─ NEIN → Prüfe Art. 50 (Transparenzpflichten)
   │         │
   │         ├─ JA → BEGRENZTES RISIKO
   │         └─ NEIN → MINIMALES RISIKO → ENDE
   │
   └─ JA ↓

5. Führt es Profiling natürlicher Personen durch?
   │
   ├─ JA → HOCHRISIKO (immer) → Go/No-Go
   │
   └─ NEIN ↓

6. Greift die Ausnahme Art. 6 Abs. 3?
   (enger Aufgabenbereich, keine wesentliche
    Beeinflussung menschlicher Entscheidungen)
   │
   ├─ JA → NICHT-HOCHRISIKO
   │        → Dokumentation der Bewertung (Art. 6 Abs. 4)
   │        → Registrierung (Art. 49 Abs. 2)
   │
   └─ NEIN → HOCHRISIKO → Go/No-Go
```

## Praxisbeispiele BAUER GROUP

| System | KI-Komponente | Annex III? | Profiling? | Ergebnis |
|---|---|---|---|---|
| Handschrift-OCR (Zählerablesung) | YOLO + TrOCR | Nein | Nein | **Minimal** – keine Pflichten |
| Chatbot auf Kundenwebsite | LLM-Integration | Nein | Nein | **Begrenzt** – Kennzeichnung |
| KI-gestützte Personalvorauswahl | ML-Ranking | Ja (Nr. 4a) | Ja | **Hochrisiko** → Go/No-Go |
| Predictive Maintenance (IoT) | Anomalie-Erkennung | Prüfen (Nr. 2) | Nein | **Prüfung erforderlich** |
| Spam-Filter E-Mail | Klassifikation | Nein | Nein | **Minimal** – keine Pflichten |

## Dokumentation

Jede Klassifizierungsentscheidung wird im [Risikoklassifizierungs-Formular](/de/templates/risikoklassifizierung) festgehalten.
