### 🎨 Tailwind CSS: Modernes Styling für React Apps

**Was ist Tailwind CSS?**
Tailwind CSS ist ein **utility-first CSS-Framework**, mit dem du benutzerdefinierte Designs direkt in deinem HTML erstellst. Anstatt vorgefertigte Komponenten wie Buttons oder Karten zu liefern, bietet es dir eine umfangreiche Sammlung von Hilfsklassen (Utility Classes) für einzelne CSS-Eigenschaften.

```html
<!-- Traditionelles CSS -->
<style>.btn { padding: 1rem 2rem; background: blue; }</style>
<button class="btn">Klick mich</button>

<!-- Tailwind CSS -->
<button class="px-8 py-4 bg-blue-500">Klick mich</button>
```

**Philosophie: Utility-First**
-   **Wiederverwendbarkeit:** Kleine, atomare Klassen mit einer einzigen Verantwortung.
-   **Kein Kontextwechsel:** Du arbeitest fast nur in deinem HTML/JSX, ohne in separate CSS-Dateien wechseln zu müssen.
-   **Volle Kontrolle:** Du behältst die vollständige Gestaltungshoheit und kämpfst nicht gegen vordefinierte Komponenten.

**Die wichtigsten Utility-Klassen im Überblick**

| Kategorie | Beispiele | Beschreibung |
| :--- | :--- | :--- |
| **Layout** | `flex`, `grid`, `block` | Steuert das Erscheinungsbild |
| **Abstände** | `m-4` (margin), `p-4` (padding) | Raum um und innerhalb von Elementen |
| **Farben** | `bg-blue-500`, `text-white` | Hintergrund- und Textfarben |
| **Typografie** | `text-xl`, `font-bold`, `text-center` | Schriftgröße, -dicke und -ausrichtung |

**Responsive Design & Interaktionen**
Tailwind macht fortgeschrittenes CSS einfach. Du präfixierst Klassen einfach mit einem Breakpoint oder Zustand:
```html
<!-- Responsive: Standardmobil, side-by-side ab mittlerer Bildschirmgröße -->
<div class="flex flex-col md:flex-row">
  <div class="w-full md:w-1/2">...</div>
  <div class="w-full md:w-1/2">...</div>
</div>

<!-- Interaktion: Hintergrundfarbe ändert sich beim Hover -->
<button class="bg-blue-500 hover:bg-blue-700">Klick mich</button>
```

**Warum Tailwind in der React-Entwicklung liebt?**
-   **Enge Kopplung:** Stile bleiben direkt bei deinen Komponenten, was Wartbarkeit und Refactoring erleichtert.
-   **Performance:** Im Production-Build wird alles ungenutzte CSS automatisch entfernt, was zu sehr kleinen Bundle-Größen führt.
-   **Konsistenz:** Die Verwendung einer konfigurierten Design-Spalette sorgt für ein einheitliches Erscheinungsbild.

### 🛠️ Praktische Übungsaufgabe: User-Profil-Karte

**Aufgabe:** Baue eine responsive User-Profil-Karte mit Tailwind CSS, die auf einem mobilen Gerät und einem Desktop gut aussieht.

**Anforderungen:**
1.  **Container:** Eine Karte mit weißem Hintergrund, abgerundeten Ecken und einem dezenten Schatten.
2.  **Layout:** Auf kleinen Bildschirmen einspaltig, auf mittleren Bildschirmen (`md`) soll das Bild links und der Text rechts daneben stehen (flex).
3.  **Bild:** Ein quadratisches Profilbild mit abgerundeten Ecken.
4.  **Typografie:** Unterschiedliche Schriftgrößen und -gewichte für Name, Titel und Bio.
5.  **Interaktion:** Ein Button, der seine Hintergrundfarbe ändert, wenn man mit der Maus darüber fährt.

**Vorgaben:**
-   **Bild-URL:** `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e`
-   **Name:** Dr. Sarah Meyer
-   **Titel:** Senior Frontend Engineer
-   **Bio:** Liebt sauberen Code, React und guten Kaffee.

```jsx
// Hier ist ein Start-Code-Snippet für die React-Komponente
export default function UserProfileCard() {
  return (
    <div>
      {/* Dein Code hier */}
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="Profile" />
      <h1>Dr. Sarah Meyer</h1>
      <h2>Senior Frontend Engineer</h2>
      <p>Liebt sauberen Code, React und guten Kaffee.</p>
      <button>Kontakt aufnehmen</button>
    </div>
  );
}
```

**Musterlösung:**
```jsx
export default function UserProfileCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-md mx-auto md:max-w-full md:flex">
      <img 
        className="h-48 w-full object-cover md:h-auto md:w-48 rounded-t-xl md:rounded-l-xl md:rounded-tr-none" 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
        alt="Profile of Dr. Sarah Meyer" 
      />
      <div className="p-8 md:flex-1">
        <h1 className="text-2xl font-bold text-gray-900">Dr. Sarah Meyer</h1>
        <h2 className="text-lg font-semibold text-indigo-600 mt-2">Senior Frontend Engineer</h2>
        <p className="mt-4 text-gray-600">Liebt sauberen Code, React und guten Kaffee.</p>
        <button className="mt-6 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Kontakt aufnehmen
        </button>
      </div>
    </div>
  );
}
