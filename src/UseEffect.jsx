import { useEffect, useState } from "react";

export default function UseEffect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect code runs");
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      console.log("cleanup code runs");
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <>
      <div>Window Width: {windowWidth}</div>
    </>
  );
}
