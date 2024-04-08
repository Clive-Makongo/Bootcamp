# useEffect

In this activity, we will practice using the useState and useEffect Hooks by updating an incomplete component.

## Instructions

Resolve the following issue:

* As a user, I want to be able to type a search term into the input field and see a dynamically generated URL appear in the section below.

* Replace your React application's src folder with [starter/src](starter/src).

* If you created a new React app, you will need to install Axios, React Router, and Bootstrap.

* Start the application in dev mode by running `npm run dev` in your terminal.

* Open your browser to [localhost:5173](http://localhost:5173) and study the rendered application.

* Update this application to accomplish the following:

  1. Update the call to the `useEffect` Hook:

      * Fix the `useEffect` hook so that it triggers only when the user enters text into the search bar, instead of running after every state change.

      * Update `title` and `url` using the response of the API call.

  2. Fix the `handleInputChange` function to ensure that the intended Wikipedia URL is correctly shown on the page.

## 💡 Hints  

* Only one page needs to be modified for this activity. Which file is it?  

* If you need some help updating the `useEffect` hook, you can use <https://codedamn.com/news/reactjs/useeffect-dependency>.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
