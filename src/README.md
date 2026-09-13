Project Name

Dev Stack

Description

Dev Stack is a simple and interactive web application that helps users explore different web technologies and create their own technology stack based on their interests.

Technologies Used
React.js
TypeScript
Tailwind CSS
DaisyUI
React-Toastify
JSON
Vite
Features
Browse technologies with their details, rating, and difficulty.
Add technologies to a personal stack without duplicates.
Remove selected technologies individually or all at once.

## React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX lets us write HTML-like code inside JavaScript. It makes React code easier to read and write.

**2. What is the difference between props and state?**
Props are data passed from a parent component to a child. State is data that belongs to a component and can change.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` is used to store and update data in a component. I used it to manage the data and changes in my project.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs code when something happens, such as when a component loads. I used it to load the JSON data when the page started.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
A `key` helps React identify each item in a list. It helps React update the correct item efficiently.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing something only when a condition is true. For example, I showed an **empty stack message** when there were no items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
We pass data from parent to child using **props**. A child can send data back by calling a function passed to it through props