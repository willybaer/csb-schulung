### 🚀 Gemeinsame Projekt-Einrichtung: React mit TypeScript und Vite

Wir werden den offiziellen `create-vite`-Befehl verwenden, der ein perfekt vorkonfiguriertes Projekt für uns erstellt .

**1. Projekt erstellen**
Öffne dein Terminal und führe folgenden Befehl aus:
```bash
npm create vite@latest
```
Du wirst nun durch ein kurzes Setup geführt:
- **Project name:** Gib einen Namen für dein Projekt ein, z.B. `meine-react-schulung`.
- **Select a framework:** Wähle `React`.
- **Select a variant:** Wähle `TypeScript`.

**2. Abhängigkeiten installieren**
Wechsle in das soeben erstellte Projektverzeichnis und installiere die benötigten Pakete:
```bash
cd meine-react-schulung
npm install
```

**3. Entwicklungsserver starten**
Starte den Entwicklungsserver von Vite, um deine App zu sehen:
```bash
npm run dev
```
Innerhalb weniger Sekunden wird dein Browser automatisch geöffnet und du siehst deine neue React-App unter `http://localhost:5173` .

### 📁 Verstehen der Projektstruktur

Nach der Einrichtung ist es hilfreich zu verstehen, welche Dateien Vite für uns erstellt hat. Hier ist eine Übersicht der wichtigsten Ordner und Dateien:

| **Datei/Ordner** | **Zweck** |
| :--- | :--- |
| **`/src`/** | Enthält deinen gesamten **Anwendungs-Quellcode** (Komponenten, Styles) . |
| **`/public`/** | Enthält **statische Assets** wie Bilder, die nicht vom Build-Prozess verändert werden . |
| **`index.html`** | Das **Haupt-HTML-File**; Vite fügt automatisch die Skripte für deine React-App ein . |
| **`src/main.tsx`** | Der **JavaScript-Einstiegspunkt** deiner App; hier wird die React-Komponente im DOM gerendert . |
| **`src/App.tsx`** | Die **Haupt-React-Komponente**; hier beginnst du mit dem Bau deiner Anwendung . |
| **`vite.config.ts`** | Die **Konfigurationsdatei** für Vite; kann erweitert werden, um das Build-Verhalten anzupassen . |
| **`tsconfig.json`** | Die **TypeScript-Konfiguration**; definiert Compiler-Optionen für strikte Typisierung . |

Absolut! Hier sind die detaillierten Präsentationsfolien für **Block 3, Tag 1: React Basics – Deine erste Komponente** mit vielen Code-Beispielen:

```markdown
---
## **React Basics – Deine erste Komponente**

**Jetzt wird's praktisch! 🚀**

*🎯 Ziel: Deine erste eigene React-Komponente verstehen und bauen*

---
## **Was wir bisher geschafft haben**

1.  ✅ **Development-Umgebung** mit Vite + TypeScript
2.  ✅ **JavaScript/TypeScript Grundlagen**
3.  ✅ **Verständnis** für Bundler und Build-Prozesse

**Jetzt: Anwenden!**

---
## **Unser Startpunkt: Die App.tsx**

```tsx
// src/App.tsx
function App() {
  return (
    <div>
      <h1>Willkommen zur React-Schulung!</h1>
    </div>
  );
}

export default App;
```

**Das ist bereits eine React-Komponente!**

---
## **Was ist JSX/TSX?**

**JavaScript XML - HTML-ähnliche Syntax in JavaScript**

```tsx
// Das ist JSX:
const element = <h1>Hallo, Welt!</h1>;

// Das wird daraus (muss uns nicht interessieren):
const element = React.createElement('h1', null, 'Hallo, Welt!');
```

**Vorteile:**
- Vertraute HTML-ähnliche Syntax
- Vollständige Power von JavaScript
- TypeScript-Unterstützung (TSX)

---
## **JSX Regeln: 1. className statt class**

```tsx
// ❌ Falsch (funktioniert nicht wie erwartet)
<div class="container">Inhalt</div>

// ✅ Richtig
<div className="container">Inhalt</div>
```

**Warum?** `class` ist ein reserviertes Keyword in JavaScript.

---
## **JSX Regeln: 2. Self-Closing Tags**

```tsx
// ❌ Falsch
<img src="image.jpg"></img>
<br></br>

// ✅ Richtig
<img src="image.jpg" />
<br />
```

**Alle Elemente ohne Inhalt müssen selbst-schließend sein.**

---
## **JSX Regeln: 3. Nur ein Elternelement**

```tsx
// ❌ Falsch (zwei Elternelemente)
function Component() {
  return (
    <h1>Titel</h1>
    <p>Beschreibung</p>
  );
}

// ✅ Richtig (ein Elternelement)
function Component() {
  return (
    <div>
      <h1>Titel</h1>
      <p>Beschreibung</p>
    </div>
  );
}
```

---
## **Die Lösung: Fragments**

```tsx
// ✅ Ohne zusätzliches div-Element
function Component() {
  return (
    <>
      <h1>Titel</h1>
      <p>Beschreibung</p>
    </>
  );
}
```

**Das `<> </>` Syntax erzeugt kein zusätzliches DOM-Element!**

---
## **JavaScript in JSX: Ausdrücke in `{ }`**

```tsx
function App() {
  const name = "Peter";
  const age = 25;
  
  return (
    <div>
      <h1>Hallo, {name}!</h1>
      <p>Du bist {age} Jahre alt.</p>
      <p>Nächstes Jahr: {age + 1}</p>
      <p>Aktuelle Uhrzeit: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
```

**Alles zwischen `{ }` wird als JavaScript ausgewertet!**

---
## **Praktisches Beispiel: Bedingungen in JSX**

```tsx
function WelcomeMessage({ isLoggedIn, userName }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Willkommen zurück, {userName}!</h1>
      ) : (
        <h1>Bitte einloggen</h1>
      )}
      
      {/* Alternative mit && */}
      {isLoggedIn && <p>Sie haben neue Nachrichten!</p>}
    </div>
  );
}
```

---
## **Komponenten: Die Bausteine einer React-App**

**Stell dir React-Komponenten wie LEGO-Steine vor:**

```
App
├── Header
├── Navigation
├── MainContent
│   ├── Article
│   ├── Sidebar
│   └── Comments
└── Footer
```

**Jeder Teil ist eine wiederverwendbare Komponente!**

---
## **Unsere erste eigene Komponente**

```tsx
// src/components/Welcome.tsx

// 1. Komponente als Funktion definieren
function Welcome() {
  // 2. JSX zurückgeben
  return (
    <div className="welcome-card">
      <h2>Herzlich Willkommen!</h2>
      <p>Schön, dass du hier bist!</p>
    </div>
  );
}

// 3. Komponente exportieren
export default Welcome;
```

---
## **Komponente verwenden**

```tsx
// src/App.tsx
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="app">
      <h1>Meine React App</h1>
      {/* Unsere Komponente verwenden */}
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
```

**✅ Eine Komponente, mehrfach verwendbar!**

---
## **Props: Daten an Komponenten übergeben**

**Wie Komponenten parametrisiert werden**

```tsx
// Komponente mit Props
function Welcome({ name, age }: { name: string; age: number }) {
  return (
    <div>
      <h2>Hallo, {name}!</h2>
      <p>Alter: {age} Jahre</p>
    </div>
  );
}

// Verwendung mit verschiedenen Daten
function App() {
  return (
    <div>
      <Welcome name="Peter" age={25} />
      <Welcome name="Anna" age={30} />
      <Welcome name="Max" age={22} />
    </div>
  );
}
```

---
## **TypeScript für Props: Interface definieren**

```tsx
// Bessere Organisation mit Interface
interface WelcomeProps {
  name: string;
  age: number;
  isActive?: boolean; // Optional mit ?
}

function Welcome({ name, age, isActive = true }: WelcomeProps) {
  return (
    <div className={isActive ? 'active' : 'inactive'}>
      <h2>Hallo, {name}!</h2>
      <p>Alter: {age} Jahre</p>
      <p>Status: {isActive ? 'Aktiv' : 'Inaktiv'}</p>
    </div>
  );
}
```

---
## **Praktisches Beispiel: TodoItem Komponente**

```tsx
// src/components/TodoItem.tsx
interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

function TodoItem({ text, completed, priority }: TodoItemProps) {
  return (
    <div className={`todo-item ${priority} ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} readOnly />
      <span>{text}</span>
      <span className={`priority-badge ${priority}`}>
        {priority.toUpperCase()}
      </span>
    </div>
  );
}

export default TodoItem;
```

---
## **Listen rendern mit .map()**

**Jetzt wird unser JavaScript-Wissen wichtig!**

```tsx
// src/App.tsx
import TodoItem from './components/TodoItem';

function App() {
  const todos = [
    { id: 1, text: 'React lernen', completed: true, priority: 'high' },
    { id: 2, text: 'TypeScript üben', completed: false, priority: 'medium' },
    { id: 3, text: 'Projekt bauen', completed: false, priority: 'high' }
  ];

  return (
    <div>
      <h1>Meine Todo-Liste</h1>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          priority={todo.priority}
        />
      ))}
    </div>
  );
}
```

---
## **Der key-Prop: WICHTIG!**

```tsx
// ❌ Falsch (kein key)
{todos.map(todo => (
  <TodoItem {...todo} />
))}

// ❌ Schlecht (Index als key)
{todos.map((todo, index) => (
  <TodoItem key={index} {...todo} />
))}

// ✅ Richtig (Eindeutige ID)
{todos.map(todo => (
  <TodoItem key={todo.id} {...todo} />
))}
```

**Warum?** React benötigt `key` für performantes Updates von Listen!

---
## **Live-Coding: Gemeinsam eine UserCard bauen**

**Aufgabe:** Erstelle eine UserCard-Komponente die anzeigt:
- Avatar (Bild)
- Name
- E-Mail
- Online-Status

```tsx
interface UserCardProps {
  avatarUrl: string;
  name: string;
  email: string;
  isOnline: boolean;
}

function UserCard({ avatarUrl, name, email, isOnline }: UserCardProps) {
  // Gemeinsam implementieren!
}
```

---
## **Zusammenfassung Block 3**

**Was wir gelernt haben:**
1.  ✅ **JSX/TSX** Syntax und Regeln
2.  ✅ **Komponenten** als fundamentale Bausteine
3.  ✅ **Props** für Datenfluss nach unten
4.  ✅ **TypeScript Interfaces** für Typ-Sicherheit
5.  ✅ **Listen rendern** mit `.map()` und `key`

**Du kannst jetzt:**
- Eigene Komponenten erstellen
- Daten via Props übergeben
- TypeScript für Typ-Sicherheit nutzen
- Listen von Elementen rendern

---
## **Was kommt als nächstes?**

**⏸️ Kurze Pause**

**Dann:** **Block 4 - Interaktivität & State Management**
- Event Handler (`onClick`, `onChange`)
- State mit `useState`
- Komponenten kommunizieren lassen

**Bereit für Interaktivität? 🎯**