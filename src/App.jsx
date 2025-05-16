import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="text-3xl font-bold underline hover:text-amber-500">
        Hello world!
      </h1>
    </>
  );
}

export default App;
