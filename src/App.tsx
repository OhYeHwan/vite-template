import { useState } from "react";
import Recoil from "./Recoil";
import Zustand from "./Zustand";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button onClick={() => setCount(0)}>reset</button>
        </p>
      </header>
      <Zustand />
      <Recoil />
    </div>
  );
}

export default App;
