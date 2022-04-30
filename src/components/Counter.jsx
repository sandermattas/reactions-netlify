import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={function clickIncrease() {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Add 1up
      </button>
      <br />
      <div>{count}</div>
    </>
  );
}

export default Counter;
