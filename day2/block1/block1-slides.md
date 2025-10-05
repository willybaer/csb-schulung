Absolut! Hier ist eine umfassende Präsentation für **Block 1, Tag 2: Daten von außen holen & Global State** mit praktischen Übungsaufgaben:

```markdown
---
## **Tag 2 - Block 1: Daten von außen holen & Global State**

**Willkommen zurück! 🚀**

*🎯 Heute: Daten von APIs laden und global verwalten*

---
## **Rückblick: Was wir gestern gelernt haben**

1.  ✅ **React Komponenten** und JSX
2.  ✅ **Props** und **State** mit useState
3.  ✅ **Event Handling** und Formulare
4.  ✅ **Kommunikation** zwischen Komponenten

**Heute bauen wir darauf auf!**

## **Rückblick: Was wissen wir schon über Hooks?**

**Aus Tag 1:**
```tsx
// useState - Lokalen State verwalten
const [count, setCount] = useState(0);

// useState mit TypeScript
const [user, setUser] = useState<User | null>(null);
```

**Hooks sind Funktionen, die uns erlauben:**
- State in Funktionskomponenten zu verwenden
- Lifecycle-Methoden zu ersetzen
- Code wiederverwendbar zu machen

```

---
## **Die wichtigsten Built-in Hooks**

| Hook | Zweck |
|------|-------|
| **useState** | State in Komponenten verwalten |
| **useEffect** | Side Effects ausführen |
| **useContext** | Globalen State konsumieren |
| **useReducer** | Komplexen State managen |

**Heute fokussieren wir uns auf useEffect!**

---
## **Was sind "Side Effects"?**

**Side Effects = Nebeneffekte**

Alles was außerhalb des "reinen" React-Renderings passiert:

```tsx
// ✅ Pure (keine Side Effects)
function PureComponent({ data }) {
  return <div>{data.map(item => item.name)}</div>;
}

// ❌ Side Effects
function ComponentWithEffects() {
  // API Calls
  fetch('/api/data');
  
  // Timer
  setInterval(() => {}, 1000);
  
  // DOM Manipulation
  document.title = "Neuer Titel";
  
  // Browser APIs
  localStorage.setItem('key', 'value');
}
```

---
## **Das Problem: Wo Side Effects ausführen?**

**❌ Direkt im Komponenten-Body:**
```tsx
function UserProfile() {
  const [user, setUser] = useState(null);
  
  // ❌ FALSCH! Läuft bei jedem Render!
  fetch('/api/user')
    .then(response => response.json())
    .then(data => setUser(data));
  
  return <div>{user?.name}</div>;
}
```

**Problem:**
- Infinite Loops!
- Performance Issues!
- Unkontrollierte Side Effects!

## **Die Lösung: useEffect**

**useEffect für kontrollierte Side Effects**

```tsx
import { useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  
  // ✅ RICHTIG! Nur wenn benötigt
  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []); // Leeres Array = nur einmal ausführen
  
  return <div>{user?.name}</div>;
}
```

---
## **useEffect Syntax**

```tsx
useEffect(
  effect: Function,    // Was ausgeführt wird
  deps?: Array<any>    // Wann es ausgeführt wird
);
```

**Die drei wichtigsten Varianten:**

---
## **1. useEffect ohne Dependencies**

**Bei jedem Render ausführen**
```tsx
useEffect(() => {
  // Wird ausgeführt:
  // - Nach dem ersten Render
  // - Nach JEDEM weiteren Render
  console.log('Component rendered');
});
```

**⚠️ Vorsicht:** Oft nicht gewünscht! Kann Performance-Probleme verursachen.

---
## **2. useEffect mit leeren Dependencies []**

**Nur einmal nach dem ersten Render**
```tsx
useEffect(() => {
  // Wird nur EINMAL nach dem ersten Render ausgeführt
  fetch('/api/data')
    .then(response => response.json())
    .then(data => setData(data));
    
  console.log('API call executed');
}, []); // 👈 Leeres Array
```

**Perfekt für:**
- API Calls beim Laden der Komponente
- Event Listener setup
- Initialisierungen

---
## **3. useEffect mit Dependencies**

**Nur wenn bestimmte Werte sich ändern**
```tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Wird ausgeführt:
    // - Beim ersten Render
    // - Nur wenn sich `userId` ändert
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
      
  }, [userId]); // 👈 Abhängig von userId
  
  return <div>{user?.name}</div>;
}
```

---
## **Das Problem: Daten von außerhalb**

**Bisher:** Daten nur lokal in der Komponente
```tsx
const [todos, setTodos] = useState([
  { id: 1, text: 'Lokales Todo', completed: false }
]);
```

**In der Realität:** Daten kommen von Servern/APIs
```tsx
// Daten von einem Server laden
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

---
## **Was ist eine API?**

**Application Programming Interface**

- **Schnittstelle** zwischen Frontend und Backend
- **Spricht meist JSON** (JavaScript Object Notation)
- **RESTful APIs** folgen bestimmten Konventionen

```json
// Beispiel API Response
{
  "users": [
    {
      "id": 1,
      "name": "Peter",
      "email": "peter@example.com"
    }
  ]
}
```

---
## **HTTP Methoden im Überblick**

| Methode | Beschreibung | Beispiel |
|---------|--------------|----------|
| **GET** | Daten abrufen | `fetch('/api/users')` |
| **POST** | Daten erstellen | `fetch('/api/users', { method: 'POST', body: ... })` |
| **PUT** | Daten ersetzen | `fetch('/api/users/1', { method: 'PUT', body: ... })` |
| **DELETE** | Daten löschen | `fetch('/api/users/1', { method: 'DELETE' })` |

---
## **Die fetch API**

**Einfacher GET Request:**
```tsx
// Daten von einer API laden
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // zu JSON parsen
  .then(data => console.log(data))   // Daten verwenden
  .catch(error => console.error('Fehler:', error));
```

---
## **fetch in React mit useEffect**

```tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Leeres Array = nur einmal beim Mount ausführen

  // Komponente wird fortgesetzt...
```

---
## **Lade- und Fehlerzustände handhaben**

```tsx
function UsersList() {
  // ...vorheriger State und useEffect...
  
  if (loading) {
    return <div>Lade Benutzer...</div>;
  }
  
  if (error) {
    return <div>Fehler: {error}</div>;
  }
  
  return (
    <div>
      <h2>Benutzer Liste</h2>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
```

---
## **ÜBUNGSAUFGABE 1: Users von API laden**

**Aufgabe:** Erstelle eine Komponente, die Benutzer von einer API lädt und anzeigt.

**API Endpoint:** `https://jsonplaceholder.typicode.com/users`

**Anforderungen:**
- Ladezustand anzeigen
- Fehlerbehandlung
- Benutzer in einer Liste anzeigen
- Jeder Benutzer soll Name, E-Mail und Website zeigen

**Zeit: 15 Minuten**

---
## **Lösungsvorschlag Übung 1**

```tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

function UsersExercise() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Fehler beim Laden der Benutzer');
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Lade Benutzer...</div>;
  if (error) return <div>Fehler: {error}</div>;
  
  return (
    <div>
      <h2>Benutzer Liste ({users.length})</h2>
      {users.map(user => (
        <div key={user.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
}
```

---
## **POST Request: Daten an Server senden**

```tsx
function AddUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [saving, setSaving] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Fehler beim Erstellen des Users');
      }
      
      const newUser = await response.json();
      console.log('Neuer User:', newUser);
      // Hier würden wir den User zum State hinzufügen
      
      // Formular zurücksetzen
      setName('');
      setEmail('');
      
    } catch (error) {
      console.error('Fehler:', error);
    } finally {
      setSaving(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-Mail"
      />
      <button type="submit" disabled={saving}>
        {saving ? 'Wird gespeichert...' : 'User erstellen'}
      </button>
    </form>
  );
}
```

---
## **Problem: Prop Drilling**

**Was ist Prop Drilling?**
```tsx
// App.tsx hat den State
const [user, setUser] = useState(null);

// Aber eine tiefe Komponente braucht ihn auch:
<Header user={user} />
  <Navigation user={user} />
    <UserMenu user={user} />
      <Avatar user={user} /> {/* Braucht user eigentlich nur hier! */}
```

**Nachteile:**
- Komponenten erhalten Props die sie nicht brauchen
- Wartung wird schwieriger
- Unnötige Re-Render

---
## **Die Lösung: Global State Management**

Es gibt zwar von React die Möglichkeit mittels "React Context" einen globales State-Management, also komponentenübergreifend, zu nutzen aber Zustand ist einfacher, intuitiver und hat den Vorteil das es nicht permanent jede Komponente neu gerendet wird, welche das globale State-Management nutzt.

Deswegen nutzen wir..

**Zustand - Einfacher global State**
```bash
npm install zustand
```

**Vorteile von Zustand:**
- 🎯 Einfache API
- 🔄 Automatische Re-Renders
- 🛠 TypeScript Support
- 📦 Klein und schnell

---
## **Unser ersten Zustand Store**

```tsx
// stores/useUserStore.ts
import { create } from 'zustand';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  users: User[];
  setUser: (user: User) => void;
  addUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  users: [],
  setUser: (user) => set({ user }),
  addUser: (user) => set((state) => ({ 
    users: [...state.users, user] 
  })),
  clearUser: () => set({ user: null }),
}));
```

---
## **Zustand Store verwenden**

```tsx
// components/UserProfile.tsx
import { useUserStore } from '../stores/useUserStore';

function UserProfile() {
  // Nur die benötigten Werte auswählen
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  
  if (!user) {
    return <div>Bitte einloggen</div>;
  }
  
  return (
    <div>
      <h2>Profil von {user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => setUser(null)}>Ausloggen</button>
    </div>
  );
}
```

---
## **ÜBUNGSAUFGABE 2: Todo Store mit Zustand**

**Aufgabe:** Erstelle einen globalen Todo Store mit Zustand

**Anforderungen:**
- Store soll Todos halten
- Actions: addTodo, toggleTodo, deleteTodo
- TypeScript Interfaces definieren
- In einer Komponente verwenden

**Store Struktur:**
```tsx
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
```

**Zeit: 20 Minuten**

---
## **Lösungsvorschlag Übung 2**

```tsx
// stores/useTodoStore.ts
import { create } from 'zustand';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text: string) => 
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ],
    })),
  toggleTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    })),
  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
```

---
## **Todo Store in Komponente verwenden**

```tsx
// components/GlobalTodoApp.tsx
import { useState } from 'react';
import { useTodoStore } from '../stores/useTodoStore';

function GlobalTodoApp() {
  const [inputValue, setInputValue] = useState('');
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };
  
  return (
    <div>
      <h2>Globale Todo App ({todos.length} Todos)</h2>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Neues Todo..."
        />
        <button type="submit">Hinzufügen</button>
      </form>
      
      <div>
        {todos.map(todo => (
          <div key={todo.id} style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '5px 0'
          }}>
            <input 
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Löschen</button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---
## **ÜBUNGSAUFGABE 3: API + Zustand kombinieren**

**Aufgabe:** Lade Posts von einer API und speichere sie im globalen State

**API Endpoint:** `https://jsonplaceholder.typicode.com/posts`

**Anforderungen:**
- Posts beim Mount der Komponente laden
- Lade- und Fehlerzustände
- Posts im globalen Zustand Store speichern
- Posts in einer Liste anzeigen

**Bonus:** Toggle für "Favorite" Status der Posts

**Zeit: 25 Minuten**

---
## **Zusammenfassung Block 1, Tag 2**

**Was wir gelernt haben:**
1.  ✅ **Daten von APIs** mit fetch laden
2.  ✅ **Lade- und Fehlerzustände** handhaben
3.  ✅ **POST Requests** für das Erstellen von Daten
4.  ✅ **Global State** mit Zustand verwalten
5.  ✅ **Prop Drilling Problem** gelöst

**Du kannst jetzt:**
- Daten von externen Quellen laden
- Komplexe State-Situationen managen
- Globale Zustände in deiner App verwenden

---
## **Was kommt als nächstes?**

**⏸️ Kurze Pause**

**Dann:** **Block 2 - Echtzeit-Kommunikation mit WebSockets**
- Live-Daten mit WebSockets
- Chat-Anwendung bauen
- Echtzeit-Updates

**Bereit für Echtzeit-Kommunikation? 🚀**
```

Diese Präsentation enthält:

1. **Drei praktische Übungsaufgaben** mit steigendem Schwierigkeitsgrad
2. **Komplette Lösungsvorschläge** für jede Übung
3. **TypeScript Integration** throughout
4. **Realistische API-Beispiele** mit JSONPlaceholder
5. **Step-by-Step Erklärungen** von fetch und Zustand
6. **Praktische Tipps** für Error Handling und Loading States

Perfekt für einen interaktiven Workshop, bei dem der Teilnehmer das Gelernte sofort anwenden kann!