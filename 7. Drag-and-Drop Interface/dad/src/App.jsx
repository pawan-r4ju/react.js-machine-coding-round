import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
  ]);
  const [draggedOverItemIdx, setDraggedItemIdx] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIdx(index);
  };
  const handleDragOver = (index) => {
    if (index === draggedOverItemIdx) {
      return;
    }
    const newItems = items.filter((item, idx) => {
      return idx !== draggedOverItemIdx;
    });
    newItems.splice(index, 0, items[draggedOverItemIdx]);
    setDraggedItemIdx(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggedItemIdx(null);
  };

  return (
    <>
      <ul>
        {items.map((item, idx) => {
          return (
            <li
              key={idx}
              draggable
              onDragStart={() => handleDragStart(idx)}
              onDragOver={() => handleDragOver(idx)}
              onDragEnd={handleDragEnd}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
