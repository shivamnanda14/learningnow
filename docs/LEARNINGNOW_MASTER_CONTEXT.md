# LEARNINGNOW_MASTER_CONTEXT.md

# LearningNow Platform

Version: V1.0

Last Updated: July 2026

Owner: Shivam Nanda

---

# 1. Vision

LearningNow is NOT a personal website.

LearningNow is a scalable EdTech Platform.

Current Goal:
- Sell Communication Masterclasses
- Conduct Workshops
- Build an AI Learning Assistant
- Publish Books
- Host Podcasts
- Create a learning ecosystem.

Future Goal:
- Multiple Instructors
- Multiple Courses
- AI Coach
- Student Dashboard
- Certificates
- Community
- Mobile App

The platform must be scalable enough to support 100+ products and 100000+ students.

---

# 2. Tech Stack

Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

Backend

- Supabase
- PostgreSQL
- RLS Policies

Payments

- Razorpay

Email

- Resend

Deployment

- Vercel

---

# 3. Design Philosophy

Theme

Dark Modern

Inspired by

- Apple
- Linear
- Framer
- Vercel

Avoid

❌ Bootstrap Feel

❌ Cheap Cards

❌ Random Colors

Rules

- Large whitespace
- Premium typography
- Rounded corners
- Minimal UI
- Black background
- Purple accent
- Green only for pricing/success
- Consistent spacing
- Reusable components

---

# 4. Folder Structure

app/

api/

dashboard/

products/

communication/

masterclass/

workshop/

book/

profile/

auth/

components/

communication/

masterclass/

workshop/

dashboard/

shared/

modules/

authentication/

products/

payment/

dashboard/

contents/

podcast/

book/

ai/

workshop/

lib/

supabase/

services/

hooks/

types/

---

# 5. Database

Tables

profiles

products

product_sections

product_contents

purchases

progress

certificates

workshop_requests

Enums

product_type_enum

content_type_enum

payment_status_enum

Products are generic.

Everything sold on LearningNow is a Product.

Examples

Communication Masterclass

Book

Workshop

Podcast Premium

AI Subscription

---

# 6. Product Architecture

Product

↓

Sections

↓

Contents

Content Types

video

pdf

assignment

quiz

download

audio

text

ai

link

No hardcoded lessons.

Everything must come from database.

---

# 7. Payment Architecture

Provider

Razorpay

Flow

Product

↓

Create Order

↓

Checkout

↓

Verify Payment

↓

Save Purchase

↓

Unlock Product

↓

Dashboard

Amount stored in database

PAISE

NOT RUPEES

---

# 8. Dashboard

Dashboard

↓

My Products

↓

Course Player

↓

Progress

↓

Certificates

↓

Settings

No product should unlock unless purchase is verified.

---

# 9. AI Vision

One Universal AI

NOT separate AI for every page.

AI should answer from

- Courses
- Podcasts
- Books
- Website
- Future PDFs

Future

Voice AI

Personal Coach

---

# 10. UI Rules

Buttons

Rounded XL

White Primary

Outline Secondary

Cards

Rounded-2xl

Border Zinc-800

Background Zinc-900

Spacing

max-w-6xl

px-4 md:px-6

py-20

Headings

font-semibold

tracking-tight

Sections

Reusable Components

Never duplicate design.

---

# 11. Current Completed Modules

Authentication

✅ Login

✅ Signup

✅ Forgot Password

Profile

✅ User Profile

Communication

✅ Complete

Workshop

✅ Complete

Workshop Request

✅ Supabase Connected

✅ Email Notification

Masterclass

✅ Version 2

(Home page redesign pending after payment)

Database

✅ Production Ready

---

# 12. Pending Modules

Highest Priority

1.

Razorpay Integration

2.

Products Page

3.

Dashboard

4.

Course Player

5.

My Products

6.

Certificates

Later

Instructor Dashboard

Analytics

Admin Panel

AI

Community

---

# 13. Coding Rules

Never hardcode products.

Everything should come from database.

Business logic belongs in modules.

UI should stay inside components.

No SQL inside frontend.

API only talks to database.

Always separate

UI

Business Logic

Database

---

# 14. Naming Convention

Products

product_sections

product_contents

Never use

course_lessons

Because future products are not only videos.

---

# 15. Development Workflow

Always follow this order

Architecture

↓

Database

↓

Backend

↓

API

↓

Frontend

↓

Testing

↓

Refactor

Never start from UI.

---

# 16. Current Sprint

Sprint 2

Commerce

Tasks

□ Insert First Product

□ Razorpay Integration

□ Create Order API

□ Verify Payment

□ Save Purchase

□ Unlock Product

□ My Products

□ Dashboard

After Commerce

Masterclass V3

Course Player

Universal AI

---

# 17. Long-Term Vision

LearningNow should become

India's Communication Learning Platform

Future Categories

Communication

Public Speaking

English

Teaching Skills

Leadership

Storytelling

Interview Preparation

Negotiation

AI Skills

Soft Skills

Future Instructors should be supported without changing architecture.

---

# 18. Important Notes

Masterclass V2 is intentionally frozen.

It will be redesigned AFTER

- Payment
- Dashboard
- Course Player

because those assets will improve the final conversion page.

Current focus is backend and commerce.
