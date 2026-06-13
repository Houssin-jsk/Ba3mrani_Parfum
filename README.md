# Ba3mrani Parfum

Luxury perfume catalogue built with React, Vite, Node.js, and Express.

## Run locally

```bash
npm run install:all
npm install
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- Products API: `http://localhost:5000/api/products`

The Vite development server proxies `/api` to the Express backend. If the
backend is unavailable, the catalogue automatically uses
`client/src/data/fallbackProducts.js`.

## Production build

```bash
npm run build
npm start
```

Set `PORT` to change the backend port. In production, configure the web server
that hosts the client to proxy `/api` to the Express service.
