import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import parser from "@typescript-eslint/parser";
import pluginTs from "@typescript-eslint/eslint-plugin";
import pluginImport from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig({
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules", "build", "dist"],
    languageOptions: {
        parser,
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
            ecmaFeatures: {
                jsx: true
            }
        },
        globals: {
            ...globals.browser,
            ...globals.node
        }
    },
    plugins: {
        js,
        react: pluginReact,
        "react-hooks": pluginReactHooks,
        "@typescript-eslint": pluginTs,
        import: pluginImport
    },
    settings: {
        react: {
            version: "detect"
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    extends: [
        "js/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript"
    ],
    rules: {
        // General
        "semi": ["error", "always"],
        "quotes": ["error", "double"],

        // React
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",

        // TypeScript
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "warn",

        // Import
        "import/order": [
            "error",
            {
                "groups": ["builtin", "external", "internal"],
                "newlines-between": "always"
            }
        ]
    }
});
