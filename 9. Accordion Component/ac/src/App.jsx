import React, { useState } from "react";
import "./App.css";

const accordionData = [
  { id: 1, title: "Section 1", content: "Content for section 1" },
  { id: 2, title: "Section 2", content: "Content for section 2" },
  { id: 3, title: "Section 3", content: "Content for section 3" },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActiveIndex = (index) => {
    setActiveIndex(activeIndex == index ? null : index);
  };

  return (
    <div>
      {accordionData.map((data, index) => {
        return (
          <>
            <h3 key={data.id} onClick={() => handleActiveIndex(index)}>
              {data.title}
            </h3>
            {activeIndex ==index && (
              <div>
                <h4>{data.content}</h4>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default App;
