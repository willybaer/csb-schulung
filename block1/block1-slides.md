## **Präsentation: Block 1 - Einführung & Kontext**

<!--
Diesen ersten Teil sieht nur der Präsentator
Notizen für den Trainer:
- Sprich langsam und deutlich.
- Stelle sicher, dass du auf die Körpersprache des Teilnehmers achtest.
- Ermutige zu Fragen nach jedem Abschnitt.
- Betone, dass es hier ums Grobverständnis geht, nicht um Details.
-->

---

## **Willkommen zur React-Schulung**

**Tag 1 | Block 1: Einführung & Kontext**

---

## **Über mich**

*   **Name:** Wilhelm Dewald
*   **Webseite:** www.wilhelmdewald.com
*   **Rolle:** Senior/Lead Fullstack-Entwickler
*   **React-Erfahrung:** Seit 2017 in verschiedenen Projekten

---

## **Über dich

*   **Name & Hintergrund?**
*   **Aktuelle Rolle/Projekte?**
*   **Vorkenntnisse in JavaScript/TypeScript?**
*   **Was sind deine Erwartungen an diese zwei Tage?**

*🎯 Ziel: Den Teilnehmer abholen und seine Bedürfnisse verstehen.*

---

## **Ziele dieser zwei Tage**

**Hauptziel:** Du verstehst die Grundkonzepte von React und kannst eine einfache, interaktive Web-Anwendung bauen.

**Konkret lernst du:**
*   **Tag 1:** JavaScript/TypeScript Basics, React-Komponenten, Props, State
*   **Tag 2:** Daten von APIs laden, Routing, globale Zustände & Best Practices

**Wir konzentrieren uns auf das Verständnis, nicht auf Perfektion.**

---

## **Agenda: Block 1

1.  Das "Warum" hinter React
2.  Vom Server-Side Rendering zur Single-Page Application (SPA)
3.  Die Landkarte der Frameworks: Alternativen
4.  Warum ist React so beliebt?

---

<!-- Der inhaltliche Start -->
## **Die Welt vor React

**Das Problem: Monolithische Anwendungen**

Beispiel einer klassichen HTML-Datei in PHP (HTML, CSS, PHP und Javascript Code meist in einer großen Datei) 

```html
<!-- Der Server rendert alles -->
<html>
  <body>
    <h1>Meine Produktseite</h1>
    <?php
      $product = get_product_from_database();
      echo "<div class='price'>" . $product->price . "</div>";
      
      if($user->is_logged_in()) {
        echo "<button>Kaufen</button>";
      }
    ?>

    <script>
    $('#deposition_wear_start, #deposition_wear_end').datepicker({
        format: 'dd.mm.yyyy'
    }).on('changeDate', function(ev) {
        $(this).datepicker('hide');
    });

    (function() {
        let picker = $('#service-picker{{ $installation->id }}');
        let template = picker.find('[data-period-template]');

        let deleteCallback = function(e) {
            e.preventDefault();

            $(this).closest('[data-period]').remove();
        };
    })
  </body>
</html>
```

**Nachteile:**
*   Jede Interaktion = Neue Seite laden
*   Langsam und "klobiges" Gefühl
*   Frontend und Backend stark verknüpft

---

## **Die Lösung: Trennung der Sorgen

**Frontend und Backend werden unabhängig**

| **Frontend (React App)** | **Backend (API)** |
|---------------------------|-------------------|
| - Rendert die UI | - Stellt Daten bereit |
| - Handelt Interaktionen | - Business-Logik |
| - Läuft im Browser | - Authentifizierung |
| **Spricht mit dem Backend über eine API (meist REST)** | |

---

## **Konzept: Single-Page Application (SPA)**

**Was passiert beim ersten Aufruf?**
1.  Browser lädt eine **leere HTML-Datei** + JavaScript-Bundle
2.  **React startet** und baut die gesamte Benutzeroberfläche im Browser auf
3.  **Danach:** Nur noch Daten (JSON) werden mit dem Server ausgetauscht

**VS Multi-Page Application (MPA)**
*   **SPA:** Eine HTML-Datei, dynamischer Content
*   **MPA:** Viele HTML-Dateien, bei Klicks neue Seite vom Server

---

## **Vorteile einer SPA

*   🚀 **Flüssigere User Experience** (Wie eine Desktop-App)
*   ♻️ **Wiederverwendbarkeit** (Eine API für Web, Mobile, etc.)
*   📦 **Skalierbarkeit** (Frontend und Backend Teams können unabhängig arbeiten)
*   🛠 **Moderne Entwicklung** (Komponenten, State Management, Tools)

---

## **Nachteile einer SPA

*   **SEO** (Suchmaschinenoptimierung) war ursprünglich schwieriger (heute lösbar)
*   **Längere initiale Ladezeit** (weil erst JavaScript geladen werden muss)
*   **Mehr Komplexität** im Frontend (State Management, Routing, etc.)

*💡 Diese Nachteile haben zu Lösungen wie Next.js (Server-Side Rendering) geführt.*

---

## **Die Landkarte der Frameworks

React ist nicht allein auf dem Markt.

---

## **Vue.js

*   **Philosophie:** Progressiv und zugänglich
*   **Stärken:** Einfacher Einstieg, klare Templating-Syntax, gute Dokumentation
*   **Einsatz:** Ideal für mittlere Projekte und Teams, die eine sanfte Lernkurve suchen

> "Das freundliche Framework"

---

## **Angular

*   **Philosophie:** "All-in-One" Framework
*   **Stärken:** Vollständige Lösung (mit Routing, State Management, etc.), starke Typisierung mit TypeScript, enterprise-tauglich
*   **Einsatz:** Sehr große, komplexe Anwendungen

> "Das Enterprise-Framework"

---

## **Svelte

*   **Philosophie:** "Keine Laufzeit-Bibliothek"
*   **Stärken:** Kompiliert zu optimalem JavaScript, sehr einfach zu schreibender Code, exzellente Performance
*   **Einsatz:** Performance-kritische Anwendungen, Entwickler die Einfachheit lieben

> "Das magische Framework"

---

## **Und wo ist React?

**React ist eine Bibliothek - kein Framework.**

*   **React kümmert sich NUR um die Benutzeroberfläche (UI).**
*   **Du wählst die anderen Teile selbst:** Routing, State Management, etc.

> "Das flexible Ökosystem"

---

## **Warum ist React so beliebt?

---

## **1. Einfache Kernkonzepte**

```jsx
// Eine Komponente ist einfach eine Funktion
function Welcome(props) {
  // Sie verwendet State
  const [name, setName] = useState("Peter");
  
  // Und gibt JSX zurück
  return <h1>Hallo, {name}!</h1>;
}
```

**"Es ist nur JavaScript"** - Die Grundkonzepte (Komponenten, Props, State) sind schnell verstanden.

---

## **2. Flexibilität & Freiheit**

**React zwingt dir nichts auf:**

*   **State Management?** (useState, Zustand, Redux)
*   **Routing?** (React Router, Next.js)
*   **Styling?** (CSS Modules, Tailwind, Styled Components)

**Du baust dir deinen eigenen Stack zusammen.**

---

## **3. Starke Community & Jobmarkt

*   **Größte Community** aller Frontend-Bibliotheken
*   **Riesiges Ökosystem** (tausende von Bibliotheken)
*   **Hohe Nachfrage** auf dem Arbeitsmarkt
*   **Ständig aktualisiert** und verbessert

---

## **4. Backing durch Meta

*   Wird bei **Facebook, Instagram, WhatsApp Web** eingesetzt
*   Garantiert **Langzeitunterstützung** und Stabilität
*   **Profitiert von** den Erfahrungen aus riesigen, produktiven Apps

---

## **5. "Learn once, write anywhere"

*   **Web:** React DOM
*   **Mobile:** React Native (iOS & Android)
*   **Desktop:** Electron, Tauri

**Die gleichen Konzepte überall.**

---

## **Zusammenfassung Block 1

*   React löst das Problem **komplexer, interaktiver UIs**
*   Es basiert auf dem **SPA-Konzept** mit getrenntem Frontend/Backend
*   Es ist **flexibler** als vollständige Frameworks wie Angular
*   Seine **Beliebtheit** kommt von Einfachheit, Community und Vielseitigkeit

---

## **Was kommt als nächstes?

**Kurzpause ⏸️**

**Dann:** JavaScript & TypeScript Crashkurs - Die Grundlage, die wir für React brauchen.

**Fragen?**