import React, { useState } from "react";
import "./App.css";
import TodoLIst from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const removeElem = (index) => {
    setTodos(
      todos.filter((_, idx) => {
        return idx !== index;
      })
    );
  };
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            placeholder="enter the task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border rounded-md text-center"
          />{" "}
          <button className="border rounded-md px-2" onClick={addTodo}>
            add task
          </button>
        </div>
        <div className="w-[25%] items-center justify-center">
          <ol className="">
            {todos.map((element, idx) => {
              return (
                <li
                  key={idx}
                  className="border rounded-sm my-1.5 flex items-center justify-between px-2 "
                >
                  <span>{element}</span>{" "}
                  <button
                    onClick={() => removeElem(idx)}
                    className="m-1 border px-2 rounded-md"
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
