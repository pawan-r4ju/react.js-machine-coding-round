# Top 20 React machine coding round questions
### **1\. Todo List Application**

-   **Key Concepts**: CRUD operations, state management, localStorage, filtering (active/completed).

-   **Extras**: Undo/Redo functionality, drag-and-drop reordering.

* * * * *

### **2\. Auto-Complete Search Bar**

-   **Key Concepts**: API integration (fetch suggestions), debouncing, caching, keyboard navigation.

-   **Extras**: Highlight matching text, error handling.

* * * * *

### **3\. Infinite Scroll List**

-   **Key Concepts**: Pagination, scroll event handling, API integration, performance optimization (virtualization).

-   **Extras**: Loading skeletons, error boundaries.

* * * * *

### **4\. Timer/Countdown Component**

-   **Key Concepts**: `useEffect` cleanup, `setInterval`, dynamic UI updates, pause/reset functionality.

* * * * *

### **5\. Modal/Popup Component**

-   **Key Concepts**: React Portals, event propagation, accessibility (focus trapping, ARIA labels).

-   **Extras**: Dynamic content loading.

* * * * *

### **6\. File Uploader**

-   **Key Concepts**: File handling, drag-and-drop upload, progress bar, error handling.

* * * * *

### **7\. Drag-and-Drop Interface**

-   **Key Concepts**: HTML5 Drag-and-Drop API, state management for reordering items.

-   **Extras**: Multiple lists (e.g., Kanban board).

* * * * *

### **8\. Paginated Table with Sorting**

-   **Key Concepts**: Client-side sorting/pagination, dynamic table rendering, API integration.

-   **Extras**: Server-side pagination/sorting.

* * * * *

### **9\. Accordion Component**

-   **Key Concepts**: Dynamic content expansion/collapse, CSS transitions, controlled components.

* * * * *

### **10\. Tabs Component**

-   **Key Concepts**: Dynamic content switching, URL synchronization, keyboard navigation.

* * * * *

### **11\. Star Rating Component**

-   **Key Concepts**: Dynamic rendering based on user input, hover effects, controlled forms.

* * * * *

### **12\. Shopping Cart**

-   **Key Concepts**: Context API/Redux for state management, cart operations (add/remove/update), total calculation.

* * * * *

### **13\. Live Search Filter**

-   **Key Concepts**: Real-time filtering of lists, debouncing, memoization (e.g., `useMemo`).

* * * * *

### **14\. Form Validation**

-   **Key Concepts**: Controlled inputs, dynamic error messages, form submission handling.

-   **Extras**: Multi-step forms.

* * * * *

### **15\. Stopwatch**

-   **Key Concepts**: `useEffect` for timers, lap functionality, precision time calculation.

* * * * *

### **16\. Quiz Application**

-   **Key Concepts**: Dynamic rendering of questions, score tracking, timers for questions.

* * * * *

### **17\. Calendar/Date Picker**

-   **Key Concepts**: Date handling (e.g., `date-fns`), dynamic grid rendering, range selection.

* * * * *

### **18\. Multi-Step Form Wizard**

-   **Key Concepts**: State persistence across steps, progress indicator, conditional navigation.

* * * * *

### **19\. Theme Toggler (Dark/Light Mode)**

-   **Key Concepts**: Context API, CSS-in-JS/styling, localStorage persistence.

* * * * *

### **20\. Progress Bar Component**

-   **Key Concepts**: Dynamic width calculation, animation, segmented progress.

* * * * *

### **Why These Questions?**

These questions test:

-   **React Core**: State/props, hooks (`useState`, `useEffect`, `useContext`), component lifecycle.

-   **Performance**: Memoization, virtualization, debouncing.

-   **UI/UX**: Accessibility, responsive design, error handling.

-   **APIs**: Integration with backend services.

* * * * *

### **Tips for Machine Coding Rounds**

1.  **Start Simple**: Build a working MVP first, then add features.

2.  **Modular Code**: Split components logically (e.g., `SearchBar`, `TodoItem`).

3.  **Optimize**: Use `useCallback`/`useMemo` where needed.

4.  **Test Edge Cases**: Empty states, API failures, invalid inputs.

Prepare by practicing these components from scratch, and you'll ace the round! 🚀


### **1\. Todo List**

**Approach**:

-   Use `useState` for todos and filter state.

-   Store todos in `localStorage` via `useEffect`.

-   Implement CRUD operations.

**Key Code**:

```bash
// Add Todo
const addTodo = () => {
  setTodos([...todos, { id: Date.now(), text: input, done: false }]);
};

// Toggle Todo
const toggleTodo = (id) => {
  setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
};

// Filter Todos
const filteredTodos = todos.filter(todo =>
  filter === 'all' ? true : filter === 'active' ? !todo.done : todo.done
);
```
* * * * *

### **2\. Auto-Complete Search Bar**

**Approach**:

-   Debounce API calls with `setTimeout`.

-   Handle keyboard navigation (↑/↓/Enter).

-   Cache results to avoid redundant API calls.

**Key Code**:


```bash
// Debounced API Call
const debouncedFetch = debounce(async (query) => {
  const res = await fetch(`/api/search?q=${query}`);
  setSuggestions(await res.json());
}, 300);

// Handle Keyboard Events
const handleKeyDown = (e) => {
  if (e.key === 'ArrowDown') setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
  if (e.key === 'ArrowUp') setSelectedIndex(prev => Math.max(prev - 1, 0));
};
```
* * * * *

### **3\. Infinite Scroll List**

**Approach**:

-   Track scroll position to trigger pagination.

-   Use `useEffect` to load data on scroll.

-   Add a loading spinner and error handling.

**Key Code**:

```bash

// Scroll Listener
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
    loadMoreData();
  }
};
```
* * * * *

### **4\. Timer/Countdown**

**Approach**:

-   Use `setInterval` in `useEffect`.

-   Manage cleanup to prevent memory leaks.

**Key Code**:

```bash

const Timer = () => {
  const [time, setTime] = useState(60);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => setTime(prev => prev - 1), 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>{time}s</div>;
};
```
* * * * *

### **5\. Modal/Popup (with React Portal)**

**Approach**:

-   Use `ReactDOM.createPortal`.

-   Handle click outside and `Escape` key to close.

**Key Code**:

```bash

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>  <div className="modal-content" onClick={(e) => e.stopPropagation()}>  {children}  </div>  </div>,
    document.getElementById('modal-root')
  );
};
```
* * * * *

### **6\. File Uploader**

**Approach**:

-   Use `<input type="file">` and `FormData` for uploads.

-   Track progress with `axios` or `fetch`.

**Key Code**:

```bash

const handleUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await axios.post('/api/upload', formData, {
    onUploadProgress: (progressEvent) => {
      const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      setProgress(percent);
    }
  });
};
```
* * * * *

### **7\. Drag-and-Drop Interface**

**Approach**:

-   Use HTML5 Drag-and-Drop API or `react-beautiful-dnd`.

**Key Code**:

```bash
// HTML5 Drag-and-Drop
const onDragStart = (e, index) => {
  e.dataTransfer.setData('index', index);
};

const onDrop = (e, newIndex) => {
  const oldIndex = e.dataTransfer.getData('index');
  reorderItems(oldIndex, newIndex);
};
```
* * * * *

### **8\. Paginated Table with Sorting**

**Approach**:

-   Client-side sorting/pagination with `useMemo`.

-   Server-side integration via API.

**Key Code**:

```bash

// Client-Side Sorting
const sortedData = useMemo(() => {
  return data.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
}, [data, sortBy]);
```
* * * * *

### **9\. Accordion Component**

**Approach**:

-   Track active index with `useState`.

**Key Code**:

```bash

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return items.map((item, index) => (
    <div key={index}>  <button onClick={() => setActiveIndex(activeIndex === index ? null : index)}>  {item.title}  </button>  {activeIndex === index && <div>{item.content}</div>}  </div>
  ));
};
```
* * * * *

### **10\. Tabs Component**

**Approach**:

-   Track active tab with `useState`.

**Key Code**:

```bash

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>  {tabs.map((tab, index) => (
        <button key={index} onClick={() => setActiveTab(index)}>{tab.title}</button>
      ))}  <div>{tabs[activeTab].content}</div>  </div>
  );
};
```
* * * * *

### **11\. Star Rating Component**

**Approach**:

-   Use dynamic rendering for stars.

**Key Code**:

```bash

const StarRating = ({ rating, setRating }) => {
  return (
    <div>  {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => setRating(index + 1)}
          style={{ color: index < rating ? 'gold' : 'gray' }}
        > ★ </span>
      ))}  </div>
  );
};
```
* * * * *

### **12\. Shopping Cart (Context API)**

**Approach**:

-   Use `createContext` for cart state.

**Key Code**:

```bash

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart([...cart, item]);
  return (
    <CartContext.Provider value={{ cart, addToCart }}>  {children}  </CartContext.Provider>
  );
};
```
* * * * *

### **13\. Live Search Filter**

**Approach**:

-   Filter data based on search term using `useMemo`.

**Key Code**:

```bash

const filteredData = useMemo(() => {
  return data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [data, searchTerm]);
```
* * * * *

### **14\. Form Validation**

**Approach**:

-   Use controlled inputs and validate on submit.

**Key Code**:

```bash

const validateForm = () => {
  const errors = {};
  if (!email.includes('@')) errors.email = 'Invalid email';
  return errors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validateForm();
  if (Object.keys(errors).length === 0) submitForm();
  else setErrors(errors);
};
```
* * * * *

### **15\. Stopwatch**

**Approach**:

-   Track time with `useState` and `useEffect`.

**Key Code**:

```bash

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) interval = setInterval(() => setTime(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning]);
};
```
* * * * *

### **16\. Quiz App**

**Approach**:

-   Track current question and score.

**Key Code**:

```bash

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1);
    setCurrentQuestion(prev => prev + 1);
  };
};
```
* * * * *

### **17\. Calendar/Date Picker**

**Approach**:

-   Use `date-fns` for date manipulation.

**Key Code**:

```bash

import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  });
};
```
* * * * *

### **18\. Multi-Step Form Wizard**

**Approach**:

-   Track current step and persist data.

**Key Code**:

```bash

const MultiStepForm = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };
};
```
* * * * *

### **19\. Theme Toggler**

**Approach**:

-   Use `useContext` and CSS variables.

**Key Code**:

```bash

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}>  {children}  </ThemeContext.Provider>
  );
};
```
* * * * *

### **20\. Progress Bar**

**Approach**:

-   Calculate progress dynamically.

**Key Code**:

```bash
const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">  <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      />  </div>
  );
};
```
* * * * *

### **Final Tips**

1.  **State Management**: Use `useState`, `useReducer`, or Context API.

2.  **Performance**: Memoize with `useMemo`/`useCallback`, use virtualization for large lists.

3.  **Testing**: Cover edge cases (empty states, API failures).

4.  **Styling**: Use CSS-in-JS (styled-components) or modular CSS.

Need **full code for a specific problem**? Let me know! 😊


# react assessment questions

### Basic Questions

1.  What is React?

    -   React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive UI. It was developed by Facebook.
2.  What are the main features of React?

    -   Component-based architecture, Virtual DOM, Unidirectional data flow, JSX syntax, and React Hooks.
3.  What is JSX?

    -   JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It gets compiled into `React.createElement()` calls.
4.  Why is React called a "library" and not a "framework"?

    -   React focuses only on the view layer of an application, whereas frameworks like Angular or Vue provide a complete structure including routing, state management, etc.
5.  What is the difference between React and ReactDOM?

    -   `React` is the core library for creating components, while `ReactDOM` is responsible for rendering those components into the DOM.
6.  What is the virtual DOM?

    -   The virtual DOM is a lightweight copy of the real DOM. React uses it to optimize updates by comparing changes before applying them to the actual DOM.
7.  How does React's virtual DOM work?

    -   React creates a virtual DOM tree, compares it with the previous version (diffing), and then updates only the parts of the real DOM that have changed.
8.  What is a component in React?

    -   A component is a reusable piece of UI. It can be either a function or a class that returns JSX.
9.  What are functional components in React?

    -   Functional components are simple JavaScript functions that return JSX. They are stateless unless hooks are used.
10. What are class components in React?

    -   Class components are ES6 classes that extend `React.Component` and have lifecycle methods and state.
11. What is the difference between functional and class components?

    -   Functional components are simpler and use hooks for state and side effects, while class components use `this.state` and lifecycle methods.
12. What is props in React?

    -   Props (short for properties) are inputs passed to components. They are immutable and allow parent components to pass data to child components.
13. What is state in React?

    -   State is an object that holds data that may change over time. It is mutable and managed within the component.
14. How do you update the state in a class component?

    -   Use `this.setState({ key: value })`.
15. How do you update the state in a functional component?

    -   Use the `useState` hook: `setState(newValue)`.
16. What is the difference between props and state?

    -   Props are immutable and passed from parent to child, while state is mutable and managed within the component.
17. What is the purpose of `super()` in a React class component?

    -   `super()` calls the constructor of the parent class (`React.Component`) and initializes `this`.
18. What is the significance of keys in React lists?

    -   Keys help React identify which items have changed, been added, or removed, improving performance.
19. What happens if you don't provide a key to a list of elements in React?

    -   React will warn you in the console, and performance may degrade because React cannot efficiently track elements.
20. What is the difference between `map()` and `forEach()` when rendering lists in React?

    -   `map()` returns a new array of JSX elements, while `forEach()` does not return anything.

* * * * *

### Intermediate Questions

1.  What are React Hooks?

    -   Hooks are functions that let you use state and other React features without writing a class.
2.  What is the `useState` hook?

    -   `useState` allows functional components to manage state. Example: `const [state, setState] = useState(initialValue)`.
3.  What is the `useEffect` hook?

    -   `useEffect` lets you perform side effects (e.g., data fetching, subscriptions) in functional components.
4.  What is the `useContext` hook?

    -   `useContext` allows you to consume context values without wrapping components in a `Context.Consumer`.
5.  What is the `useReducer` hook?

    -   `useReducer` is an alternative to `useState` for managing complex state logic.
6.  What is the `useCallback` hook?

    -   `useCallback` memoizes a function to prevent unnecessary re-renders.
7.  What is the `useMemo` hook?

    -   `useMemo` memoizes a value to optimize performance.
8.  What is the `useRef` hook?

    -   `useRef` provides a mutable reference to a DOM element or a value that persists across renders.
9.  What is the difference between `useState` and `useReducer`?

    -   `useState` is simpler for managing small state, while `useReducer` is better for complex state logic.
10. When should you use `useCallback` and `useMemo`?

    -   Use `useCallback` for functions and `useMemo` for values to avoid unnecessary recalculations.
11. What is React Context?

    -   Context provides a way to pass data through the component tree without passing props manually at every level.
12. How do you create a context in React?

    -   Use `React.createContext(defaultValue)`.
13. How do you consume a context in React?

    -   Use `useContext(MyContext)` or wrap components in `<MyContext.Consumer>`.
14. What is the purpose of `React.memo`?

    -   `React.memo` prevents unnecessary re-renders of functional components by memoizing their output.
15. What is the difference between `React.memo` and `PureComponent`?

    -   `React.memo` is for functional components, while `PureComponent` is for class components.
16. What is prop drilling?

    -   Prop drilling is the process of passing props down multiple levels of nested components.
17. How can you avoid prop drilling?

    -   Use React Context or state management libraries like Redux.
18. What is the React lifecycle?

    -   The lifecycle refers to the stages a component goes through: mounting, updating, and unmounting.
19. What are the different phases of the React lifecycle?

    -   Mounting, Updating, and Unmounting.
20. What are the lifecycle methods in class components?

    -   `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, etc.
21. What are the equivalent hooks for lifecycle methods in functional components?

    -   `useEffect` replaces most lifecycle methods.
22. What is the `componentDidMount` lifecycle method used for?

    -   It runs after the component is mounted and is commonly used for data fetching.
23. What is the `componentDidUpdate` lifecycle method used for?

    -   It runs after the component updates and is used for side effects based on prop or state changes.
24. What is the `componentWillUnmount` lifecycle method used for?

    -   It runs before the component is removed from the DOM and is used for cleanup.
25. What is error boundary in React?

    -   Error boundaries catch JavaScript errors in child components and display a fallback UI.
26. How do you create an error boundary in React?

    -   Define a class component with `componentDidCatch` or `static getDerivedStateFromError`.
27. What is the purpose of `shouldComponentUpdate`?

    -   It determines whether a component should re-render based on prop or state changes.
28. What is the difference between controlled and uncontrolled components?

    -   Controlled components manage form data via state, while uncontrolled components use DOM references.
29. What is a higher-order component (HOC)?

    -   An HOC is a function that takes a component and returns a new component with additional props or behavior.
30. How do you create a higher-order component?

    -   Wrap a component inside another function and return the enhanced component.

* * * * *

### Advanced Questions

1.  What is Redux and how does it integrate with React?

    -   Redux is a state management library. It integrates with React via the `react-redux` package using `Provider` and `connect`.
2.  What is the Flux architecture?

    -   Flux is a unidirectional data flow architecture with actions, dispatcher, store, and view.
3.  What is the difference between Redux and Context API?

    -   Redux is more scalable and feature-rich, while Context API is simpler but less optimized for large-scale apps.
4.  What is middleware in Redux? Give an example.

    -   Middleware intercepts actions before they reach the reducer. Example: Redux Thunk for async actions.
5.  What is Redux Thunk?

    -   Redux Thunk allows you to write action creators that return functions instead of plain objects.
6.  What is Redux Saga?

    -   Redux Saga handles side effects using generator functions.
7.  What is the difference between Redux Thunk and Redux Saga?

    -   Thunk is simpler for basic async logic, while Saga is more powerful for complex workflows.
8.  What is the purpose of `connect()` in Redux?

    -   `connect()` connects a React component to the Redux store.
9.  What is the `Provider` component in Redux?

    -   `Provider` makes the Redux store available to the app.
10. What is the `combineReducers` function in Redux?

    -   It combines multiple reducers into a single root reducer.
11. What is the `store` in Redux?

    -   The store holds the entire state tree of the application.
12. What is the difference between `mapStateToProps` and `mapDispatchToProps`?

    -   `mapStateToProps` maps state to props, while `mapDispatchToProps` maps dispatch actions to props.
13. What is the purpose of `reselect` in Redux?

    -   Reselect creates memoized selectors to compute derived data.
14. What is React Router?

    -   React Router is a library for handling navigation and routing in React apps.
15. What is the difference between `BrowserRouter` and `HashRouter`?

    -   `BrowserRouter` uses the HTML5 history API, while `HashRouter` uses URL hashes.
16. How do you pass parameters via React Router?

    -   Use route params (`:id`) or query strings.
17. What is the difference between `push` and `replace` in React Router?

    -   `push` adds a new entry to the history stack, while `replace` replaces the current entry.
18. What is the purpose of `Switch` in React Router?

    -   `Switch` ensures only one route is rendered at a time.
19. What is lazy loading in React?

    -   Lazy loading delays the loading of non-critical components until they are needed.
20. How do you implement code splitting in React?

    -   Use `React.lazy` and `Suspense`.
21. What is React Suspense?

    -   Suspense allows components to wait for something (e.g., data fetching) before rendering.
22. What is the purpose of `React.lazy()`?

    -   `React.lazy()` dynamically imports components for lazy loading.
23. What is server-side rendering (SSR) in React?

    -   SSR renders React components on the server and sends HTML to the client.
24. What is Next.js and how does it relate to React?

    -   Next.js is a framework built on top of React that supports SSR, static site generation, and routing.
25. What is the difference between client-side rendering and server-side rendering?

    -   CSR renders on the client, while SSR renders on the server.
26. What is React Fiber?

    -   React Fiber is a reimplementation of React's reconciliation algorithm for better performance.
27. What is the difference between `ReactDOM.render()` and `ReactDOM.createRoot()`?

    -   `createRoot` is part of React 18's concurrent mode, while `render` is legacy.
28. What is concurrent mode in React?

    -   Concurrent mode allows React to interrupt rendering for higher-priority updates.
29. What is the difference between `useLayoutEffect` and `useEffect`?

    -   `useLayoutEffect` runs synchronously after DOM mutations, while `useEffect` runs asynchronously.
30. What is batching in React?

    -   Batching groups multiple state updates into a single re-render for performance.
31. What is the purpose of `React.StrictMode`?

    -   `StrictMode` highlights potential problems in the app during development.
32. What is the difference between `React.PureComponent` and `React.Component`?

    -   `PureComponent` implements `shouldComponentUpdate` with shallow comparison.
33. What is the difference between `setState` and `forceUpdate`?

    -   `setState` updates state and triggers re-render, while `forceUpdate` forces a re-render without changing state.
34. What is the difference between `setState` being asynchronous and synchronous?

    -   `setState` is asynchronous for performance optimization.
35. What is the purpose of `defaultProps`?

    -   `defaultProps` defines default values for props.
36. What is the difference between `defaultProps` and `props`?

    -   `defaultProps` provides fallback values, while `props` are passed explicitly.
37. What is the purpose of `PropTypes`?

    -   `PropTypes` validates the types of props passed to components.
38. How do you validate props using `PropTypes`?

    -   Example: `MyComponent.propTypes = { name: PropTypes.string }`.
39. What is the difference between `PropTypes` and TypeScript?

    -   `PropTypes` is runtime validation, while TypeScript is compile-time type checking.
40. What is the purpose of `React.Fragment`?

    -   `Fragment` groups children without adding extra nodes to the DOM.
41. What is the difference between `React.Fragment` and a `div`?

    -   `Fragment` doesn't create a DOM node, while `div` does.
42. What is the purpose of `React.Children`?

    -   `React.Children` provides utilities for working with `this.props.children`.
43. What is the difference between `React.Children.map` and `Array.prototype.map`?

    -   `React.Children.map` works with opaque data structures like `children`.
44. What is the purpose of `React.cloneElement`?

    -   `cloneElement` clones and modifies an element with new props.
45. What is the difference between `React.cloneElement` and `React.createElement`?

    -   `cloneElement` modifies existing elements, while `createElement` creates new ones.
46. What is the purpose of `React.forwardRef`?

    -   `forwardRef` forwards refs to child components.
47. What is the difference between `React.forwardRef` and `React.createRef`?

    -   `forwardRef` passes refs to child components, while `createRef` creates refs.
48. What is the purpose of `React.SuspenseList`?

    -   `SuspenseList` coordinates the loading order of multiple `Suspense` components.
49. What is the difference between `React.Suspense` and `React.SuspenseList`?

    -   `Suspense` handles individual components, while `SuspenseList` manages groups.
50. What is the future of React? - Future trends include React Server Components, improved concurrent mode, and better developer tools.