import { Router } from "express";
import settings from "../data/settings.js";

const router = Router();

router.get("/", (_request, response) => {
  response.json(settings);
});

export default router;
