# Python FastAPI Backend

This directory contains the Python/FastAPI backend for the portfolio.

## Setup

```bash
cd python
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Run the development server

```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.

Interactive API docs: `http://localhost:8000/docs`

## Endpoints

| Method | Path        | Description                    |
|--------|-------------|--------------------------------|
| GET    | `/`         | Health check                   |
| GET    | `/projects` | List portfolio projects        |
| POST   | `/contact`  | Submit a contact form message  |
