// https://nuxt.com/docs/api/configuration/nuxt-config
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
    baseURL: process.env.NUXT_APP_BASE_URL ?? "/",
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
        {
          name: "description",
          content:
            "Hier können Sie erfahren, wie viele Menschen mit bestimmten Eigenschaften Ihren Service nutzen.",
        },
        { name: "og:title", content: "Wie viele Menschen?" },
        { name: "og:type", content: "website" },
        {
          name: "og:url",
          content: "https://digitalservicebund.github.io/wie-viele-menschen/",
        },
        {
          name: "og:description",
          content:
            "Berechnen Sie, wie viele Menschen eine Behinderung, Beeinträchtigung oder andere Eigenschaften haben, um Maßnahmen abzuleiten, damit Ihr Dienst für alle Menschen funktioniert.",
        },
        {
          name: "og:image",
          content:
            "https://digitalservicebund.github.io/wie-viele-menschen/img/preview-social.gif",
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
        { rel: "icon", type: "image/png", href: "favicon-16x16.png" },
        {
          rel: "icon",
          type: "image/png",
          href: "favicon-32x32.png",
          sizes: "32x32",
        },
      ],
      script: [
        {
          defer: true,
          "data-domain": "digitalservicebund.github.io/wie-viele-menschen",
          src: "https://plausible.io/js/script.js",
          "data-api":
            "https://plausible.digitalservicebund.github.io/wie-viele-menschen/api/event",
        },
      ],
    },
  },
});
