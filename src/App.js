import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => {setCount(count+1)}} id="zwiekszBtn">Zwiększ</button>
      <button onClick={() => {count>0 && setCount(count-1)}} id="zmniejszBtn">Zmniejsz</button>
    </div>
  );
}

export default App;
