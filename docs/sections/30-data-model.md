---
id: data-model
title: Datenmodell
order: 30
status: current
last_updated: 2026-07-05
owner: @naim
linked_paths: src/data.js, src/dialog-overview.json
summary: Form der In-App-Daten — Personas und ihre sechs frei wählbaren Fragen.
---

Es gibt keine Datenbank. „Daten" meint hier die statischen Strukturen in
`src/data.js`, die das Erlebnis steuern. `src/dialog-overview.json` ist eine
separate, redaktionelle Review-Sicht derselben Inhalte (kein Laufzeit-Import).

## Entitäten & Beziehungen

```mermaid
erDiagram
  PERSONA ||--|| DIALOG_FLOW : "hat"
  DIALOG_FLOW ||--o{ QUESTION : "enthält 6"
  PERSONA {
    string id
    string name
    string elementName
    string element
    string tagline
    string portrait
    string color
    string glow
  }
  DIALOG_FLOW {
    string introStatement
  }
  QUESTION {
    string id
    string eyebrow
    string label
    string answer
  }
```

## Felder im Detail

**`PERSONA`** (Array `PERSONAS`) — Stammdaten und Look eines Elements: `id`
(echter Elementname klein, z. B. `lithium` — dient als Schlüssel für die
Dialoge und weicht bewusst vom Anzeigenamen ab), `name` (personifizierter,
spielerischer Anzeigename, z. B. „Goldina" bzw. „Lithia" — Hauptname in
Kontaktliste und Call-Header), `elementName` (echter Elementname, z. B. „Gold"
bzw. „Lithium" — in der Identity-Card unter dem Avatar über der Tagline sichtbar,
damit klar wird, *welches* Element spricht), `element` (Symbol · Ordnungszahl,
z. B. „Au · 79"), `tagline`,
`portrait` (Kürzel im Avatar) sowie Farbwerte (`color`, `colorLight`, `glow`,
`ink`, `bg`), die als CSS-Custom-Properties in den Avatar und die
Screen-Hintergründe fließen.

**`DIALOG_FLOW`** (Objekt `DIALOG_FLOWS`, key = persona-`id`):
- `introStatement` — erster Text beim Start des Calls.
- `questions[id]` — Map der sechs Fragen der Persona (`q1…q6`).

**`QUESTION`** — `eyebrow` (Kategorie-Label über der Frage), `label` (Fragetext),
`answer` (Antworttext).

## Regeln & Hinweise

- **Flache Fragenliste, kein Fragebaum:** Alle sechs Fragen einer Persona stehen
  sofort zur Auswahl; es gibt kein Freischalten. Die Definitionsreihenfolge
  `q1…q6` ist zugleich die Anzeigereihenfolge (Herkunft → Abbau → Smartphone →
  Umwelt → Menschen → Danach). Siehe [ADR-005](#adrs).
- **Frage-IDs sind nur innerhalb einer Persona eindeutig** (alle nutzen
  `q1…q6`). IDs nie über Personas hinweg referenzieren.
- **Zugriff ausschließlich über die Helfer** in `data.js`
  (`getPersonaIntro`, `getQuestions`, `getQuestionById`,
  `getResponseForQuestion`) — nicht direkt auf `DIALOG_FLOWS` zugreifen.
- **`getResponseForQuestion` ist absichtlich asynchron** (≈720 ms Timeout), um
  Antwortlatenz zu simulieren und die Tipp-Animation zu zeigen. Das ist die
  Naht, an der später eine echte Datenquelle/LLM andocken kann.
- **Redaktionssicht synchron halten:** Ändern sich Fragen/Antworten, sollte
  `dialog-overview.json` mitgezogen werden (Review-Artefakt, kein Build-Input).
