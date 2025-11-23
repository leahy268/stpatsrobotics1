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

1. Copy `client/scripts/assets-manifest.example.json` to `client/scripts/assets-manifest.json` and replace each placeholder URL with the real Canva asset URL (open the Canva site, inspect an image, and copy the direct `https://stpatricks-fll.my.canva.site/_assets/media/...` link).
2. Run the helper script to pull everything into `public/assets`:
	```pwsh
	cd client
	pwsh ./scripts/download-assets.ps1
	```
3. Keep file names aligned with `client/src/data/content.ts` so components continue to resolve the expected images.
4. Optimise assets (compress, resize) before committing to keep the repo lightweight.

If you prefer manual downloads, save each image into `client/public/assets` using the filenames listed in the manifest; the script is simply a convenience wrapper around those URLs.

## Site Structure

Each major section from the Canva site now has its own route powered by React Router:

- `/` – Landing page with hero and quick links to the other sections.
- `/team` – Team biographies and roles.
- `/innovation` – 2025 innovation project overview.
- `/indigenous-mining` – Indigenous mining deep dive.
- `/about` – St Patrick’s College background.
- `/contact` – Contact details and external resources.

## Folder Structure

- `client/` – Vite + React + Tailwind front-end source.
- `client/public/assets/` – Placeholder for your scripted Canva image downloads.
- `client/src/data/content.ts` – Central content model for text, links, and media metadata.

## Scripts

- `pnpm dev` – Start Vite dev server.
- `pnpm build` – Production build.
- `pnpm preview` – Preview prod build locally.
- `pnpm lint` – Run ESLint (configure rules as needed).
- `pwsh ./scripts/download-assets.ps1` – Fetch Canva-hosted media into `public/assets` using the manifest.

## Next Steps

- Wire in scroll-triggered animations (e.g., Framer Motion or IntersectionObserver).
- Connect content to a headless CMS or JSON feed if you want live updates.
- Create Azure deployment workflow (GitHub Actions or Azure DevOps pipeline) when ready.
