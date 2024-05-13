// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  devtools: {
    enabled: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "WCAG Requirements",
      meta: [{ name: "description", content: "All WCAG Requirements" }],
    },
  },
});
