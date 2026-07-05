---
id: changelog
title: Changelog
order: 90
status: current
last_updated: 2026-07-05
owner: @naim
linked_paths: 
summary: Laufendes Protokoll der Doku-Updates, neueste zuerst.
---

Ein Eintrag pro Doku-Update, neueste zuerst: Datum, betroffene Sektionen und
eine Zeile, was sich warum geändert hat. Das ist der Audit-Trail, der die Doku
ehrlich hält.

## 2026-07-05

- **Tab-Bar-Ausblendung browserübergreifend gefixt:** Der `mask-image`-Verlauf
  ließ den Inhalt in Firefox unter der Leiste hervorschauen (Firefox positioniert
  die Maske relativ zum gescrollten Inhalt, nicht zum sichtbaren Rahmen). Ersetzt
  durch einen Verlaufs-Scrim (`.selection-screen::after`) in Hintergrundfarbe, der
  den Leistenbereich abdeckt — verhält sich in allen Browsern gleich.
- **Rahmen-Proportion gekoppelt (kein Stauchen mehr):** Breite und Höhe des
  Device-Frames wurden bisher unabhängig gedeckelt, wodurch der Rahmen bei
  niedrigen/breiten Fenstern unförmig gestaucht wurde. Jetzt über
  `aspect-ratio: 26/49` fest gekoppelt: max. 520px (bzw. 760px auf großen
  Displays) wie zuvor, aber bei knapper Höhe schrumpft er proportionstreu weiter.
  Verifiziert 1920×1080 → 520×980, 1080×1920 → 760×1432, 1200×640 → 319×602
  (Ratio konstant 0,531).
- **Inhalt verschwindet sauber in der Tab-Bar:** Der Ausblend-Verlauf liegt jetzt
  exakt zwischen Ober- und Unterkante der Leiste (`--bar-h`/`--bar-b`), sodass
  der Inhalt nicht mehr unter der schwebenden Leiste hervorschaut.
- **„Über"-Seite entschlackt:** Der Unterzeilen-Hinweis „Tippe auf ein Element …"
  erscheint nur noch im `Anruf`-Tab, nicht auf `Über`.
- **Weißer Reload-Flash entfernt:** Inline-`<style>` in `index.html` setzt den
  dunklen Hintergrund (`#030305`) sofort, bevor das CSS-Bundle lädt.
- **Tab-Bar-Clipping behoben:** Der Auswahl-Inhalt wurde an der Grid-Zeilenkante
  zur Tabbar hart abgeschnitten und ragte neben der schmaleren Pillen-Leiste
  hervor. Die Tabbar schwebt jetzt absolut über der voll-hohen Scrollfläche;
  der Inhalt scrollt hinter ihr durch und blendet über einen unteren
  `mask-image`-Verlauf weich aus. Verifiziert bei 390×844 und gerahmt 1280×800.
  Aktualisiert: **UI-Design**.

## 2026-07-04

- **Spielerische Namen + Materialname wiederhergestellt:** Beim 12-Elemente-Merge
  hatten 10 der 12 Personas den echten Elementnamen als `name` bekommen und das
  Feld `elementName` verloren — dadurch zeigte die Identity-Card `undefined` und
  die „coolen" Namen fehlten (nur Goldina/Kobaltin blieben). Jetzt trägt `name`
  wieder den spielerischen Namen (Lithia, Indira, Gallia, Silico, Zinnia, Neodya,
  Dysra, Alumina, Nickelix, Kupfero), `elementName` den echten Materialnamen
  (Lithium, Indium …); die Intro-Sätze („Ich bin …") wurden an den spielerischen
  Namen angeglichen. Die `id` bleibt der echte Elementname (klein) als Schlüssel
  für die Dialoge. Aktualisiert: **Datenmodell**.
- **Umlaute im „Über"-Panel korrigiert:** ae/oe/ue → ä/ö/ü (Materialität,
  verständlich, für, Schuldgefühle, Universität, führt, mögliche, spätere,
  zugänglich) in `src/App.jsx`.

## 2026-07-01

- **Avatar wird nicht mehr abgeschnitten:** Die Avatar-Stage ist jetzt ein
  Size-Container; der Hero-Avatar deckelt seine Größe auf `72cqh`/`96cqw`
  (`min(clamp(120px,30vh,330px), 72cqh, 96cqw)`) und skaliert damit zur real
  verfügbaren Stage-Höhe statt zum Viewport. Verhindert Clipping durch das
  `overflow: hidden` der Stage, wenn der 6-Fragen-Dock die Höhe verknappt.
  Verifiziert von 375×812 bis 900×1600. Aktualisiert: **UI-Design**.
- **Fragebaum entfernt — flache 6-Fragen-Liste:** In `src/data.js` entfielen
  `initialQuestionIds` und alle `unlocks`; `getInitialQuestions`/
  `getVisibleQuestions` wurden zu `getQuestions` zusammengefasst. `App.jsx` zeigt
  jetzt alle sechs Fragen sofort (Zustand `visibleQuestionIds` und Unlock-Merge
  entfernt). Grund: An einem Touchscreen-Exponat sollen alle Fragen auf einen
  Blick wählbar sein. Neue **ADR-005** löst **ADR-002** ab; aktualisiert:
  **Datenmodell**, **Abläufe**, **Anforderungen** (FR-04), **Architektur**,
  **Überblick**, **UI-Design**.

## 2026-06-24

- **Echter Elementname im Anruf:** Neues Persona-Feld `elementName` (Gold,
  Kobalt, Lithium … für alle 12 Personas). Er erscheint in der Identity-Card
  unter dem Avatar als `elementName · element` (z. B. „Gold · Au · 79") über der
  Tagline, damit Besucher:innen sehen, *welches* echte Element spricht. Der
  Call-Header oben links bleibt bewusst nur der personifizierte Name (keine
  Doppelung). Zusätzlich mehr Abstand zwischen Verbindungs-Status und der
  Kamera-PiP. **Datenmodell** (Feldliste) und **UI-Design** (FaceTimeScreen)
  entsprechend aktualisiert.
- **Responsiveness fürs Handy-Querformat / sehr flache Screens gefixt:** Im
  FaceTime-Screen lief bei `max-height ≤ 560px` (z. B. 740×360) der Inhalt aus
  dem Rahmen — Antwort abgeschnitten, untere Fragen und **Auflegen-Button
  unerreichbar**. Neuer `max-height: 560px`-Breakpoint blendet den dekorativen
  Avatar aus, reduziert die Grid-Zeilen auf `auto auto minmax(0,1fr)` (Dock
  bekommt den Rest) und lässt das Fragen-Grid darin scrollen statt das
  Antwort-Panel zu überlappen; der Auswahl-Header wird kompakt, damit im
  Querformat sofort eine Karte sichtbar ist. **UI-Design**-Sektion neu gefasst
  und an die *tatsächliche* CSS-Realität angeglichen (Self-View blendet ab 720px
  aus, nicht 900px; das früher dokumentierte Zwei-Spalten-Querformat existierte
  nicht). Verifiziert per Browser-Preview über 320×568 bis 1080×1920.

## 2026-06-17

- **Überlappungen behoben + längere Antworten:** Identity-Card in eigene
  Grid-Zeile gezogen (kein Clipping mehr), Self-View-PiP nur noch ab 900px Höhe
  (kollidierte sonst mit Identity-Card/Header). Antwort-Panel auf 40dvh
  vergrößert. Alle Antworttexte deutlich ausführlicher (besonders Kobaltin);
  `dialog-overview.json` synchron gehalten. **UI-Design**-Sektion entsprechend
  aktualisiert.
- Dokumentation mit KeystoneDoc initialisiert (alle Sektionen aus dem
  bestehenden Prototyp und der `repro-dokumentation.md` befüllt).
- **Architekturentscheidungen** um **ADR-004** ergänzt: fluides,
  gerätegnostisches Layout (Mobil-Vollbild, Safe-Areas, eingegrenztes Scrollen)
  statt Fix-auf-1920×1080.
- **UI-Design** und **Anforderungen** (TR-03) um das responsive Verhalten
  erweitert.
