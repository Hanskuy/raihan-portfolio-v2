# Raihan Portfolio V2

A recruiter-oriented personal portfolio for Raihan Nur Ramadhan Sundana, a Computer Engineering graduate with full stack internship experience and cybersecurity research focused on malware analysis.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Zod
- Resend-ready email delivery
- Phosphor Icons
- Geist typography

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation and production build

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Structure

```text
public/
  documents/    Resume PDF
  images/       Profile and project images
src/
  app/          App Router pages, metadata, styles, and contact route
  components/   Portfolio sections and interactive controls
  data/         Centralized portfolio content
  lib/          Validation and email delivery
```

Design decisions are documented in `design-system/raihan-portfolio/`. Durable product facts are recorded in `PRODUCT.md`.

## Update portfolio content

Edit `src/data/portfolio.ts`. This is the source of truth for personal details, links, projects, experience, skills, education, and organization content.

## Project media

`profile.jpg` contains Raihan's supplied portrait and is used in the hero. `airmalysis-analysis-result.png` is the supplied application screenshot. `malware-dataset-pipeline.png` is an authentic crop of Figure 1 from the supplied conference paper. The real AirMalysis YouTube demonstration remains embedded as supporting evidence.

The internal EGRC application remains text-led because no public screenshot is available. Unused conceptual artwork was removed so only authentic project evidence ships with the site.

## Resume

The supplied resume is available at:

```text
public/documents/resume.pdf
```

The navigation download action is enabled through `personalInfo.resumeAvailable` in `src/data/portfolio.ts`.

## AirMalysis demo

The AirMalysis project includes a responsive YouTube demo. Its public and privacy-enhanced embed URLs are stored in `src/data/portfolio.ts`.

## Configure Resend

Copy `.env.example` to `.env.local` and set:

```text
RESEND_API_KEY=your_key
CONTACT_TO_EMAIL=raihannurramadhan4@gmail.com
RESEND_FROM_EMAIL=Portfolio Contact <verified-domain@example.com>
CONTACT_FORM_SECRET=use-a-long-random-value
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

`RESEND_FROM_EMAIL` must use a sender accepted by your Resend account. Without these values, the app still builds and the form returns a useful message directing visitors to the visible email link.

`CONTACT_FORM_SECRET` signs short-lived form tokens. If omitted, the configured Resend key is used as the signing secret. Set an independent long random value in production when possible.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Add the Resend environment variables in the project settings.
4. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
5. Deploy and test the contact form from the production domain.
