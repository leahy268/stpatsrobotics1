# St Patrick's One Robotics Web

Modern React + Tailwind rebuild of the St Patrick's One Robotics website, inspired by the original Canva site and expanded with reusable components and structured content.

## Getting Started

```pwsh
cd client
pnpm install # or npm install / yarn install
pnpm dev
```

Open the dev server URL printed in the terminal (defaults to `http://localhost:5173`).

## Deploying to Azure Static Web Apps

1. Build the project locally:
	```pwsh
	pnpm build
	```
2. Deploy the contents of `client/dist` using your preferred Azure workflow (Static Web Apps, App Service, or CI pipeline).
3. Update environment variables or asset paths if you change the hosting root.

## Media Assets

- Download the latest images from the Canva site (or other sources) into `client/public/assets`.
- Keep file names consistent with the references in `client/src/data/content.ts` to avoid broken links.
- Optimise assets (compress, resize) before committing to keep the repo lightweight.

## Folder Structure

- `client/` – Vite + React + Tailwind front-end source.
- `client/public/assets/` – Placeholder for your scripted Canva image downloads.
- `client/src/data/content.ts` – Central content model for text, links, and media metadata.

## Scripts

- `pnpm dev` – Start Vite dev server.
- `pnpm build` – Production build.
- `pnpm preview` – Preview prod build locally.
- `pnpm lint` – Run ESLint (configure rules as needed).

## Next Steps

- Wire in scroll-triggered animations (e.g., Framer Motion or IntersectionObserver).
- Connect content to a headless CMS or JSON feed if you want live updates.
- Create Azure deployment workflow (GitHub Actions or Azure DevOps pipeline) when ready.
