---
## **Block 2: Echtzeit-Kommunikation mit WebSockets**

**Live-Daten und Echtzeit-Updates 🚀**

*🎯 Ziel: Eine Echtzeit-Anwendung mit WebSockets bauen*

---
## **Problem: Request/Response ist nicht immer genug**

**REST APIs sind request-based:**
```tsx
// Client muss immer fragen
fetch('/api/messages')
  .then(response => response.json())
  .then(messages => {
    // Daten sind jetzt aktuell...
    // aber in 1 Sekunde schon veraltet!
  });
```

**Use Cases wo das nicht reicht:**
- 💬 Live Chat (WhatsApp, Slack)
- 📈 Live Dashboards (Aktien, Analytics)
- 👥 Kollaboration (Google Docs, Figma)
- 🎮 Multiplayer Spiele
- 🔔 Benachrichtigungen

---
## **Die Lösung: WebSockets**

**WebSockets = Persistente, bidirektionale Verbindung**

```
👨‍💻 Client
  │
  │ 🔌 Handshake (HTTP Upgrade)
  │
👨‍💻 Server
  │
  │ ✅ Verbindung etabliert
  │
  └───📨 Server kann pushen ────┐
      📨 Jederzeit Nachrichten │
      📨 Ohne Request          │
                               │
┌───📨 Client kann senden ─────┘
│
└───🔁 Echtzeit-Kommunikation!
```

---
## **WebSocket vs REST Vergleich**

| Aspekt | REST API | WebSockets |
|--------|----------|------------|
| **Verbindung** | Temporär | Persistent |
| **Kommunikation** | Request/Response | Bidirektional |
| **Datenfluss** | Client-initiiert | Beidseitig |
| **Echtzeit** | Polling nötig | Native Unterstützung |
| **Overhead** | Headers bei jedem Request | Nur beim Handshake |

---
## **WebSocket Events im Browser**

```typescript
// Verbindung herstellen
const socket = new WebSocket('ws://localhost:8080');

// Event Handler
socket.onopen = (event) => {
  console.log('✅ Verbindung zum Server geöffnet');
  socket.send('Hallo Server!');
};

socket.onmessage = (event) => {
  console.log('📨 Nachricht vom Server:', event.data);
  // → Hier Daten verarbeiten und State updaten
};

socket.onclose = (event) => {
  console.log('🔌 Verbindung geschlossen');
};

socket.onerror = (error) => {
  console.error('❌ WebSocket Fehler:', error);
};
```

---
## **WebSockets in React mit useEffect**

```tsx
import { useState, useEffect, useRef } from 'react';

function WebSocketComponent() {
  const [messages, setMessages] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);
  
  useEffect(() => {
    // WebSocket Verbindung aufbauen
    socketRef.current = new WebSocket('ws://localhost:8080');
    
    const socket = socketRef.current;
    
    socket.onopen = () => {
      console.log('✅ Verbunden mit WebSocket Server');
      setIsConnected(true);
    };
    
    socket.onmessage = (event) => {
      const newMessage = event.data;
      setMessages(prev => [...prev, newMessage]);
    };
    
    socket.onclose = () => {
      console.log('🔌 Verbindung geschlossen');
      setIsConnected(false);
    };
    
    // Cleanup: Verbindung schließen
    return () => {
      socket.close();
    };
  }, []); // Nur einmal beim Mount
    
  // Komponente wird fortgesetzt...
```

---
## **Nachrichten senden und empfangen**

```tsx
function WebSocketComponent() {
  // ...vorheriger State und useEffect...
  const [inputValue, setInputValue] = useState('');
  
  const sendMessage = () => {
    if (socketRef.current && inputValue.trim()) {
      socketRef.current.send(inputValue);
      setInputValue('');
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
  
  return (
    <div>
      <div>Status: {isConnected ? '✅ Verbunden' : '🔌 Getrennt'}</div>
      
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nachricht eingeben..."
          disabled={!isConnected}
        />
        <button onClick={sendMessage} disabled={!isConnected}>
          Senden
        </button>
      </div>
      
      <div>
        <h3>Nachrichten:</h3>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
}
```

---
## **JSON Daten mit WebSockets**

**In der Praxis: Meist JSON statt plain Text**

```tsx
interface ChatMessage {
  id: string;
  user: string;
  text: string;
  timestamp: number;
}

function ChatApp() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const socketRef = useRef<WebSocket | null>(null);
  
  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:8080');
    
    socketRef.current.onmessage = (event) => {
      // JSON Nachricht parsen
      const message: ChatMessage = JSON.parse(event.data);
      setMessages(prev => [...prev, message]);
    };
    
    return () => socketRef.current?.close();
  }, []);
  
  const sendMessage = (text: string, user: string) => {
    if (socketRef.current) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        user,
        text,
        timestamp: Date.now()
      };
      // Als JSON senden
      socketRef.current.send(JSON.stringify(message));
    }
  };
  
  // ...
}
```

---
## **WebSocket Hook für Wiederverwendbarkeit**

```tsx
// hooks/useWebSocket.ts
import { useState, useEffect, useRef, useCallback } from 'react';

interface UseWebSocketReturn {
  isConnected: boolean;
  messages: any[];
  sendMessage: (data: any) => void;
  lastMessage: any;
}

export function useWebSocket(url: string): UseWebSocketReturn {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const socketRef = useRef<WebSocket | null>(null);
  
  useEffect(() => {
    socketRef.current = new WebSocket(url);
    
    const socket = socketRef.current;
    
    socket.onopen = () => setIsConnected(true);
    socket.onclose = () => setIsConnected(false);
    socket.onerror = () => setIsConnected(false);
    
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages(prev => [...prev, data]);
      } catch (error) {
        console.error('Fehler beim Parsen der Nachricht:', error);
      }
    };
    
    return () => socket.close();
  }, [url]);
  
  const sendMessage = useCallback((data: any) => {
    if (socketRef.current && isConnected) {
      socketRef.current.send(JSON.stringify(data));
    }
  }, [isConnected]);
  
  return {
    isConnected,
    messages,
    sendMessage,
    lastMessage: messages[messages.length - 1] || null
  };
}
```

---
## **Live Demo: Echtzeit-Chat Anwendung**

**Gemeinsam bauen wir einen Live-Chat:**

```tsx
// components/LiveChat.tsx
import { useState } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

interface ChatMessage {
  id: string;
  user: string;
  text: string;
  timestamp: number;
}

function LiveChat() {
  const [currentUser, setCurrentUser] = useState('');
  const [messageInput, setMessageInput] = useState('');
  
  // WebSocket Hook verwenden
  const { isConnected, messages, sendMessage } = 
    useWebSocket('ws://localhost:8080/chat');
  
  const handleSendMessage = () => {
    if (messageInput.trim() && currentUser.trim()) {
      const chatMessage: ChatMessage = {
        id: Date.now().toString(),
        user: currentUser,
        text: messageInput,
        timestamp: Date.now()
      };
      sendMessage(chatMessage);
      setMessageInput('');
    }
  };
  
  // Komponente wird fortgesetzt...
```

---
## **Live-Chat: UI Komponente**

```tsx
function LiveChat() {
  // ...vorheriger State und Logik...
  
  if (!currentUser) {
    return (
      <div>
        <h2>Chat Login</h2>
        <input
          type="text"
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
          placeholder="Dein Name..."
        />
        <button onClick={() => setCurrentUser(currentUser.trim())}>
          Chat betreten
        </button>
      </div>
    );
  }
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Live Chat ({messages.length} Nachrichten)</h2>
        <div>
          Status: {isConnected ? '✅ Online' : '🔌 Offline'}
          <span style={{ marginLeft: '10px' }}>
            Eingeloggt als: <strong>{currentUser}</strong>
          </span>
        </div>
      </div>
      
      {/* Nachrichten Bereich */}
      <div style={{ 
        height: '300px', 
        border: '1px solid #eee', 
        overflowY: 'auto',
        marginBottom: '10px',
        padding: '10px'
      }}>
        {messages.map((msg: ChatMessage) => (
          <div key={msg.id} style={{ 
            marginBottom: '8px',
            padding: '5px',
            backgroundColor: msg.user === currentUser ? '#e3f2fd' : '#f5f5f5'
          }}>
            <strong>{msg.user}:</strong> {msg.text}
            <small style={{ color: '#666', marginLeft: '10px' }}>
              {new Date(msg.timestamp).toLocaleTimeString()}
            </small>
          </div>
        ))}
      </div>
      
      {/* Eingabe Bereich */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Nachricht eingeben..."
          style={{ flex: 1 }}
          disabled={!isConnected}
        />
        <button 
          onClick={handleSendMessage}
          disabled={!isConnected || !messageInput.trim()}
        >
          Senden
        </button>
      </div>
    </div>
  );
}
```

---
## **ÜBUNGSAUFGABE 1: Live Todo-Liste**

**Aufgabe:** Baue eine Todo-Liste, die in Echtzeit über WebSockets synchronisiert wird.

**Anforderungen:**
- Todos werden über WebSockets an alle Clients gesendet
- Jeder Client kann Todos hinzufügen/toggle/löschen
- Änderungen sind sofort bei allen Clients sichtbar

**WebSocket Server:** `ws://localhost:8080/todos`

**Zeit: 25 Minuten**

---
## **Lösungsvorschlag Übung 1**

```tsx
// components/LiveTodoApp.tsx
import { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  timestamp: number;
}

interface TodoMessage {
  type: 'ADD_TODO' | 'TOGGLE_TODO' | 'DELETE_TODO';
  payload: any;
}

function LiveTodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const { isConnected, sendMessage, lastMessage } = 
    useWebSocket('ws://localhost:8080/todos');
  
  // WebSocket Nachrichten verarbeiten
  useEffect(() => {
    if (lastMessage) {
      const message: TodoMessage = lastMessage;
      
      switch (message.type) {
        case 'ADD_TODO':
          setTodos(prev => [...prev, message.payload]);
          break;
        case 'TOGGLE_TODO':
          setTodos(prev => 
            prev.map(todo => 
              todo.id === message.payload.id 
                ? { ...todo, completed: message.payload.completed }
                : todo
            )
          );
          break;
        case 'DELETE_TODO':
          setTodos(prev => prev.filter(todo => todo.id !== message.payload.id));
          break;
      }
    }
  }, [lastMessage]);
  
  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: inputValue,
        completed: false,
        timestamp: Date.now()
      };
      
      sendMessage({
        type: 'ADD_TODO',
        payload: newTodo
      });
      
      setInputValue('');
    }
  };
  
  const toggleTodo = (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      sendMessage({
        type: 'TOGGLE_TODO',
        payload: {
          id,
          completed: !todo.completed
        }
      });
    }
  };
  
  const deleteTodo = (id: string) => {
    sendMessage({
      type: 'DELETE_TODO',
      payload: { id }
    });
  };
  
  return (
    <div>
      <h2>Live Todo List ({todos.length}) - {isConnected ? '✅' : '🔌'}</h2>
      
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Neues Todo..."
          disabled={!isConnected}
        />
        <button onClick={addTodo} disabled={!isConnected}>
          Hinzufügen
        </button>
      </div>
      
      <div>
        {todos.map(todo => (
          <div key={todo.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '5px 0',
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              disabled={!isConnected}
            />
            <span>{todo.text}</span>
            <small style={{ color: '#666' }}>
              {new Date(todo.timestamp).toLocaleTimeString()}
            </small>
            <button 
              onClick={() => deleteTodo(todo.id)}
              disabled={!isConnected}
            >
              Löschen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---
## **Produktions-Ready: socket.io**

**Problem mit reinen WebSockets:**
- Keine automatische Reconnection
- Kein Fallback auf HTTP-Polling
- Keine built-in Error Handling

**Lösung: socket.io-client**
```bash
npm install socket.io-client
```

---
## **socket.io in React**

```tsx
// hooks/useSocketIO.ts
import { useState, useEffect, useRef, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

export function useSocketIO(url: string) {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);
  
  useEffect(() => {
    // Socket.io Verbindung
    socketRef.current = io(url, {
      transports: ['websocket', 'polling'] // Fallback
    });
    
    const socket = socketRef.current;
    
    socket.on('connect', () => {
      console.log('✅ Mit Socket.IO Server verbunden');
      setIsConnected(true);
    });
    
    socket.on('disconnect', () => {
      console.log('🔌 Von Socket.IO Server getrennt');
      setIsConnected(false);
    });
    
    socket.on('connect_error', (error) => {
      console.error('❌ Socket.IO Verbindungsfehler:', error);
    });
    
    // Cleanup
    return () => {
      socket.disconnect();
    };
  }, [url]);
  
  const emit = useCallback((event: string, data: any) => {
    if (socketRef.current) {
      socketRef.current.emit(event, data);
    }
  }, []);
  
  const on = useCallback((event: string, callback: (data: any) => void) => {
    if (socketRef.current) {
      socketRef.current.on(event, callback);
    }
  }, []);
  
  return {
    isConnected,
    emit,
    on
  };
}
```

---
## **Zusammenfassung WebSockets**

**Was wir gelernt haben:**
1.  ✅ **WebSocket Grundkonzepte** und Vergleich zu REST
2.  ✅ **WebSocket API** im Browser verwenden
3.  ✅ **WebSockets in React** mit useEffect integrieren
4.  ✅ **Custom Hook** für Wiederverwendbarkeit
5.  ✅ **Echtzeit-Anwendungen** bauen (Chat, Live-Todos)
6.  ✅ **socket.io** für Production-Use

**Du kannst jetzt:**
- Echtzeit-Features in React Apps implementieren
- WebSocket Connections managen
- Live-Updates zwischen Clients synchronisieren
- Robuste WebSocket-Lösungen bauen

---
## **Und jetzt: Praktische Anwendung!**

**Wir haben alle Grundlagen für:**
- Live Chat Systeme
- Kollaborative Anwendungen
- Echtzeit-Dashboards
- Multiplayer Features

**Nächster Block: Routing mit React Router!**

---
## **Bereit für die nächste Challenge? 🚀**

**In der Pause:** Probiere den Live-Chat aus und experimentiere mit den WebSocket-Nachrichten!

**Danach:** Wir lernen, wie wir zwischen verschiedenen "Seiten" in unserer SPA navigieren!
```