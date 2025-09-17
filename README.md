# Motorcycle Data Docker Demo

A simple full-stack project for learning **Docker, Node.js, React, and PostgreSQL**.
This project demonstrates how multiple services communicate inside Docker containers and shows basic API and frontend integration.

---

## 🛠 Project Overview

- **Goal:** Practice setting up a full-stack app with Docker.
- **Functionality:**

  - Node.js API serves motorcycles data from PostgreSQL.
  - React frontend fetches and displays the motorcycles.
  - pgAdmin is used to inspect and manage the database.

---

## 📦 Services

| Service    | Description                |
| ---------- | -------------------------- |
| `postgres` | PostgreSQL database        |
| `pgAdmin`  | Database management tool   |
| `api`      | Node.js backend API        |
| `web-app`  | React frontend application |

---

## 🔄 Project Flow

```
React (web-app)
      |
      v
Node.js API (api)  -->  PostgreSQL (postgres)
                               ^
                               |
                            pgAdmin
```

1. User clicks "Fetch Motorcycles" in React frontend.
2. React calls Node.js API (`/motorcycles`).
3. API connect to PostreSQL and returns data.
4. React renders the list of motorcycles.
5. pgAdmin allows debugging and database inspection.

---

## ⚡ Key Points

### postgres

- Stores `motorcycles` table.
- Exposed on port `5432`.
- Data persisted using Docker volume `postgres_data`.

### pgAdmin

- Runs as a separate container for easy DB management.
- Accessible at `http://localhost:5050`.
- Connects to `postgres` service for database inspection.

### api

- Node.js HTTP server using `pg` to query Postgres.
- Exposed on port `8080`.
- Connects to `postgres` using service name, not `localhost`.

### web-app

- React app built with Vite.
- Fetches data from the API and displays motorcycles.
- Exposed on port `5173`.

---

## 🚀 Getting Started

**Access services**

- React frontend: `http://localhost:5173`
- Node API: `http://localhost:8080/motorcycles`
- pgAdmin: `http://localhost:5050`

---

## ✅ Notes / Highlights

- Multi-network setup: `privateNetwork` for backend+DB, `publicNetwork` for frontend API access.
- Clean separation of services: DB, API, frontend, and DB management tool.
