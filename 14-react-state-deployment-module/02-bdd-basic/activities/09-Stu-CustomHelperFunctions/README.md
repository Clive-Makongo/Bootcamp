# Refactor App.test.jsx: Create Custom Helper Functions

In this activity, you will reinforce and build upon the testing skills that you have learned so far by refactoring your code to contain and use the `renderApp` and `get[Element]` functions that were demonstrated by the instructor in [08-Ins-CustomHelperFunctions](../08-Ins-CustomHelperFunctions/README.md).

## Instructions

Inside of `src/tests/App.test.jsx`, create two helper functions:

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
