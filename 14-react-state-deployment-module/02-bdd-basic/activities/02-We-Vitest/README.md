# Install Vitest and React Testing Library with a Vite React App

In this activity, we will create a React project with Vite and install Vitest and RTL.

## Instructions

Up until now, we have been generating a starter React app using Vite.

We are going to continue with this workflow but need to add a few dependencies to enable a testing environment.

To get our environment set up properly, we will need to do the following in our **terminal**:

  1. Create a React project titled `click-counter-testing` with `Vite`:
     * `npm create vite@4.4.1 click-counter-testing -- --template react`
  2. Navigate into our project directory and install the base dependencies  
     * `cd click-counter-testing && npm install`.
  3. Install Vitest and React Testing Library dependencies:
     * `npm install vitest --save-dev`
     * `npm install jsdom --save-dev`
     * `npm install @testing-library/react @testing-library/jest-dom @testing-library/user-event --save-dev`
  4. Add `"test": "vitest"` to your npm scripts in `package.json`

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
