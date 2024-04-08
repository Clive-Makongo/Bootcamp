import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    if (count >= 0) {
      setCount(count + 1)
    }
  }

  return (
    <div>
      <h1>
        The counter is currently &nbsp;
        <span>{ count }</span>
      </h1>
      <button
        type="button"
        onClick={ incrementCount }
      >
        increment counter
      </button>
    </div>
  );
}

export default App
