# Refactor App.test.jsx: Create Custom Helper Functions

Demonstrate to students how to create the custom helper functions, `renderApp()` and `get[Element]()` for each element.

## Instructions

Inside of `src/tests/App.test.jsx`, create the following functions that meet the criteria provided:

1. `renderApp()`: This function should accept no arguments and return an object that contains helper functions for each element we wish to test (_example below_).

2. `get[Element]()`: Within the return object, for each element used in your tests, create a function that will use RTL’s  screen.getBy() methods to return the element. These functions should accept no arguments, and return a function used to get the element.

  ```js
  // in renderApp()
  return {
    getIncrementBtn: () => screen.getByRole('button', { name: 'increment counter' }),
    getDecrementBtn: () => ...,
    getErrorHeading: () => ...,
    getCountAtZero: () => ...,
    getCountAtOne: () => ...,
  }
  ```

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
