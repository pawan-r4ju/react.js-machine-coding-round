import { useState } from "react";
import "./App.css";

function App() {
  const arr = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(null);
  const [hovering, setHovering] = useState(null);

  const getColor = (index) => {
    const curIndex = hovering || rating;
    if (index <= curIndex) {
      if (curIndex < 3) {
        return "text-red-500";
      } else if (curIndex === 3) {
        return "text-yellow-500";
      } else {
        return "text-green-500";
      }
    }
    return "text-gray-500";
  };

  return (
    <>
      <div className="flex items-center justify-center gap-4 mb-5">
        {arr.map((elem, idx) => {
        
          return (
            <div
              key={idx}
              className={`border border-white rounded-lg p-4 ${getColor(idx+1)}`}
              onClick={() => setRating(idx+1)}
              onMouseEnter={() => setHovering(idx+1)}
              onMouseLeave={() => setHovering(null)}
            >
              &#9733;
            </div>
          );
        })}
      </div>
      <div>
        <h2>{rating} Out Of 5 Rating </h2>
      </div>
    </>
  );
}

export default App;
