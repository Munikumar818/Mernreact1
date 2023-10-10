
import './App.css';

import { useState } from 'react';
function App() {
  const[val,setVal]=useState('');

  return (
    <div className='box'>
      <div className="App">
      <h1>
        Responsive paragraph word counter
      </h1>
      <textarea rows="4" cols="50" value={val} onChange={e=>{setVal(e.target.value)}}></textarea>
      <p>word count: {val.split(' ').length}</p>
    </div>
    </div>
  );
}

export default App;
