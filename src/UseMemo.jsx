import { useEffect, useMemo, useState } from "react";

function slowFunction(number) {
  console.log("in slow function");
  for (let i = 0; i <= 100000; i++) {
    console.log();
  }
  return number * 2;
}

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // inefficient
  // const doubleNumber = slowFunction(number);

  // efficient
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  // inefficient
  // const themeStyles = {
  //   backgroundColor: dark ? "black" : "lightgrey",
  //   color: dark ? "white" : "black",
  // };

  // efficient
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "lightgrey",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <>
      <div style={themeStyles}>
        <input
          type="number"
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevTheme) => !prevTheme)}>
          Change Theme
        </button>
        <div>{doubleNumber}</div>
      </div>
    </>
  );
}
