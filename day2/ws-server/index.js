// index.js
const WebSocket = require('ws');

// WebSocket-Server auf Port 8080 erstellen
const wss = new WebSocket.Server({ port: 8080 });
console.log('WebSocket-Server läuft auf ws://localhost:8080');

// Event-Handler für eingehende Verbindungen
wss.on('connection', (ws) => {
    console.log('Neuer Client verbunden');

    // Willkommensnachricht an neuen Client senden
    ws.send('Willkommen beim WebSocket-Server! Du bist jetzt verbunden.');

    // Event-Handler für eingehende Nachrichten von Clients
    ws.on('message', (data) => {
        console.log('Empfangene Nachricht:', data.toString());

        // Nachricht an ALLE verbundene Clients weiterleiten (Broadcast)
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Client sagt: ${data}`);
            }
        });
    });

    // Event-Handler wenn Verbindung geschlossen wird
    ws.on('close', () => {
        console.log('Client hat die Verbindung getrennt');
    });

    // Event-Handler für Fehler
    ws.on('error', (error) => {
        console.error('WebSocket-Fehler:', error);
    });
});