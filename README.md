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