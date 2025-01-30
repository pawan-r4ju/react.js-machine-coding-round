import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [isFile, setIsFile] = useState(null);

  const handleFile = (e) => {
    setIsFile(e.target.files[0]);
  };

  const handleFileData = async () => {
    if (isFile) {
      const formData = new FormData();
      formData.append('file', isFile);
      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('response', response.data);
        alert('File uploaded successfully to /uploads folder');
      } catch (error) {
        console.log(error);
        alert('Error uploading file');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input type="file" onChange={handleFile} className="mb-4" />
      {isFile && (
        <div>
          <p>Selected file: {isFile.name}</p>
          <button onClick={handleFileData} className="border px-4 py-2 mt-2">
            Upload to /uploads
          </button>
        </div>
      )}
    </div>
  );
}

export default App;