import { useEffect, useState } from "react";
import fallbackProducts from "../data/fallbackProducts";

const REQUEST_TIMEOUT_MS = 3500;

function isProductList(value) {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (product) =>
        typeof product?.name === "string" &&
        typeof product?.image === "string" &&
        Array.isArray(product?.options),
    )
  );
}

export default function useProducts() {
  const [products, setProducts] = useState(fallbackProducts);
  const [source, setSource] = useState("fallback");

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS,
    );

    async function loadProducts() {
      try {
        const response = await fetch("/api/products", {
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Products request failed with ${response.status}`);
        }

        const data = await response.json();
        if (!isProductList(data)) {
          throw new Error("Products API returned an invalid payload");
        }

        setProducts(data);
        setSource("api");
      } catch {
        if (!controller.signal.aborted) {
          setProducts(fallbackProducts);
          setSource("fallback");
        }
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    loadProducts();

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return { products, source };
}
