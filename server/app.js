import cors from "cors";
import express from "express";
import productsRouter from "./routes/products.js";
import settingsRouter from "./routes/settings.js";

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.use("/api/products", productsRouter);
app.use("/api/settings", settingsRouter);

app.use((request, response) => {
  response.status(404).json({
    error: "Route not found",
    path: request.originalUrl,
  });
});

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ error: "Internal server error" });
});

export default app;
