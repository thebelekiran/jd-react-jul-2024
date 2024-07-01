import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from "eslint-config-prettier";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";

export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    ignores: ["build/**/*"]
  },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  { languageOptions: { globals: globals.node } },
  {
    ...pluginJs.configs.recommended,
    settings: {
      react: {
        version: "detect"
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    ...eslintConfigPrettier,
  },
  ...fixupConfigRules(pluginReactConfig),

  // https://github.com/facebook/react/issues/28313#issuecomment-2119166334
  {
    plugins: {
      'react-hooks': fixupPluginRules(eslintPluginReactHooks)
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
    }
  },
  {
    rules: {
      // semi: "error",
      "prefer-const": "error",
      "react/react-in-jsx-scope": "off"
    }
  }
];