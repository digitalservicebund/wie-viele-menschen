// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL ?? "/",
    head: {
      title: "Wie viele Menschen?",
      meta: [
        {
          name: "description",
          content:
            "Geben Sie die (erwartete) Gesamtzahl der Nutzenden ein und erfahren Sie, wie viele Menschen mit einer Behinderung Ihren Service nutzen.",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "favicon-16x16.png" },
        {
          rel: "icon",
          type: "image/png",
          href: "favicon-32x32.png",
          sizes: "32x32",
        },
      ],
    },
  },
});
