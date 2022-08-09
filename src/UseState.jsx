import { useState } from "react";

function expensiveInitialState() {
  console.log("should only called on first render");
  return 5;
}

export default function UseState() {
  // wrong way if getting initial state is an expensive operation
  // const [count, setCount] = useState(expensiveInitialState());

  // correct way if getting initial state is an expensive operation
  const [count, setCount] = useState(() => expensiveInitialState());

  function decrementCount() {
    // incorrect way, we expect count will be reduced by 2, but it will not happen this way
    // setCount(count - 1);
    // setCount(count - 1);

    // correct way
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
