import eslintPluginReact from "eslint-plugin-react";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import eslintParser from "@typescript-eslint/parser";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginPrettier from "eslint-plugin-prettier";

// @ts-ignore - Missing TypeScript definitions
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
// @ts-ignore - Missing TypeScript definitions
import eslintPluginImport from "eslint-plugin-import";

import { ESLint, Linter } from "eslint";

export default [
    {
        files: ["src/**/*.{ts,tsx,js,jsx}"],
        ignores: ["dist/", "node_modules/"],
        languageOptions: {
            parser: eslintParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "@typescript-eslint": eslintPluginTypescript as unknown as ESLint.Plugin,
            "react-hooks": eslintPluginReactHooks,
            "react-refresh": eslintPluginReactRefresh,
            react: eslintPluginReact,
            import: eslintPluginImport,
            prettier: eslintPluginPrettier,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/explicit-function-return-type": ["warn"],
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "warn",

            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react/react-in-jsx-scope": "off",
            "no-console": "warn",
            "no-debugger": "warn",
            "import/order": [
                "warn",
                {
                    groups: ["builtin", "external", "internal", ["parent", "sibling"], "index"],
                },
            ],

            "prettier/prettier": "error",
        },
    },
] satisfies Linter.Config[];
