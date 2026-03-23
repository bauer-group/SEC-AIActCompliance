# Deepfakes & synthetische Inhalte

## Anforderung

Provider von KI-Systemen, die synthetische Audio-, Bild-, Video- oder Textinhalte erzeugen, müssen sicherstellen, dass die Outputs in einem **maschinenlesbaren Format** als KI-generiert gekennzeichnet werden (Art. 50 Abs. 2).

Deployer, die Deepfakes veröffentlichen, müssen dies **klar und sichtbar offenlegen** (Art. 50 Abs. 4).

## BAUER GROUP Relevanz

Die BAUER GROUP erzeugt oder verbreitet **keine Deepfakes**. Folgende Szenarien sind jedoch zu beachten:

| Szenario | Pflicht |
|---|---|
| KI-generierte Marketing-Texte | Kennzeichnung bei Veröffentlichung empfohlen |
| KI-generierte Bilder für Präsentationen | Intern: keine Pflicht. Extern publiziert: maschinenlesbare Kennzeichnung |
| KI-generierter Code | Keine Kennzeichnungspflicht (kein „Inhalt" im Sinne des Art. 50) |
| KI-gestützte Übersetzungen | Empfehlung: Hinweis „maschinell übersetzt" |

## Technische Umsetzung

Für maschinenlesbare Kennzeichnung synthetischer Inhalte kommen in Betracht:

- **C2PA-Standard** (Coalition for Content Provenance and Authenticity) für Bilder/Video
- **IPTC-Metadaten** für Bilder
- **Custom HTTP-Header** oder Meta-Tags für Web-Inhalte

Die konkrete technische Umsetzung wird bei Bedarf spezifiziert, wenn BAUER-Produkte synthetische Inhalte für externe Veröffentlichung erzeugen.
