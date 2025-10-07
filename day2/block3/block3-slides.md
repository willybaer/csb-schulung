## **Block 3: Routing & Best Practices**

**Navigation und professionelle Entwicklung 🚀**

*🎯 Ziel: Mehrseitige Anwendungen und Production-Ready Code*

---
## **Problem: Wie macht man "Seiten" in einer SPA?**

**Single-Page Application = Eine HTML-Datei**

```html
<!-- So startet unsere App -->
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <!-- ALLE Komponenten werden hier gerendert -->
  </body>
</html>
```

**Frage:** Wie wechseln wir zwischen Login, Dashboard, Profil etc.?

---
## **Die Lösung: Client-Side Routing**

**React Router - Der Standard für Routing**

```bash
npm install react-router-dom
```

**Konzept:** URL ändert sich, aber die Seite wird nicht neu geladen!

```
URL: /          → Home Komponente
URL: /about     → About Komponente  
URL: /users     → Users Komponente
URL: /users/123 → UserDetail Komponente
```

---
## **Grundaufbau: Router einrichten**

```tsx
// main.tsx
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

**BrowserRouter** macht die Routing-Funktionalität in der ganzen App verfügbar.

---
## **Routen definieren**

```tsx
// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

function App() {
  return (
    <div className="app">
      {/* Navigation kommt hier */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
```

---
## **Navigation mit Links**

```tsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}
```

**Wichtig:** `Link` statt `<a href="">` verwenden!

**Warum?** `Link` verhindert Seiten-Neuladung.

---
## **Aktive Links stylen**

```tsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black',
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        Home
      </NavLink>
      
      <NavLink 
        to="/about"
        className={({ isActive }) => 
          isActive ? 'active-link' : 'normal-link'
        }
      >
        About
      </NavLink>
    </nav>
  );
}
```

---
## **Dynamische Routen mit Parametern**

```tsx
// Routen definieren
<Routes>
  <Route path="/users" element={<Users />} />
  <Route path="/users/:userId" element={<UserDetail />} />
</Routes>

// UserDetail Komponente
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams(); // userId aus URL extrahieren
  
  return (
    <div>
      <h2>User Details</h2>
      <p>Zeige Informationen für User ID: {userId}</p>
    </div>
  );
}
```

**URL:** `/users/123` → `userId = "123"`

---
## **ÜBUNGSAUFGABE 1: Basis Routing**

**Aufgabe:** Erstelle eine App mit Navigation und 3 Seiten

**Anforderungen:**
- Home Seite (`/`)
- About Seite (`/about`) 
- Products Seite (`/products`)
- Navigation mit Links
- Aktiver Link soll anders gestylt sein

**Komponenten:**
- `Home` - Zeigt "Willkommen auf der Homepage"
- `About` - Zeigt "Über uns" Informationen
- `Products` - Zeigt "Unsere Produkte"

**Zeit: 20 Minuten**

---
## **Lösungsvorschlag Übung 1**

```tsx
// App.tsx
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

// components/Navigation.tsx
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '20px', borderBottom: '1px solid #ccc' }}>
      <NavLink 
        to="/"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black',
          textDecoration: 'none',
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black',
          textDecoration: 'none',
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        About
      </NavLink>
      <NavLink 
        to="/products"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black',
          textDecoration: 'none',
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        Products
      </NavLink>
    </nav>
  );
}

// pages/Home.tsx
function Home() {
  return (
    <div>
      <h1>Willkommen auf der Homepage</h1>
      <p>Dies ist die Startseite unserer App.</p>
    </div>
  );
}

// pages/About.tsx und pages/Products.tsx ähnlich...
```

---
## **Programmatische Navigation**

**Manuell zu einer Route navigieren**

```tsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      // Login Logik...
      await loginUser(email, password);
      
      // Nach erfolgreichem Login zum Dashboard navigieren
      navigate('/dashboard');
      
      // Oder mit Replace (keine Zurück-Funktion)
      // navigate('/dashboard', { replace: true });
      
      // Oder mit State übergeben
      // navigate('/dashboard', { state: { user: userData } });
    } catch (error) {
      console.error('Login fehlgeschlagen');
    }
  };
  
  return (
    <form onSubmit={handleLogin}>
      {/* Formular Inhalte */}
    </form>
  );
}
```

---
## **Daten zwischen Routen übergeben**

```tsx
// Mit State
navigate('/user-profile', { 
  state: { user: currentUser, from: 'login' }
});

// In der Zielkomponente
import { useLocation } from 'react-router-dom';

function UserProfile() {
  const location = useLocation();
  const { user, from } = location.state || {};
  
  return (
    <div>
      <h1>Profil von {user?.name}</h1>
      <p>Weitergeleitet von: {from}</p>
    </div>
  );
}
```

---
## **Best Practice: Data Fetching mit React Query**

**Problem mit fetch + useEffect:**
- ❌ Kein Caching
- ❌ Schwieriges Error Handling
- ❌ Keine automatischen Background Updates
- ❌ Komplexes Loading State Management

**Lösung: React Query (TanStack Query)**
```bash
npm install @tanstack/react-query
```

---
## **React Query Setup**

```tsx
// main.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
```

---
## **useQuery Hook verwenden**

```tsx
import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  email: string;
}

function UsersList() {
  const { 
    data: users, 
    isLoading, 
    error,
    isError,
    refetch 
  } = useQuery({
    queryKey: ['users'], // Eindeutiger Key für Caching
    queryFn: async (): Promise<User[]> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch');
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 Minuten Cache
  });

  if (isLoading) return <div>Lade Benutzer...</div>;
  if (isError) return <div>Fehler: {(error as Error).message}</div>;
  
  return (
    <div>
      <button onClick={() => refetch()}>Neu laden</button>
      {users?.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

---
## **ÜBUNGSAUFGABE 2: Produkt-Katalog mit Routing**

**Aufgabe:** Erstelle einen Produkt-Katalog mit Detailseiten

**Anforderungen:**
- Produkt-Übersichtsseite (`/products`)
- Produkt-Detailseite (`/products/:id`)
- Produkte von API laden: `https://fakestoreapi.com/products`
- React Query für Data Fetching verwenden
- Navigation zwischen Übersicht und Details

**Bonus:** Ladezustände und Error Handling

**Zeit: 30 Minuten**

---
## **Lösungsvorschlag Übung 2**

```tsx
// pages/Products.tsx
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

function Products() {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      return response.json();
    }
  });

  if (isLoading) return <div>Produkte werden geladen...</div>;
  if (error) return <div>Fehler: {(error as Error).message}</div>;

  return (
    <div>
      <h1>Unsere Produkte</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {products?.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
            <h3>{product.title}</h3>
            <p>Preis: ${product.price}</p>
            <p>Kategorie: {product.category}</p>
            <Link to={`/products/${product.id}`}>
              <button>Details anzeigen</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// pages/ProductDetail.tsx
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

interface ProductDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  
  const { data: product, isLoading, error } = useQuery<ProductDetail>({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) throw new Error('Product not found');
      return response.json();
    }
  });

  if (isLoading) return <div>Produkt wird geladen...</div>;
  if (error) return <div>Fehler: {(error as Error).message}</div>;
  if (!product) return <div>Produkt nicht gefunden</div>;

  return (
    <div>
      <Link to="/products">← Zurück zur Übersicht</Link>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <img src={product.image} alt={product.title} style={{ width: '300px' }} />
        <div>
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <p>Kategorie: {product.category}</p>
          <p>Bewertung: {product.rating.rate} ⭐ ({product.rating.count} Bewertungen)</p>
          <button>In den Warenkorb</button>
        </div>
      </div>
    </div>
  );
}

// App.tsx Routes ergänzen
<Routes>
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<ProductDetail />} />
</Routes>
```

---
## **CORS Problem verstehen**

**Was ist CORS?**
- Cross-Origin Resource Sharing
- Browser-Sicherheitsfeature
- Verhindert requests zu anderen Domains

**Wann tritt es auf?**
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`
- → Unterschiedliche Origins!

---
## **CORS Lösung**

**Wer muss CORS lösen? DAS BACKEND!**

```javascript
// Node.js Express Beispiel
const express = require('express');
const cors = require('cors');

const app = express();

// CORS für alle Routes aktivieren
app.use(cors());

// Oder spezifisch konfigurieren
app.use(cors({
  origin: 'http://localhost:5173', // Nur unser Frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
```

**Frontend kann CORS nicht "reparieren"!**

---
## **Development Workaround: Proxy**

**In Vite: vite.config.ts**
```ts
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
}
```

**Dann im Frontend:**
```tsx
// Statt: fetch('http://localhost:3000/api/users')
// Verwende: fetch('/api/users') // Gleiche Origin = Kein CORS!
```

---
## **Zusammenfassung Block 3**

**Was wir gelernt haben:**
1.  ✅ **Client-Side Routing** mit React Router
2.  ✅ **Routen definieren** und navigieren
3.  ✅ **Dynamische Routen** mit Parametern
4.  ✅ **Programmatische Navigation**
5.  ✅ **Data Fetching** mit React Query
6.  ✅ **CORS Problem** verstehen und lösen

**Du kannst jetzt:**
- Mehrseitige React Apps erstellen
- Professionelles Data Fetching implementieren
- Routing-basierte Anwendungen bauen
- Production-Ready Code schreiben

---
## **Production Checkliste**

**Bevor du deployst:**
- [ ] **Error Boundaries** für Fehlerbehandlung
- [ ] **Loading States** für bessere UX
- [ ] **TypeScript** für Type Safety
- [ ] **React Query** für Data Management
- [ ] **Responsive Design**
- [ ] **Accessibility** (a11y) überprüfen

---
## **Was kommt als nächstes?**

**Letzter Block heute:**
- **Styling mit Tailwind CSS**
- **React Ökosystem** (React Native, Next.js)
- **Zusammenfassung** und Ausblick

**Du hast fast alle React-Grundlagen gemeistert! 🎉**