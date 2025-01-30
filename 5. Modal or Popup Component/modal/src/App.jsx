import React, { useState } from 'react';
import './App.css';

function App() {
  const [model,setModel]=useState(false)
  const isModelOpen = ()=>{
    setModel((model)=>!model)
  }

  console.log(model);
  

  return (
    <div className='flex items-center justify-center'>
      <button className='border px-2' onClick={isModelOpen}>display module</button>
      {
        model &&(<div>
          <h1>
            display
          </h1>
        <button onClick={isModelOpen} className='border px-2'>Close</button>
        </div>)
      }
    </div>
  );
}

export default App;