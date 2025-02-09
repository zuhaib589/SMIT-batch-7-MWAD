import { useState } from "react";

function Header() {
  const [count, setcount] = useState(0);
  console.log(count);

  const list = ["FSD", "LHR", "GRW", "RWP"];

  return (
    <>
      <h1>Increment and Decrement </h1>

      <button onClick={() => setcount(count + 1)}>increment</button>

      <h1>{count}</h1>

      <button onClick={() => setcount(count - 1)}>decrement</button>
      <ul className="list-group">
        {list.map((item, index) => (
          <li className="list-group-items" key={item} onClick={() => console.log(item, index)}>
            {item}
          </li>
        ))}
      </ul>

      minor change 
      <p> still Nothing is changed </p>
    </>
  );
}

export default Header;
