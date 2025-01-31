import { useState } from "react";
import "./App.css";

function App() {
  const arr = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const getColor = (index) => {
    const activeidx = hover || rating;
    if (index <= activeidx) {
      if (activeidx < 3) {
        return "text-red-500";
      } else if (activeidx === 3) {
        return "text-yellow-500";
      } else {
        return "text-green-500";
      }
    }
    return "text-gray-500";
  };

  return (
    <>
      <div className="flex  gap-4">
        {arr.map((elem, idx) => {
          return (
            <div className={` border border-white p-3 rounded-lg ${getColor(idx+1)}`}
            key={idx}
            onClick={()=>setRating(idx+1)}
            onMouseEnter={()=>setHover(idx+1)}
            onMouseLeave={()=>setHover(null)}
            >
              &#9733;
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <h2>{rating} out of 5</h2>
      </div>
    </>
  );
}

export default App;
