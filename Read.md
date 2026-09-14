# Dev Stack

Dev Stack is a responsive React application that helps users explore different web technologies and build their own technology stack.

Users can browse technologies, view their details, add technologies to their personal stack, and remove them when needed one by one or all at once.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON
- Vite

## Features

- Browse different technologies with their category, difficulty, rating, description, and icon.
- Add technologies to a personal stack with duplicate prevention and toast notifications.
- Remove individual technologies or clear the entire stack.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to read and allows us to describe the UI directly inside our component logic.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. They are read-only inside the child.

State is data managed by a component that can change over time and cause the component to re-render.

### 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook lets a React component store and update data in a component.

I used `useState` to store the technologies selected by the user:

const [addedTechnologies, setAddedTechnologies] = useState<techType[]>([]);

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

useEffect is used to perform side effects in a React component, such as fetching data after rendering.

In this project, I used React's use() with Suspense instead of useEffect to load the JSON data. Suspense also provides the loading state while the data is being fetched.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the key to identify individual items in a list. A unique key helps React understand which items were added, removed, or changed and update the UI efficiently.

For example:

technologies.map((technology) => (
    <TechCard
        key={technology.name}
        technology={technology}
    />
))

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering means showing different UI depending on a condition.

I used it in the stack sidebar. When there are no selected technologies, an empty message is displayed:

{addedTechnologies.length === 0 ? (
    <p>No technologies selected yet.</p>
) : (
    <div>
        {/* selected technologies */}
    </div>
)}

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

We pass data from parent to child using **props**. A child can send data back by calling a function passed to it through props