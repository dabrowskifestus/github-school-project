import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
}

export default App;
