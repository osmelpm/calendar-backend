import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";
// import vitest from "@vitest/eslint-plugin"; //replace for your case

export default tseslint.config(
  {
    ignores: ["**/*.js"],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  perfectionist.configs["recommended-natural"],
  /* 
  {
    files: ["specify extensions"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules, //specify rules from 
      "@typescript-eslint/unbound-method": "off",
    },
  },
  */
);
