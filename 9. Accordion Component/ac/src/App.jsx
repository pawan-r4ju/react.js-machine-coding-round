import React, { useState } from 'react';
import './App.css';

const accordionData = [
  { id: 1, title: 'Section 1', content: 'Content for section 1' },
  { id: 2, title: 'Section 2', content: 'Content for section 2' },
  { id: 3, title: 'Section 3', content: 'Content for section 3' },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;