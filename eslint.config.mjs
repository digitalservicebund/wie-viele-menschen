import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/no-multiple-template-root": "off",
    "vue/html-self-closing": "off",
    "vue/multi-word-component-names": "off",
    "linebreak-style": ["error", "windows"],
  },
});
