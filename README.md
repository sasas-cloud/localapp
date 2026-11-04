# LocalApp

A simple full-stack starter for a local application built with a React frontend and an Express API.

## Stack
- Frontend: React + Vite + TypeScript
- Backend: Express + TypeScript
- Package management: npm workspaces

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app in development mode:
   ```bash
   npm run dev
   ```
3. Open the frontend at http://localhost:5173
4. The API is available at http://localhost:3001/api/health

## Production build

```bash
npm run build
npm run start
```

## Project structure

```text
localapp/
  client/          React frontend
  server/          Express API backend
  package.json      root workspace config
  .gitignore
  .env.example
```

## Environment

Copy `.env.example` to `.env` and adjust values if needed.
