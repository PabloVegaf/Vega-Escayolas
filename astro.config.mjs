// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://vegaescayolas.es", //Cambiar al dominio real al desplegar
  integrations: [sitemap()],
});
