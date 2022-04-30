import { useState } from "react";

function InputBox() {
  const [variaabel, setVariaabel] = useState("");

  return (
    <>
      <input
        value={variaabel}
        onChange={function myFunction(evt) {
          setVariaabel(evt.target.value);
        }}
      ></input>
      <div>{variaabel}</div>
    </>
  );
}

export default InputBox;
