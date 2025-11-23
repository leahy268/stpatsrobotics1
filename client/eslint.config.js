import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["dist/**"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      react
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    }
  }
];
