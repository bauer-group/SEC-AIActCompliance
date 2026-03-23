# Menschliche Aufsicht – Art. 14

## Anforderung

Hochrisiko-KI-Systeme müssen so konzipiert sein, dass sie von natürlichen Personen **wirksam beaufsichtigt** werden können.

## Anforderungen an die Aufsicht

Personen, denen die Aufsicht übertragen wird, müssen in der Lage sein:

1. Die **relevanten Fähigkeiten und Grenzen** des Systems zu verstehen und dessen Betrieb ordnungsgemäß zu überwachen
2. Sich der möglichen Tendenz bewusst zu bleiben, sich automatisch auf den System-Output zu **verlassen (Automation Bias)**
3. Den **Output des Systems korrekt zu interpretieren**
4. Zu entscheiden, das System **nicht zu nutzen** oder den Output zu **ignorieren, überschreiben oder rückgängig** zu machen
5. Das System mit einem **Stopp-Mechanismus** sicher zu unterbrechen

## BAUER GROUP Umsetzung

| Maßnahme | Implementierung |
|---|---|
| Stopp-Mechanismus | Kill-Switch / Deaktivierung der KI-Komponente |
| Automation Bias Prävention | Warnhinweis in UI: „KI-generiertes Ergebnis — menschliche Überprüfung erforderlich" |
| Output-Transparenz | Konfidenzwerte anzeigen, Erklärbarkeit soweit technisch möglich |
| Schulung | Deployer-Schulung als Teil der Produktdokumentation |
