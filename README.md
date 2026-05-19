# web-dev-portfolio

A 2026 glance of my Web Developer Portfolio for using TypeScript, NextJS, and Tailwind, and Python.

## Tech Stack

| Layer     | Technology                                    |
|-----------|-----------------------------------------------|
| Frontend  | [Next.js 15](https://nextjs.org) (App Router) |
| Language  | [TypeScript](https://www.typescriptlang.org)  |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com)    |
| Backend   | [Python](https://python.org) / [FastAPI](https://fastapi.tiangolo.com) |

## Getting Started

### Frontend (Next.js)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Python / FastAPI backend

```bash
cd python
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── python/
│   ├── main.py          # FastAPI application
│   ├── requirements.txt
│   └── README.md
└── public/
```

## Deploy

Frontend: Deploy to [Vercel](https://vercel.com/new).
Backend: Deploy to [Railway](https://railway.app), [Render](https://render.com), or any server that supports Python/ASGI.
