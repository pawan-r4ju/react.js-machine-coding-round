import React, { useState } from "react";
import "./App.css";

const tabsData = [
  { id: 1, title: "Tab 1", content: "Content for Tab 1" },
  { id: 2, title: "Tab 2", content: "Content for Tab 2" },
  { id: 3, title: "Tab 3", content: "Content for Tab 3" },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(activeTab => activeTab=index );
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        {tabsData.map((tab, index) => {
          return (
            <>
              <div>
                {" "}
                <button
                  className=""
                  onClick={() => handleTabClick(index)}
                  key={tab.id}
                >
                  {tab.title}
                </button>
              </div>
            </>
          );
        })}
      </div>
      <div>
        {
          <div>
            {tabsData.map((tab, idx) => {
              return activeTab === idx ? <p>{tab.content}</p> : null;
            })}
          </div>
        }
      </div>
    </>
  );
}

export default App;
