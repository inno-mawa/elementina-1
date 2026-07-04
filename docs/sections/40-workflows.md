---
id: workflows
title: Abläufe
order: 40
status: current
last_updated: 2026-07-01
owner: @naim
linked_paths: src/App.jsx, src/data.js
summary: Die zentralen End-to-End-Abläufe — Anruf starten und Fragen stellen.
---

## Anruf starten (Selection → FaceTime)

Vom Antippen einer Persona bis zum verbundenen FaceTime-Screen, inklusive der
Sound-Übergänge.

```mermaid
sequenceDiagram
  participant U as Besucher:in
  participant App
  participant S as useUiSounds
  participant FT as FaceTimeScreen
  U->>App: tippt Persona an
  App->>S: ensureReady() + callStart()
  App->>App: screen = "calling"
  App->>S: startRinging()
  Note over App: setTimeout ≈2,2 s
  App->>App: screen = "facetime"
  App->>S: stopRinging() + connect()
  FT->>FT: Intro-Text laden, alle 6 Fragen zeigen
```

## Frage beantworten

Der Kern der Interaktion: Auswahl → (simulierte) Latenz → Antwort. Die sechs
Fragen stehen durchgehend zur Auswahl; es werden keine neuen freigeschaltet.

```mermaid
sequenceDiagram
  participant U as Besucher:in
  participant FT as FaceTimeScreen
  participant D as data.js
  participant T as useSpeech (TTS)
  U->>FT: tippt Frage-Kachel
  FT->>FT: loading = true (Tipp-Animation)
  FT->>D: getResponseForQuestion(persona, qId)
  Note over D: ≈720 ms Verzögerung
  D-->>FT: { answer }
  FT->>FT: Antwort anzeigen
  FT->>T: speak(answer)  // nur wenn Voice aktiv
```

## Auflegen

Der Auflegen-Button stoppt laufende Sprachausgabe (`stopSpeech`), spielt den
Hangup-Sound und setzt `screen` zurück auf `selection`; `persona` wird geleert.
Der Klingel-Timer wird über den Screen-Wechsel in `useUiSounds` gestoppt.
