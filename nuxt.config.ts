// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: "WCAG Requirements",
      meta: [
        { name: "description", content: "All WCAG Requirements" }
      ]
    }
  }
})