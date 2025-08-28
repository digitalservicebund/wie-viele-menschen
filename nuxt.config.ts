export default defineNuxtConfig({
  devtools: { enabled: process.env.DEV_TOOLS !== "false" },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL ?? "/", // Stellt die Basis-URL für die gesamte Anwendung ein
    head: {
      title: "Wie viele Menschen?",
      htmlAttrs: {
        lang: "de",
      },
      meta: [
        {
          name: "description",
          content:
            "Hier können Sie erfahren, wie viele Menschen mit bestimmten Eigenschaften Ihren Service nutzen.",
        },
        { name: "og:title", content: "Wie viele Menschen?" },
        { name: "og:type", content: "website" },
        {
          name: "og:url",
          content: process.env.NUXT_APP_BASE_URL ?? "/",
        },
        {
          name: "og:description",
          content:
            "Berechnen Sie, wie viele Menschen eine Behinderung, Beeinträchtigung oder andere Eigenschaften haben, um Maßnahmen abzuleiten, damit Ihr Dienst für alle Menschen funktioniert.",
        },
        {
          name: "og:image",
          content:
            (process.env.NUXT_APP_BASE_URL ?? "") + "/img/preview-social.gif",
        },
        {
          name: "og:image:alt",
          content:
            "Wie viele Menschen? Berechnen Sie, wie viele Menschen eine Behinderung, Beeinträchtigung oder andere Eigenschaften haben, um Maßnahmen abzuleiten, damit Ihr Dienst für alle Menschen funktioniert.",
        },
        { name: "og:image:width", content: "2865" },
        { name: "og:image:height", content: "1500" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon-16x16.png" },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
          sizes: "32x32",
        },
      ],
      script: [
        {
          defer: true,
          "data-domain": process.env.NUXT_APP_BASE_URL ?? "",
          src: "https://plausible.io/js/script.js",
        },
      ],
    },
  },

  compatibilityDate: "2025-08-28",
});
