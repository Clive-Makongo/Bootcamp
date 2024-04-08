import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [errMessage, setErrMessage] = useState('')

  const incrementCount = () => {
    if (count >= 0) {
      setCount(count + 1)
      setErrMessage('')
    }
  }
  const decrementCount = () => count <= 0 ? setErrMessage('The counter can not go below zero') : setCount(count - 1)

  return (
    <div className="app-container">
      <div>

        <h1>
          The counter is currently &nbsp;
          <span>{ count }</span>
        </h1>
        <button
          onClick={ incrementCount }
        >
          increment counter
        </button>
        <button
          onClick={ decrementCount }
        >
          decrement counter
        </button>

        <h2>{ errMessage }</h2>
      </div>
    </div>
  );
}

export default App;
