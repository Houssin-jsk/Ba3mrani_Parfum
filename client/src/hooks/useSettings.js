import { useEffect, useState } from "react";
import fallbackSettings from "../data/fallbackSettings";

const REQUEST_TIMEOUT_MS = 3500;

function isSettings(value) {
  return (
    typeof value?.brandName === "string" &&
    typeof value?.whatsapp === "string" &&
    typeof value?.instagram === "string" &&
    typeof value?.facebook === "string"
  );
}

export default function useSettings() {
  const [settings, setSettings] = useState(fallbackSettings);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS,
    );

    async function loadSettings() {
      try {
        const response = await fetch("/api/settings", {
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Settings request failed with ${response.status}`);
        }

        const data = await response.json();
        if (!isSettings(data)) {
          throw new Error("Settings API returned an invalid payload");
        }

        setSettings(data);
      } catch {
        if (!controller.signal.aborted) setSettings(fallbackSettings);
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    loadSettings();

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return settings;
}
