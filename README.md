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
