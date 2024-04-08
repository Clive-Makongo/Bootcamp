import { useState } from 'react';
import './App.css';

function App() {
  const [developerState, setDeveloperState] = useState({
    excitementLevel: 10000,
    lifeLongLearner: true,
    mood: 'content',
    name: 'Alec',
  });

  return (
    <div className="card">
      <div>Name: {developerState.name}</div>
      <div>Status: {developerState.mood}</div>
      <div>Lifelong learner: {developerState.lifeLongLearner.toString()}</div>
      <div>Excitement Level: {developerState.excitementLevel}</div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setDeveloperState({ ...developerState, mood: 'lazy' })}
        >
          Encourage Laziness
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() =>
            setDeveloperState({ ...developerState, mood: 'determined' })}
        >
          Fill with Determination
        </button>
      </div>
    </div>
  );
}

export default App;
