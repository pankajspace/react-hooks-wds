import { useState, useEffect, useRef } from "react";

export function UseRef1() {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Textbox</button>
    </>
  );
}

export function UseRef2() {
  const [value, setValue] = useState("");
  const renderCountRef = useRef(1);

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>I am rendered {renderCountRef.current} times.</div>
    </>
  );
}

export function UseRef3() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My previous name was {prevName.current}.
        <br />
        My Current name is {name}
      </div>
    </>
  );
}
