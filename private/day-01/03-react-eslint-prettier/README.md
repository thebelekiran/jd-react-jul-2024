# Working with ESLint and Prettier

-   Create the React app in the folder of your choice

```
npx create-react-app eslint-prettier-example --template typescript
```

-   Select `y` to proceed
-   Change directory to that folder

```
cd eslint-prettier-example/
```

-   Modify the App.tsx

```tsx
const App = () => {
    return (
        <main>
            <h1>Using ESLint and Prettier</h1>
        </main>
    );
};

export default App;
```

-   Run the app

```
npm start
```

-   View the app on `http://localhost:3000`
-   CRA apps comes pre-installed with ESLint.
-   ESLint v9 does not yet work well with plugins for React. So CRA uses ESLint v8. The configuration file format has changed for ESLint v9. So this tutorial may not work in future. As of now this is the way. A sample configuration file in ESLint v9 format is provided at the end.
-   Since we are using ESLint v8, add a simple `.eslintrc.json` configuration file

```json
{
    "extends": ["react-app", "react-app/jest"],
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/react-in-jsx-scope": "off"
    }
}
```

-   Make sure to understand what each key in this configuration is for.

```
const App = () => {
    return
        <main>
            <h1>Using ESLint and Prettier</h1>
        </main>
};

export default App;
```

-   To test the efficacy of ESLint installed, first turnoff ESLint and Prettier plugins in VSCode (if already turned on, they would catch and automatically fix it. But we can't rely upon those VSCode extensions being present in every developer's editor.)
-   In `package.json` add a script to run, and one to fix eslint errors

```json
"scripts": {
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix"
}
```

-   Run ESLint

```
npm run lint
```

You would get errors / warnings

```
2:11  error    Missing semicolon  semi
3:9   warning  Unreachable code   no-unreachable
5:16  error    Missing semicolon  semi
```

-   Most can be fixed without intervention, some only with developer intervention.
-   Run the `lint:fix` script to fix those that can be fixed automatically

```
npm run lint:fix
```

You would see fewer errors / warnings

```
3:9  warning  Unreachable code  no-unreachable
```

-   Linters exit with non-zero exit code on errors, not on warnings. A non-zero exit code is crucial to have the linter fail ina CI/CD setup. If you think such code should be be marked as an error and not a warning then change how the rule is handled in `eslintrc.json`.

```json
{
    // ...existing settings
    "rules": {
        // ...existing settings
        "no-unreachable": "error"
    }
}
```

-   Run ESLint again, and you see an error instead of a warning for it.
-   Correct the error in `App.tsx`

```tsx
const App = () => {
    return (
        <main>
            <h1>Using ESLint and Prettier</h1>
        </main>
    );
};

export default App;
```

-   Install one of the popular ESLint configurations

```
npx install-peerdeps --dev eslint-config-airbnb
```

-   Install the Prettier plugin

```
npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier
```

-   Create `eslintrc.json` in the project folder. It is not shown here, but leave the existing setting intact when modifying the file to incluce the below settings.

```json
{
    "extends": [
        "react-app",
        "react-app/jest",
        "airbnb",
        "plugin:prettier/recommended"
    ],
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": ["error"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/react-in-jsx-scope": "off",
        "import/no-extraneous-dependencies": [
            "error",
            { "devDependencies": true }
        ]
    }
}
```

-   Your config file should look like this now

```json
{
    "extends": [
        "react-app",
        "react-app/jest",
        "airbnb",
        "plugin:prettier/recommended"
    ],
    "plugins": ["prettier"],
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/react-in-jsx-scope": "off",
        "no-unreachable": "error",
        "prettier/prettier": ["error"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-extraneous-dependencies": [
            "error",
            { "devDependencies": true }
        ]
    }
}
```

-   Run ESLint and find more errors
-   Fix what can be done automatically
-   At this point the ESLint configuration does not support TypeScript. Add the support.

```
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

-   Change `eslintrc.json` one final time. The file looks like this in its entirety.

```json
{
    "parser": "@typescript-eslint/parser",
    "extends": [
        "react-app",
        "react-app/jest",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "plugins": ["@typescript-eslint", "prettier"],
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/react-in-jsx-scope": "off",
        "no-unreachable": "error",
        "prettier/prettier": ["error"],
        "import/no-extraneous-dependencies": [
            "error",
            { "devDependencies": true }
        ],
        "react/jsx-filename-extension": [
            1,
            { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            { "argsIgnorePattern": "^_" }
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "import/no-unresolved": "off" // Optionally, turn off if using TypeScript's module resolution
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
}
```

-   Lint again. You should have no errors.
-   Add `prettierrc.json`

```json
{
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "endOfLine": "lf",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxSingleQuote": false,
    "printWidth": 80,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": false,
    "tabWidth": 2,
    "trailingComma": "all",
    "useTabs": false,
    "vueIndentScriptAndStyle": false
}
```

-   Self study: You can add `.eslintignore` and `.prettierignore` if you need to ignore some files from being considered for linting.
-   Self study: Add a few rules of your liking and tweak it. Make violations and see that linting catches it.
-   Use Husky and Lint Staged to make sure committed code is always free of violations. Install these packages.

```
npm i --save-dev husky lint-staged
```

-   Add the `prepare` script in `package.json` and follow with an `npm prepare`

```json
{
    "scripts": {
        "prepare": "husky"
    }
}
```

```
npm prepare
```

-   This creates the `.husky` folder. We shall add the pre-commit hook soon here.
-   Add `.lintstagedrc.json`

```json
{
    "*": "prettier --ignore-unknown --write",
    "*.{js,jsx,ts,tsx}": "eslint --fix --report-unused-disable-directives"
}
```

-   Add the pre-commit hook in `.husky/pre-commit`

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged
```

-   Initialize the project folder as a git repo (if not already one). Here it is as it was created using CRA which does this. So you can skip this step.

```
git init
```

-   Add and commit to see husky work its magic through Git hooks

```
git add .
git commit -m "first commit"
```

## Aside: Using ESLint v9

-   If using ESLint v9, there are compatibility packages to be installed as React plugins work with ESLint v8 and not v9. Here is a sample `eslint.config.mjs`

```js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";

export default [
    {
        files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    },
    {
        ignores: ["build/**/*"],
    },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    { languageOptions: { globals: globals.node } },
    {
        ...pluginJs.configs.recommended,
        settings: {
            react: {
                version: "detect",
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
            "react-hooks": fixupPluginRules(eslintPluginReactHooks),
        },
        rules: {
            ...eslintPluginReactHooks.configs.recommended.rules,
        },
    },
    {
        rules: {
            // semi: "error",
            "prefer-const": "error",
            "react/react-in-jsx-scope": "off",
        },
    },
];
```

-   Add the following in `package.json` followed by a fresh `npm install`. The packages needed

```json
{
    "devDependencies": {
        "@eslint/compat": "^1.1.0",
        "@eslint/js": "^9.5.0",
        "@types/react-router": "^5.1.19",
        "@types/react-router-dom": "^5.3.3",
        "cross-env": "^7.0.3",
        "eslint": "^9.5.0",
        "eslint-config-prettier": "^9.1.0",
        "eslint-plugin-react": "^7.34.3",
        "globals": "^15.6.0",
        "typescript-eslint": "^7.13.1"
    }
}
```

## ESLint and Prettier

-   [Create React App - Setting Up Your Editor](https://create-react-app.dev/docs/setting-up-your-editor#extending-or-replacing-the-default-eslint-config)
-   [ESLint preset for React](https://react.dev/learn/editor-setup#linting)
-   [ESLint VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [Prettier VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Using ESLInt with Prettier](https://prettier.io/docs/en/integrating-with-linters)
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
-   [Husky](https://typicode.github.io/husky/)
-   [Lint Staged](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8)
-   [ESLint, Prettier, Husky, Lint Staged](https://create-react-app.dev/docs/setting-up-your-editor) - The steps mentioned here do not seem to work. Use the script provided by the instructor.
