import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchItems = async () => {
    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      const newItems = Array.from({ length: 20 }, (_, index) => `Item ${index + 1 + items.length}`);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ul className="w-full">
        {items.map((item, index) => (
          <li key={index} className="border p-2 my-1">
            {item}
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;