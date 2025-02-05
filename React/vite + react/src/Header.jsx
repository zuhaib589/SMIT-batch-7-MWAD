import { useState } from "react";

function Header() {
  const [count, setcount] = useState(0);
  console.log(count);

  return (
    <>
      <h1>Hello i'm heading 1</h1>

      <button onClick={() => setcount((count) => count + 1)}>
        
        increment
      </button>
      
      <h1>{count}</h1>

      <button onClick={() => setcount((count) => count - 1)}>
        
        decrement
      </button>
    </>
  );
}

export default Header;
