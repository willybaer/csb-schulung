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
    *   **Bundler:** Die Rolle von Bundlern: Webpack, Vite & Co.

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

### **Tag 2: Fortgeschrittene Konzepte, Echtzeit-Kommunikation & Ökosystem**

**Gesamtdauer: 6 Stunden (inkl. Pausen)**

**Block 1: Daten von außen holen & Global State & Professionelles Data Fetching mit React Query (oder TanStack Query) (09:00 - 10:30)**
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
     *   Probleme mit `fetch` + `useState`/`useEffect`: Loading-States, Error-Handling, Caching, Background Updates.
    *   Lösung: Einführung in `useQuery` Hook.
    *   Praxis: Die `fetch`-Logik für die Todos durch React Query ersetzen – wird viel einfacher und robuster.

**⏸️ Kurze Pause (10:30 - 10:45)**

**Block 2: Echtzeit-Kommunikation mit WebSockets (10:45 - 12:00)**
*   **Von Request/Response zu Echtzeit:**
    *   **Problem von REST:** Client muss immer nachfragen ("Polling"). Nicht geeignet für Live-Daten (Chat, Live-Updates, Collaboration).
    *   **Lösung:** WebSockets - Eine persistente, bidirektionale Verbindung zwischen Client und Server.
*   **WebSockets Konzept:**
    *   Handshake zu Beginn, dann offene Verbindung.
    *   Server kann Daten "pushen", ohne dass der Client fragt.
    *   Ereignis-basiert: `onopen`, `onmessage`, `onclose`, `onerror`.
*   **Praxis in React:**
    *   WebSocket Verbindung in einer Komponente mit `useEffect` aufbauen.
    *   Nachrichten vom Server mit `onmessage` empfangen und im State (oder Zustand-Store) speichern.
    *   Nachrichten mit `socket.send()` an den Server senden.
*   **Live-Demo:**
    *   Einfacher Chat oder Live-Todo-Liste, die von mehreren Clients gleichzeitig gesehen wird (z.B. mit einem öffentlichen WebSocket Test-Server).
*   **Wichtiger Hinweis zu Production:**
    *   Für komplexe Anwendungen Bibliotheken wie `socket.io-client` verwenden, die Reconnect-Logik und Fallbacks bieten.

**🍕 Mittagspause (12:00 - 13:00)**

**Block 3: Routing & Best Practices (13:00 - 14:30)**
*   **Routing in einer SPA: React Router**
    *   Problem: Wie macht man "Seiten" in einer Single-Page-App?
    *   Konzept: Client-Side Routing.
    *   Praxis: Router einrichten (`<BrowserRouter>`), Routen definieren (`<Routes>`, `<Route>`), Links navigieren (`<Link>`).
*   **Professionelles Data Fetching mit React Query**
    *   Probleme mit `fetch` + `useState`/`useEffect`: Loading-States, Error-Handling, Caching.
    *   Lösung: Einführung in `useQuery` Hook.
    *   Praxis: Die `fetch`-Logik für die Todos durch React Query ersetzen.
*   **Das CORS-Problem verstehen**
    *   Wer muss es lösen? **(Das Backend!)** – Kurze Erklärung.

**⏸️ Kurze Pause (14:30 - 14:45)**

**Block 4: Styling, React in der Welt & Abschluss (14:45 - 16:00)**
*   **Styling mit Tailwind CSS** (Kompakter Überblick mit Live-Demo)
*   **React überall: Das Ökosystem** (React Native, Desktop-Apps, Next.js)
*   **Zusammenfassung & Ausblick**
*   **Abschluss & Feedback-Runde**