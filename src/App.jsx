import { useState } from "react";
import { AppContext } from "./context/contextApi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppContext>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </AppContext>
  );
}

export default App;
