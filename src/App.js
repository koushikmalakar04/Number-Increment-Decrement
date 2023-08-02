
import './App.css';

import { useState } from 'react';
function App() {
  const [number, setNumber] = useState(0)

  function clickOnMinus(){
    setNumber(number-1)
  }

  function clickOnPlus(){
    setNumber(number+1)
    
  }

  function clickOnReset(){
    setNumber(0)
    
  }

  return (
  <div className='Main'>
       <h1>Number Increment and Decrement</h1>
      <div className="App" >
        <div>
          <button onClick={clickOnMinus}>
            -
            </button>
        </div>
        <div>
          {number}
        </div>
        <div>
          <button onClick={clickOnPlus}>
            +
            </button>
        </div>
        </div>
        <div className='App'>
          <button onClick={clickOnReset}>
            Reset
          </button>
        </div>
     
     
      </div>
        
  );
}

export default App;
