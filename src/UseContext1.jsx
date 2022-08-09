import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export function UseContext1() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  return (
    <>
      <GrandChildComponent1 />
      <GrandChildComponent2 />
    </>
  );
}

class GrandChildComponent1 extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => {
          return (
            <>
              <div>The theme is {theme}</div>
              <button onClick={() => setTheme("light")}>
                Change To Light Theme
              </button>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

function GrandChildComponent2() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div>The theme is {theme}</div>
      <button onClick={() => setTheme("dark")}>Change To Dark Theme</button>
    </>
  );
}
