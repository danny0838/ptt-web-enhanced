import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "build/",
      "src/lib/",
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        ...globals.browser,

        // service worker
        importScripts: "readonly",

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
  {
    files: [
      "scripts/**/*.js",
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.node,
    },
  },
];
