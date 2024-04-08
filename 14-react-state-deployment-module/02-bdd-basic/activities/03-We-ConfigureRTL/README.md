# Configuring Enzyme with a React Project

During this activity, we will configure `React Testing Library` (RTL) within our React project. By default, Vite does not come shipped with any testing configuration. We'll need to create a setup file that will allow us to use RTL to test the DOM output of our components.

## Instructions

Perform the following actions inside of the `src/tests/setup.js` file:

1. Import the `expect` and `afterEach` methods from the `vitest` package.
2. Import the `cleanup` method from `@testing-library/react`.
3. Import the `matchers` default object from `@testing-library/jest-dom/matchers`.
4. Extend the `expect` method to include the matcher methods from RTL.
   1. Invoke `expect.extend()` and pass `matchers`.
5. Invoke the `afterEach` method by passing an arrow function which calls `cleanup()`.
6. In `vite.config.js`, add a `test` property as following to your config object:

   ```javascript
   export default defineConfig({
      plugins: [react()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setup.js',
      }
   })
   ```

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
