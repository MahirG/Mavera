# Mavera Business Group

A production-oriented, multi-page corporate website for **Mavera Business Group** and **Mavera Coffee House**, built with Next.js App Router, React, and TypeScript.

## Included pages

- Home
- About Mavera Business Group
- Companies and portfolio architecture
- Mavera Coffee House
- Partnerships
- Contact

## Brand system

The interface preserves the official Mavera amber (`#FCB040`) and silver (`#D1D2D4`) palette and translates the supplied identity concepts into a responsive digital system:

- the letter **M** for Mavera
- the rising business graph for enterprise activity and growth
- the united form for a group that owns companies and works with partners
- the Coffee House mark combining an **M**, coffee bean, house, and cup

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run build
```

## Contact integration

Set `CONTACT_WEBHOOK_URL` to forward contact form submissions as JSON to a webhook or automation endpoint. In production, the API intentionally returns a configuration message until a webhook is supplied.

Copy `.env.example` to `.env.local` and configure the required values.

## Deployment

The project is compatible with Vercel and standard Node.js hosting.

Before launch, replace the placeholder canonical domain `https://mavera.example` in:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
