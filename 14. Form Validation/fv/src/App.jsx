import { useState } from "react";
import "./App.css";

function App() {
  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setUName(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const formValid = (e) => {
    e.preventDefault();
    console.log(uName,password);
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={formValid} className="w-1/2">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            onChange={handleName}
            value={uName}
            className="p-2 border rounded"
          />
        
          <input
            type="password"
            placeholder="Password"
            onChange={handlePass}
            value={password}
            className="p-2 border rounded"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;