## **Interaktivität & State Management**

**Jetzt wird's dynamisch! 🎯**

*🎯 Ziel: Deine Komponenten interaktiv machen und State verwalten*

---
## **Was wir bisher können**

1.  ✅ **Komponenten** erstellen und wiederverwenden
2.  ✅ **Props** für Datenfluss nach unten
3.  ✅ **Listen rendern** mit `.map()`
4.  ✅ **TypeScript** für Typ-Sicherheit

**Aber unsere Komponenten sind noch statisch...**

---
## **Das Problem: Statische Komponenten**

```tsx
function Counter() {
  const count = 0; // Immer 0 - langweilig!
  
  return (
    <div>
      <p>Count: {count}</p>
      <button>+</button>
    </div>
  );
}
```

**Der Button macht nichts! 😕**

---
## **Event Handler: Auf Benutzer-Aktionen reagieren**

```tsx
function Button() {
  const handleClick = () => {
    console.log('Button wurde geklickt!');
    alert('Hallo React!');
  };

  return (
    <button onClick={handleClick}>
      Klick mich!
    </button>
  );
}
```

**Event Handler sind normale JavaScript-Funktionen!**

---
## **Häufige Events in React**

```tsx
function EventExamples() {
  const handleClick = () => console.log('Klick');
  const handleChange = (e) => console.log('Input:', e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formular abgeschickt');
  };

  return (
    <div>
      {/* Click Event */}
      <button onClick={handleClick}>Klick</button>
      
      {/* Input Change */}
      <input type="text" onChange={handleChange} />
      
      {/* Form Submit */}
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Abschicken</button>
      </form>
    </div>
  );
}
```

---
## **Das Problem: Re-Rendering**

```tsx
function BrokenCounter() {
  let count = 0;
  
  const increment = () => {
    count = count + 1;
    console.log('Neuer Count:', count); // Log zeigt korrekten Wert
    // ABER: Die Komponente wird nicht neu gerendert!
  };

  return (
    <div>
      <p>Count: {count}</p> {/* Zeigt immer 0! */}
      <button onClick={increment}>+</button>
    </div>
  );
}
```

**Problem: Änderungen an Variablen lösen kein Re-Rendering aus!**

---
## **Die Lösung: useState Hook**

```tsx
import { useState } from 'react';

function Counter() {
  // useState gibt zurück: [aktuellerWert, setterFunktion]
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1); // Trigger Re-Rendering!
  };

  return (
    <div>
      <p>Count: {count}</p> {/* Aktualisiert sich automatisch! */}
      <button onClick={increment}>+</button>
    </div>
  );
}
```

---
## **useState verstehen**

```tsx
// useState Syntax
const [state, setState] = useState(initialValue);

// Beispiele
const [name, setName] = useState(''); // string
const [age, setAge] = useState(0);    // number
const [isActive, setIsActive] = useState(false); // boolean
const [todos, setTodos] = useState([]); // array
const [user, setUser] = useState({ name: '', age: 0 }); // object
```

**Wichtig: State immer mit der Setter-Funktion aktualisieren!**

---
## **State mit TypeScript typisieren**

```tsx
import { useState } from 'react';

interface User {
  name: string;
  age: number;
  email: string;
}

function UserProfile() {
  // Explizite Typisierung für komplexe Objekte
  const [user, setUser] = useState<User>({
    name: '',
    age: 0,
    email: ''
  });
  
  const [todos, setTodos] = useState<string[]>([]); // Array von strings
  const [count, setCount] = useState<number>(0);    // number

  // TypeScript weiß jetzt die Typen!
  setUser({ name: 'Peter', age: 25, email: 'peter@example.com' });
  setTodos(['React lernen', 'TypeScript üben']);
}
```

---
## **State aktualisieren: WICHTIGE REGELN**

```tsx
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    // ❌ Falsch - direkt mutieren
    // count = count + 1;
    
    // ❌ Falsch - zweimal aufrufen
    // setCount(count + 1);
    // setCount(count + 1); // count ist immer noch der alte Wert!
    
    // ✅ Richtig - mit Funktion für aktuelle State
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // Jetzt +2!
  };

  return <button onClick={increment}>Count: {count}</button>;
}
```

---
## **Praktisches Beispiel: Todo mit State**

```tsx
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  
  const addTodo = () => {
    if (inputValue.trim() === '') return;
    
    const newTodo: Todo = {
      id: Date.now(), // Einfache ID-Generierung
      text: inputValue,
      completed: false
    };
    
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setInputValue(''); // Input zurücksetzen
  };
  
  // Komponente wird fortgesetzt...
```

---
## **Todo-App: Todos anzeigen und toggle**

```tsx
function TodoApp() {
  // ...vorheriger State...
  
  const toggleTodo = (id: number) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };
  
  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Neues Todo..."
        />
        <button onClick={addTodo}>Hinzufügen</button>
      </div>
      
      {/* Todos anzeigen */}
      {todos.map(todo => (
        <div key={todo.id} style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
          <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Löschen</button>
        </div>
      ))}
    </div>
  );
}
```

---
## **Formulare in React: Controlled Components**

```tsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,        // Alten State behalten
      [name]: value   // Nur das geänderte Feld updaten
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulardaten:', formData);
    // An API senden...
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input 
        type="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-Mail"
      />
      <textarea 
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Nachricht"
      />
      <button type="submit">Senden</button>
    </form>
  );
}
```

---
## **Kommunikation: Kind → Parent**

**Wie eine Kind-Komponente den Parent informiert**

```tsx
// Kind-Komponente
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Löschen</button>
    </div>
  );
}
```

---
## **Parent-Komponente mit Callbacks**

```tsx
// Parent-Komponente
function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  // Callback-Funktionen
  const handleToggle = (id: number) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };
  
  const handleDelete = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      {/* ... Input für neue Todos ... */}
      
      {/* Kind-Komponente mit Callbacks */}
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
```

---
## **Live-Coding: Shopping Cart**

**Gemeinsam bauen wir einen Einkaufswagen:**

```tsx
interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

function ShoppingCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const products: Product[] = [
    { id: 1, name: 'React Buch', price: 29.99 },
    { id: 2, name: 'TypeScript Guide', price: 24.99 },
    { id: 3, name: 'JavaScript Kurs', price: 39.99 }
  ];
  
  // Gemeinsam implementieren:
  // - addToCart(product)
  // - removeFromCart(productId)
  // - updateQuantity(productId, newQuantity)
  // - calculateTotal()
}
```

---
## **Zusammenfassung Block 4**

**Was wir gelernt haben:**
1.  ✅ **Event Handler** (`onClick`, `onChange`, `onSubmit`)
2.  ✅ **State Management** mit `useState` Hook
3.  ✅ **State Updates** (immer mit Setter, nie direkt mutieren)
4.  ✅ **Forms** als Controlled Components
5.  ✅ **Kommunikation** Kind → Parent via Callbacks

**Du kannst jetzt:**
- Interaktive Komponenten bauen
- State verwalten und aktualisieren
- Komplexe Formulare handhaben
- Komponenten kommunizieren lassen

---
## **Wichtige Concepts verstanden**

**State vs. Props:**
- **Props:** Daten von Parent → Kind (read-only)
- **State:** Interne Daten der Komponente (veränderbar)

**Immer beachten:**
- State ist immutable (nicht direkt ändern!)
- State Updates sind asynchron
- UseState mit Funktion für abhängige Updates

---
## **Was kommt als nächstes?**

**🎉 Super! Du hast die React-Basics gemeistert!**

**Morgen in Tag 2:**
- **REST APIs** und Daten von Servern laden
- **Global State** mit Zustand
- **Routing** zwischen Seiten
- **WebSockets** für Echtzeit-Kommunikation
- **Best Practices** und Production-Ready Code

**Du bist jetzt bereit für fortgeschrittene Themen! 🚀**