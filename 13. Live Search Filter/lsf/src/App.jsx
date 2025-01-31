import { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
    "Kiwi",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <ul className="w-1/2">
        {filteredItems.map((item, index) => (
          <li key={index} className="border p-2 my-1"
          onClick={()=>setSearchTerm(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;