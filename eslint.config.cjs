// eslintrc.cjs

/**
 * ESLint configuration for browser-based ES2015+ JavaScript.
 *
 * Focus:
 *   - Modern syntax (ES modules, let/const)
 *   - Good practices with arrays and objects
 *   - Avoiding common mistakes students make
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  // Environment: browser + modern ECMAScript
  //env: {
    //browser: true, // window, document, etc.
    //es2021: true,  // enables ES2015+ globals/syntax
  //},

  // Extend from ESLint's recommended set of rules
  //extends: ["eslint:recommended"],

  //parserOptions: {
    //ecmaVersion: "latest", // allow latest JS features
    //sourceType: "module",  // we use ES modules
  //},

  rules: {
    // ----- Modern syntax / style -----
    "no-var": "error",               // Never allow var
    "prefer-const": "warn",          // Prefer const when not reassigned
    "prefer-arrow-callback": "warn",
    "prefer-template": "warn",

    // Always use strict equality
    eqeqeq: ["error", "always"],

    // Avoid unused variables
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_", // allow unused args starting with _
      },
    ],

    // Allow console for teaching/demo purposes
    "no-console": "off",

    // ----- Arrays & Objects best practices -----
    "array-callback-return": "warn",     // map/filter should return a value
    "no-array-constructor": "error",     // [] instead of new Array()
    "no-param-reassign": "warn",         // discourage mutating function params
    "no-shadow": "warn",                 // avoid shadowing variables
    "no-duplicate-imports": "warn",      // keep imports clean
    "object-shorthand": ["warn", "always"], // { foo } instead of { foo: foo }
  },
};
