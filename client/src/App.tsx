import { useEffect, useState } from 'react';

const API_BASE = '/api';

export default function App() {
  const [message, setMessage] = useState('Loading...');
  const [apiHealth, setApiHealth] = useState('Checking...');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch(`${API_BASE}/message`);
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        setMessage('Could not reach the API.');
      }
    };

    const fetchHealth = async () => {
      try {
        const response = await fetch(`${API_BASE}/health`);
        const data = await response.json();
        setApiHealth(`${data.status} (${data.service})`);
      } catch (error) {
        setApiHealth('API is offline');
      }
    };

    fetchMessage();
    fetchHealth();
  }, []);

  return (
    <main className="app-shell">
      <section className="card">
        <p className="eyebrow">LocalApp</p>
        <h1>Welcome to your full-stack app</h1>
        <p className="lead">This starter includes a React frontend and an Express API backend.</p>

        <div className="status-grid">
          <div>
            <span className="label">API message</span>
            <strong>{message}</strong>
          </div>
          <div>
            <span className="label">API health</span>
            <strong>{apiHealth}</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
