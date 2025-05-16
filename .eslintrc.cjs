module.exports = {
  extends: ['plugin:vue/vue3-recommended', '@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  rules: {
    'no-console': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/require-toggle-inside-transition': 'warn',
    'vue/this-in-template': 'error'
  }
}
