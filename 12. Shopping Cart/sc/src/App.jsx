import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Shopping Cart</h1>
      <div className="flex items-center gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={addItem}
        >
          Add Item
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={removeItem}
        >
          Remove Item
        </button>
      </div>
      <div className="mt-4">
        <h2>Items in Cart: {count}</h2>
      </div>
    </div>
  );
}

export default App;