## **JavaScript & TypeScript Crashkurs**

**Ziel: Die absoluten Essentials für React verstehen**

*🎯 Wir konzentrieren uns nur auf das, was du für React brauchst!*

---

## **Warum dieser Crashkurs?**

**React ist "just JavaScript" - aber modernes JavaScript!**

Um React zu verstehen, musst du zuerst die Sprache verstehen, in der sie geschrieben ist.

**Heute lernen wir das Vokabular, bevor wir die Gedichte schreiben.**

Doch zuerst:
Erstelle eine Datei in deinem Projekt: "index.js"

Diese kannst du dann mit dem Befehl "node index.js" ausführen.

---
## **Modern JavaScript Essentials**

**Die neuen Schlüsselwörter: `let` & `const`**

```javascript
// Alte Schule - nicht mehr verwenden!
var name = "Peter";

// Moderne Schule
let age = 25;        // Kann geändert werden
const name = "Peter"; // Kann NICHT geändert werden

age = 26; // ✅ Funktioniert
name = "Hans"; // ❌ Fehler: Constant cannot be changed
```

**Warum?** `const` macht deinen Code vorhersehbarer und weniger fehleranfällig.

---
## **Arrow Functions `() => {}`**

**Die kompakte Funktions-Syntax**

```javascript
// Traditionelle Funktion
function sayHello(name) {
  return "Hallo " + name;
}

// Arrow Function
const sayHello = (name) => {
  return "Hallo " + name;
};

// Noch kürzer (implizite Rückgabe)
const sayHello = (name) => "Hallo " + name;
```

**In React wirst du das überall sehen!**

---
## **Template Literals**

**Strings mit Superkräften**

```javascript
// Alte Weise - mühsam
const greeting = "Hallo " + name + ", du bist " + age + " Jahre alt.";

// Moderne Weise - sauber
const greeting = `Hallo ${name}, du bist ${age} Jahre alt.`;

// Auch mehrzeilig möglich
const message = `
  Lieber ${name},
  
  Willkommen in unserer App!
  Dein Alter: ${age}
`;
```

---
## **Destructuring**

**Daten aus Objekten und Arrays extrahieren**

```javascript
// Objekt-Destructuring
const user = { name: "Peter", age: 25, city: "Berlin" };

// Alte Weise
const name = user.name;
const age = user.age;

// Moderne Weise
const { name, age } = user;
console.log(name); // "Peter"
console.log(age);  // 25
```

**Das wirst du bei React Props ständig verwenden!**

---
## **Destructuring bei Arrays**

```javascript
const colors = ["red", "green", "blue"];

// Alte Weise
const first = colors[0];
const second = colors[1];

// Moderne Weise
const [first, second] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// Besonders nützlich bei useState in React
const [count, setCount] = useState(0);
```

---
## **Object Spread Operator `...`**

**Objekte und Arrays kopieren und erweitern**

```javascript
const user = { name: "Peter", age: 25 };

// Alte Weise - umständlich
const updatedUser = {
  name: user.name,
  age: user.age,
  city: "Berlin" // Neue Eigenschaft
};

// Moderne Weise - elegant
const updatedUser = {
  ...user,          // Alle Eigenschaften von user kopieren
  city: "Berlin"    // Neue Eigenschaft hinzufügen
};

console.log(updatedUser);
// { name: "Peter", age: 25, city: "Berlin" }
```

---
## **Spread Operator für Updates**

**WICHTIG für React State Updates!**

```javascript
const settings = { theme: "dark", notifications: true, language: "de" };

// Nur eine Eigenschaft ändern
const updatedSettings = {
  ...settings,        // Alte Werte kopieren
  theme: "light"      // theme überschreiben
};

// Mehrere Eigenschaften ändern
const finalSettings = {
  ...updatedSettings,
  notifications: false,
  language: "en"
};

console.log(finalSettings);
// { theme: "light", notifications: false, language: "en" }
```

---
## **Spread Operator mit Arrays**

```javascript
const fruits = ["apple", "banana"];

// Am Ende hinzufügen
const moreFruits = [...fruits, "orange"];
// ["apple", "banana", "orange"]

// Am Anfang hinzufügen
const evenMoreFruits = ["kiwi", ...fruits];
// ["kiwi", "apple", "banana"]

// Arrays kombinieren
const vegetables = ["carrot", "spinach"];
const food = [...fruits, ...vegetables];
// ["apple", "banana", "carrot", "spinach"]
```

---
## **Warum Spread Operator in React so wichtig ist**

**React State ist immutable (unveränderbar)!**

```javascript
// ❌ FALSCH - Direkt mutieren (funktioniert nicht in React)
const [user, setUser] = useState({ name: "Peter", age: 25 });
user.age = 26; // Direkte Mutation - React merkt keine Änderung!
setUser(user); // Trigger kein Re-Render!

// ✅ RICHTIG - Neues Objekt mit Spread Operator
const [user, setUser] = useState({ name: "Peter", age: 25 });
setUser({
  ...user,    // Alten State kopieren
  age: 26     // Nur age ändern
}); // ✅ React merkt die Änderung und rendert neu!
```

---
## **Praktisches Beispiel: Todo Updates**

```javascript
const [todos, setTodos] = useState([
  { id: 1, text: "React lernen", completed: false },
  { id: 2, text: "TypeScript üben", completed: true }
]);

// Todo als erledigt markieren
const toggleTodo = (id) => {
  setTodos(todos.map(todo => 
    todo.id === id 
      ? { ...todo, completed: !todo.completed } // Neues Objekt mit geändertem completed
      : todo
  ));
};

// Neues Todo hinzufügen
const addTodo = (text) => {
  const newTodo = { id: Date.now(), text, completed: false };
  setTodos([...todos, newTodo]); // Neues Array mit neuem Todo
};
```

---
## **Modul-System: `import` & `export`**

**Wie Code-Teile miteinander kommunizieren**

```javascript
// math.js - Datei exportiert Funktionen
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// App.js - Datei importiert Funktionen
import { add, multiply } from './math.js';

console.log(add(2, 3)); // 5
```

**So werden React-Komponenten importiert/exportiert!**

---
## **Die wichtigsten Konzepte für React**

**Datenstrukturen: Arrays & Objekte**

```javascript
// Objekt - für Eigenschaften
const user = {
  id: 1,
  name: "Peter",
  isActive: true
};

// Array - für Listen
const todos = [
  { id: 1, text: "React lernen", done: false },
  { id: 2, text: "TypeScript üben", done: true }
];
```

**React Components arbeiten mit diesen Datenstrukturen!**

---
## **Array-Methoden: `.map()`**

**Die wichtigste Methode für React!**

```javascript
const numbers = [1, 2, 3, 4];

// .map() erzeugt ein NEUES Array
const doubled = numbers.map(number => number * 2);
// doubled = [2, 4, 6, 8]

// In React für Listen-Rendering:
const todoList = todos.map(todo => 
  `<li>${todo.text}</li>`
);
```

**Warum kritisch?** In JSX rendern wir Listen mit `.map()`!

---
## **Array-Methoden: `.filter()`**

**Daten filtern basierend auf Bedingungen**

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Nur gerade Zahlen behalten
const evenNumbers = numbers.filter(number => number % 2 === 0);
// evenNumbers = [2, 4, 6]

const activeTodos = todos.filter(todo => !todo.done);
// Nur nicht-erledigte Todos
```

**Sehr nützlich für Suchfunktionen, Filter etc.**

---
## **Praktisches Beispiel: `.map()` + `.filter()`**

```javascript
const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Mouse", price: 25, inStock: false },
  { id: 3, name: "Keyboard", price: 75, inStock: true }
];

// Verfügbare Produkte als Liste anzeigen
const availableProducts = products
  .filter(product => product.inStock)
  .map(product => product.name);

// ["Laptop", "Keyboard"]
```

**Genau so wirst du es in React verwenden!**

---
## **TypeScript: Warum?**

Frage an den Kursteilnehmer:

Findest du den Fehler in folgendem Funktionsaufruf?

```javascript
function test(a) {
  return a.name * 2;
}

console.log(test());
```

Wie kann ich Javascript sicherstellen, dass der übergebene Funktionsparameter den Code nicht kaputt macht? 
Hast du eine Idee?

**JavaScript mit Typ-Sicherheit**

Erstelle eine Datei in deinem Projekt: "index.ts"

Du kannst die Datei mittels "npx tsx index.ts" ausführen. Sollte der Befehl "npx"
bei dir nicht vorhanden sein, kannst du mit dem Befehl "npm i -g npx" npx nachinstallieren.

**Problem mit purem JavaScript:**
```javascript
function greet(user) {
  return `Hallo ${user.nam}`; // Tippfehler! 
}

greet({ name: "Peter" }); // "Hallo undefined" 😕
```

**TypeScript findet den Fehler SOFORT!**
```typescript
// 🔴 ROTER UNTERSTRICH: Property 'nam' does not exist
```

---
## **Grundlegende TypeScript Typen**

```typescript
// String
const name: string = "Peter";

// Number
const age: number = 25;

// Boolean
const isActive: boolean = true;

// Any (Vorsicht! Verliert Typ-Sicherheit)
const something: any = "kann alles sein";
```

**Die IDE hilft dir basierend auf diesen Typen!**

---
## **Typisierung von Funktionen**

**Parameter und Rückgabewerte typisieren**

```typescript
// JavaScript
function add(a, b) {
  return a + b;
}

// TypeScript - viel sicherer!
function add(a: number, b: number): number {
  return a + b;
}

add(2, 3);     // ✅ Funktioniert
add("2", "3"); // ❌ Fehler: strings not assignable to number
```

---
## **Objekte typisieren mit `interface`**

**Die Form deiner Objekte definieren**

```typescript
// Interface definieren
interface User {
  id: number;
  name: string;
  age?: number; // Optional mit ?
}

// Jetzt müssen Objekte diesem Interface folgen
const user: User = {
  id: 1,
  name: "Peter"
  // age ist optional, also okay
};

const invalidUser: User = {
  id: 1
  // ❌ Fehler: Property 'name' is missing
};
```

---
## **Alternative: `type`**

```typescript
// Sehr ähnlich zu interface
type Product = {
  id: number;
  name: string;
  price: number;
};

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 999
};
```

**Für den Anfang: `interface` und `type` sind sehr ähnlich verwendbar.**

---
## **Der "rote Unterstrich" ist dein Freund!**

**TypeScript ist wie ein hilfsbereiter Kollege:**

```typescript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todo: Todo = {
  id: 1,
  text: "React lernen",
  // 🔴 ROTER UNTERSTRICH: 
  // Property 'completed' is missing
};

// Mouse-over zeigt dir genau das Problem!
```

**Lerne, die Fehlermeldungen zu lesen - sie helfen dir!**

---
## **Zusammenfassung JavaScript/TypeScript**

**Was du mitnimmst:**
- ✅ `const`/`let`, Arrow Functions, Template Literals
- ✅ **Destructuring, Spread Operator**, Modules
- ✅ **Wichtig:** `.map()` und `.filter()`
- ✅ TypeScript Grundtypen und Interfaces
- ✅ **Ziel:** Den roten Unterstrich verstehen und beheben

**Du bist jetzt bereit für React! 🚀**

---
## **Gleich geht's weiter mit React!**

**⏸️ Kurze Pause**

**Danach:** Wir starten mit unserer ersten React-Komponente!
```

Die wichtigsten Ergänzungen:

1. **Object Spread Operator Grundlagen** - Wie man Objekte kopiert und erweitert
2. **Spread Operator mit Arrays** - Für immutable Array-Updates
3. **React State Zusammenhang** - Warum Spread Operator für State Updates essentiell ist
4. **Praktisches Todo-Beispiel** - Konkrete Anwendung in React

Der Spread Operator ist **kritisch wichtig** für React, da er das Prinzip der **Immutability** (Unveränderbarkeit) ermöglicht, das React für performante Updates benötigt!