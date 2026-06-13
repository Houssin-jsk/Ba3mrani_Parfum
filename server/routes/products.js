import { Router } from "express";
import products from "../data/products.js";

const router = Router();

router.get("/", (_request, response) => {
  response.json(products);
});

router.get("/:slug", (request, response) => {
  const product = products.find(({ slug }) => slug === request.params.slug);

  if (!product) {
    return response.status(404).json({ error: "Product not found" });
  }

  return response.json(product);
});

export default router;
