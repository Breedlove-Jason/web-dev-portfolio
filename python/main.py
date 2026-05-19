"""
Portfolio API — Python / FastAPI backend.

Endpoints:
  GET  /           — health check
  GET  /projects   — list portfolio projects
  POST /contact    — handle contact form submissions
"""

from __future__ import annotations

from datetime import datetime
from typing import List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI(
    title="Portfolio API",
    description="Python FastAPI backend for Jason Breedlove's web-dev portfolio.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://your-portfolio.vercel.app"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------


class Project(BaseModel):
    id: int
    title: str
    description: str
    tags: List[str]
    github: str
    demo: str | None = None
    featured: bool = False


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str
    timestamp: str


# ---------------------------------------------------------------------------
# Data
# ---------------------------------------------------------------------------

PROJECTS: List[Project] = [
    Project(
        id=1,
        title="E-Commerce Platform",
        description=(
            "Full-stack e-commerce application with real-time inventory "
            "management, Stripe payments, and a Next.js App Router frontend."
        ),
        tags=["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
        github="https://github.com/Breedlove-Jason",
        demo="https://demo.example.com",
        featured=True,
    ),
    Project(
        id=2,
        title="AI Data Dashboard",
        description=(
            "Python FastAPI backend powering a real-time analytics dashboard "
            "with pandas and scikit-learn for data processing."
        ),
        tags=["Python", "FastAPI", "React", "Pandas", "TypeScript"],
        github="https://github.com/Breedlove-Jason",
        featured=True,
    ),
    Project(
        id=3,
        title="Portfolio CMS",
        description=(
            "Headless CMS built with Next.js and Tailwind CSS, featuring "
            "dynamic content management and MDX blog support."
        ),
        tags=["Next.js", "TypeScript", "MDX", "Tailwind CSS"],
        github="https://github.com/Breedlove-Jason",
    ),
]


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------


@app.get("/", tags=["health"])
def health_check() -> dict:
    """Return API health status."""
    return {"status": "ok", "service": "portfolio-api", "version": "1.0.0"}


@app.get("/projects", response_model=List[Project], tags=["projects"])
def list_projects(featured: bool | None = None) -> List[Project]:
    """
    Return portfolio projects.

    Pass ``?featured=true`` to filter to featured projects only.
    """
    if featured is None:
        return PROJECTS
    return [p for p in PROJECTS if p.featured == featured]


@app.post("/contact", response_model=ContactResponse, tags=["contact"])
def submit_contact(payload: ContactMessage) -> ContactResponse:
    """
    Accept a contact form submission.

    In production, replace the body of this function with your preferred
    notification mechanism (e.g., SendGrid, AWS SES, or a database write).
    """
    # TODO: send email / persist to database
    print(f"[contact] {payload.name} <{payload.email}>: {payload.message[:80]}")
    return ContactResponse(
        success=True,
        message="Thank you for your message! I'll be in touch within 24 hours.",
        timestamp=datetime.utcnow().isoformat() + "Z",
    )
