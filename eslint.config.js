import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import eslintParser from "@typescript-eslint/parser";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginHtml from "eslint-plugin-html";

export default [
    {
        files: ["src/**/*.{ts,tsx,js,jsx,html, css, scss}"],
        ignores: ["dist/", "node_modules/"],
        languageOptions: {
            parser: eslintParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        plugins: {
            "react-hooks": eslintPluginReactHooks,
            "react-refresh": eslintPluginReactRefresh,
            "@typescript-eslint": eslintPluginTypescript,
            react: eslintPluginReact,
            html: eslintPluginHtml,
            prettier: eslintPluginPrettier,
        },
        rules: {
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        },
    },
];
