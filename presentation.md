### **Agenda: Zweitägige React-Intensivschulung**

**Ziel:** Der Teilnehmer versteht die grundlegenden Konzepte von modernem JavaScript, TypeScript und React und ist in der Lage, eine einfache, interaktive Single-Page-Anwendung (SPA) zu erstellen.

**Voraussetzungen:** Grundlegende Kenntnisse in HTML und CSS. Keine Vorkenntnisse in JavaScript, TypeScript oder Frontend-Frameworks notwendig.

**Didaktischer Ansatz:** Theorie-Input gefolgt von praktischen, gemeinsamen Coding-Beispielen. Der Fokus liegt auf Verständnis und "Hands-on"-Erfahrung.

### **Tag 1: Die Grundlagen – Von JavaScript zu React-Komponenten**

**Block 1: Einführung & Kontext (09:00 - 10:00)**
*   **(15 min) Begrüßung & Vorstellung**
    *   Vorstellung des Trainers (Dein Hintergrund, Erfahrung mit React).
    *   Vorstellung des Teilnehmers (Erwartungen, Vorkenntnisse abklären).
    *   Ziel und Ablauf der zwei Tage.
*   **(45 min) Das "Warum" hinter React: Vom Server-Side Rendering zur SPA**
    *   **Problem:** Monolithische Anwendungen (Backend rendert HTML) – langsam, umständlich für interaktive UIs.
    *   **Lösung:** Trennung von Frontend und Backend (API).
    *   **Konzept:** Single-Page Applications (SPA) vs. Multi-Page Applications (MPA).
    *   **Vorteile:** Flüssigere User Experience, Wiederverwendbarkeit (Frontend/Backend), Skalierbarkeit.
    *   **Nachteile:** SEO, initiale Ladezeit, Komplexität im Frontend.
    *   **Die Landkarte der Frameworks: Alternativen zu React**
        *   **Vue.js:** Progressive und zugängliche Alternative, oft als "einfacher" empfunden. Starke Templating-Syntax.
        *   **Angular:** "All-in-One"-Framework von Google. Sehr mächtig und strukturiert, aber mit einer steileren Lernkurve.
        *   **Svelte:** Kompiliert sich zur perfekten Vanilla-JS, kein virtuelles DOM. Sehr elegantes Entwicklererlebnis.
    *   **Warum ist React so beliebt?**
        1.  **Einfache Kernkonzepte:** "Nur JavaScript" zu lernen. Komponenten, Props und State sind intuitiv zu verstehen.
        2.  **Flexibilität & Freiheit:** React ist eine Bibliothek für die UI, kein vollständiges Framework. Man kann sein eigenes State-Management, Routing etc. wählen („Ökosystem der Wahl“).
        3.  **Starke Community & Jobmarkt:** Größte Community, enorm viele Pakete, Lösungen und Ressourcen. Sehr hohe Nachfrage auf dem Arbeitsmarkt.
        4.  **Backing durch Meta (Facebook):** Wird in großen, produktiven Anwendungen (Facebook, Instagram, WhatsApp Web) eingesetzt, was Langzeitunterstützung garantiert.
        5.  **"Learn once, write anywhere":** Das Konzept der Komponenten ermöglicht Wiederverwendung über Web, Mobile (React Native) und Desktop (Electron).
    *   **Fazit:** React ist ein Werkzeug, um SPAs effizient zu bauen. Seine Flexibilität und die massive Community haben es zum De-facto-Standard für viele Unternehmen gemacht.

**⏸️ Kurze Pause (10:00 - 10:15)**

**Block 2: JavaScript & TypeScript Crashkurs (10:15 - 12:00)**
*   *(Hinweis: Dieser Block ist zügig und anwendungsbezogen. Der Fokus liegt auf dem, was für React absolut notwendig ist.)*
*   **Modern JavaScript Essentials:**
    *   `let` & `const` (kein `var`)
    *   Arrow Functions (`() => {}`)
    *   Template Literals (`` `Hallo ${name}` ``)
    *   Destructuring (Objekte und Arrays)
    *   Modul-System (`import`/`export`)
*   **Die wichtigsten Konzepte für React:**
    *   **Arrays & Objekte:** Wie man Daten strukturiert.
    *   **Array-Methoden:** `.map()`, `.filter()` – **absolut kritisch für JSX!**
*   **TypeScript für mehr Sicherheit:**
    *   Was ist TypeScript und warum nutzt man es?
    *   Grundlegende Typen: `string`, `number`, `boolean`, `any`.
    *   Typisierung von Funktionen (Parameter, Rückgabewert).
    *   Typisierung von Objekten mit `interface` oder `type`.
    *   **Ziel:** Den "roten Unterstrich" der IDE verstehen und beheben.

**🍕 Mittagspause (12:00 - 13:00)**

**Block 3: React Basics – Deine erste Komponente (13:00 - 14:30)**
*   **Tooling:** Kurze Einrichtung einer Entwicklungsumgebung (z.B. mittels `Vite` – schnell und einfach). Gemeinsam ein Projekt erstellen.
*   **Das Herzstück: JSX/TSX**
    *   Was ist JSX? (JavaScript XML – HTML-ähnliche Syntax in JavaScript).
    *   Regeln: `className` statt `class`, Self-Closing Tags, nur ein Elternelement zurückgeben (oder Fragments `<>...</>`).
    *   JavaScript in JSX: Ausdrücke in `{ }` einbetten.
*   **Komponenten: Die Bausteine einer React-App**
    *   Konzept: Wiederverwendbare, isolierte UI-Blöcke.
    *   Erstellen einer ersten Funktionskomponente.
*   **Datenfluss nach unten: Props**
    *   Wie Komponenten Daten von außen erhalten.
    *   Typisierung von Props mit TypeScript.

**⏸️ Kurze Pause (14:30 - 14:45)**

**Block 4: Interaktivität & State Management (14:45 - 16:00)**
*   **Interaktivität: Event-Handler** (z.B. `onClick`, `onChange`).
*   **State: Der Speicher einer Komponente**
    *   Problem: Warum reine Variablen nicht reichen.
    *   Lösung: Der `useState` Hook.
    *   Live-Demo: Ein Zähler, eine Todo-Liste (nur Hinzufügen).
    *   Wichtige Regel: State ist immutable. State updaten mit Setter-Funktion.
*   **Kommunikation von Kind zu Parent:**
    *   Wie eine Kind-Komponente eine Aktion im Parent auslösen kann.
    *   Praxis: Callback-Funktionen als Props übergeben.
    *   Beispiel: "Löschen"-Button in einer Todo-Item-Komponente.

---

### **Tag 2: Fortgeschrittene Konzepte & Ökosystem**

**Gesamtdauer: 6 Stunden (inkl. Pausen)**

**Block 1: Daten von außen holen & Global State (09:00 - 10:30)**
*   **Rückblick & Fragen zu Tag 1.**
*   **Kommunikation mit dem Backend: REST-APIs und `fetch`**
    *   Was ist eine API? Was ist REST?
    *   Die `fetch`-API: `GET`-Requests, `POST`-Requests.
    *   Praxis: Todos aus einem öffentlichen Mock-API (z.B. JSONPlaceholder) laden und anzeigen.
    *   `useEffect` Hook kurz erklärt: Seiteneffekte ausführen (wie Datenfetching).
*   **Global State mit Zustand**
    *   Problem: Prop-Drilling (State durch viele Komponenten reichen).
    *   Lösung: Globaler State, der für alle Komponenten zugänglich ist.
    *   Einführung in **Zustand** (Zustand): Einfacher als Redux, sehr beliebt.
    *   Praxis: Den Todo-State aus Tag 1 in einen Zustand-Store migrieren.

**⏸️ Kurze Pause (10:30 - 10:45)**

**Block 2: Routing & Navigation (10:45 - 12:00)**
*   **Routing in einer SPA: React Router**
    *   Problem: Wie macht man "Seiten" in einer Single-Page-App?
    *   Konzept: Client-Side Routing.
    *   Praxis:
        *   Router einrichten (`<BrowserRouter>`).
        *   Routen definieren (`<Routes>`, `<Route>`).
        *   Links navigieren (`<Link>`).
        *   Eine "About"-Seite und eine "Todo"-Seite erstellen.

**🍕 Mittagspause (12:00 - 13:00)**

**Block 3: Best Practices für die Praxis (13:00 - 14:30)**
*   **Professionelles Data Fetching mit React Query (oder TanStack Query)**
    *   Probleme mit `fetch` + `useState`/`useEffect`: Loading-States, Error-Handling, Caching, Background Updates.
    *   Lösung: Einführung in `useQuery` Hook.
    *   Praxis: Die `fetch`-Logik für die Todos durch React Query ersetzen – wird viel einfacher und robuster.
*   **Das CORS-Problem verstehen**
    *   Was ist CORS? (Same-Origin-Policy des Browsers).
    *   Wann tritt es auf? (Frontend und Backend auf verschiedenen Domains/Ports).
    *   Wer muss es lösen? **(Das Backend!)** – Kurze Erklärung der nötigen Response-Header.
*   **Styling mit Tailwind CSS**
    *   Philosophie: Utility-First CSS.
    *   Vorteile: Sehr schnell zu schreiben, keine Namenskonflikte, standardisierte Design-Systeme.
    *   Live-Demo: Die Todo-Liste mit ein paar Tailwind-Klassen stylen.

**⏸️ Kurze Pause (14:30 - 14:45)**

**Block 4: React in der Welt & Abschluss (14:45 - 16:00)**
*   **React überall: Das Ökosystem**
    *   **React Native:** Für native Mobile Apps (iOS & Android). Gleiche Konzepte, andere UI-Primitive (`<View>` statt `<div>`).
    *   **Desktop-Apps:** Frameworks wie **Electron** (z.B. VS Code, Discord) und **Tauri** packen React-Apps in native Desktop-Anwendungen.
    *   **Meta-Frameworks:**
        *   **Next.js:** Das führende Framework für Production (Server-Side Rendering, Static Site Generation, Routing, Bundling). Heutiger Industriestandard für viele Projekte.
        *   **Remix:** Ein weiteres modernes, Full-Stack-Framework.
    *   **Zusammenfassung:** React ist nicht nur für Web-Apps, sondern eine Plattform für UI-Entwicklung auf vielen Zielplattformen.
*   **Zusammenfassung der zwei Tage**
*   **Ausblick & Weiterführende Themen:** Performance-Optimierung (`useMemo`, `useCallback`), weitere Hooks, Testing, State Management mit Redux Toolkit.
*   **Abschluss & Feedback-Runde**
    *   Offene Fragen klären.
    *   Feedback zum Kurs einholen.
    *   Empfehlungen für weitere Lernressourcen (Dokumentation, Tutorials, Communities).