import React, { useState } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button onClick={toggleModal} className="border rounded-md px-4 py-2">
        {isModalOpen ? 'Close Modal' : 'Open Modal'}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl mb-4">This is a modal</h2>
            <button onClick={toggleModal} className="border rounded-md px-4 py-2">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;