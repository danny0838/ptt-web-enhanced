import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "src/lib/",
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        ...globals.browser,

        // webextension APIs
        browser: "readonly",
      },
    },
    rules: {
      // https://eslint.org/docs/latest/rules/
      ...js.configs.recommended.rules,
      "no-var": "warn",
    },
  },
  {
    files: [
      "*.{js,mjs}",
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
];
