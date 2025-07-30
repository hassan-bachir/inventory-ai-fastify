# 📦 Inventory Management System with AI

A full-featured inventory management system built with **Fastify**, **Prisma**, **SQLite**, and **OpenAI**, completed within a 1.5-hour coding challenge.

> Allows CRUD operations, search, stock status tracking, and AI-powered stock status suggestions.

---

## ✅ Features

- 🔧 Add, edit, and delete inventory items (name, quantity, category, details)
- 📦 Track stock status: `IN_STOCK`, `LOW_STOCK`, `ORDERED`, `DISCONTINUED`
- 🔍 Search by name, category, or stock status
- 🤖 AI suggestion for appropriate stock status (via OpenAI API)
- 🧑‍💻 Simple web UI (EJS-based)
- 🔐 _(Optional Extra)_ Role-based user access control (planned)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/inventory-ai-fastify.git
cd inventory-ai-fastify
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment

```bash
PORT=3000
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Initialize the database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start the server

```bash
npm run dev
```

## 📡 API Endpoints

### 🧾 Inventory CRUD

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/inventory`     | List all items  |
| POST   | `/inventory`     | Create new item |
| PUT    | `/inventory/:id` | Update an item  |
| DELETE | `/inventory/:id` | Delete an item  |

---

### 🔍 Search Inventory

```http
GET /inventory/search?q=laptop
```

Search by name, category, or stock status (case-insensitive).

### 🤖 AI Stock Status Suggestion

```http
POST /ai/suggest-status
```

Example Body:

```JSON
{
  "name": "iPhone 15",
  "quantity": 0,
  "category": "Phones",
  "details": "Out of stock, high demand"
}
```

Example Response:

```JSON
{
  "suggestion": "Status: ORDERED\nReason: Quantity is 0 and demand is high."
}

```
### 🌐 Web Interface

Accessible at: http://localhost:PORT

- Form to add new items

- Search input

- AI button to suggest stock status via OpenAI

### 🧠 AI Integration (OpenAI)

This project uses gpt-3.5-turbo via the OpenAI API.

To enable it:

- Create an OpenAI account

- Get an API key: https://platform.openai.com/api-keys

- Paste the key in your .env file

