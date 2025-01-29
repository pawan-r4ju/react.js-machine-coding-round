import React, { useState } from "react";
import "./App.css";

function App() {
  const suggestions = [
    "apple",
    "banana",
    "cherry",
    "date",
    "fig",
    "grape",
    "kiwi",
  ];
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestion, setFilteredSuggestions] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const filteredArr = suggestions.filter((suggestion) => {
        return suggestion.includes(value.toLowerCase());
      });
      setFilteredSuggestions(filteredArr);
    } else {
      filteredSuggestion([]);
    }
  };
  const handleSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={inputValue}
        onChange={handleInput}
      />
      <ul>
        {filteredSuggestion.map((suggestion, idx) => {
          return (
            <li key={idx} onClick={() => handleSuggestion(suggestion)}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
