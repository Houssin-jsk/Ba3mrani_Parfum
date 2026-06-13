# Ba3mrani Parfum

Luxury perfume catalogue built with React and Vite. Production API routes run
as Vercel Functions; the Express server is only retained for local legacy use.

## Local development

```bash
npm run install:all
npm install
npm run dev
```

- Frontend: `http://localhost:5173`
- Local Express API: `http://localhost:5000/api/products`
- The Vite development server proxies `/api` to the local Express API.
- If either API request fails, the frontend uses its local product or settings
  fallback data.

## Production build

```bash
cd client
npm install
npm run build
```

The static output is generated in `client/dist`.

## Deploy to Vercel

1. Import the repository into Vercel.
2. Keep the project root set to the repository root.
3. Vercel reads the included `vercel.json` and builds `client/dist`.
4. Deploy without configuring a long-running Express process.

Production endpoints:

- `/api/products` is served by `api/products.js`.
- `/api/settings` is served by `api/settings.js`.
- Client routes fall back to `/index.html` for SPA navigation.

All site assets are served from `client/public` with root-relative paths such
as `/Logo/logo.png`, `/parfum_glas/...`, `/parfum_reference/...`, and
`/generated/...`.
