import logo from "./logo.svg";
import "./App.css";

import UseMemo from "./UseMemo";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import { UseRef1, UseRef2, UseRef3 } from "./UseRef";
import { UseContext1 } from "./UseContext1";

function App() {
  return (
    <div className="App">
      {/* <UseMemo></UseMemo> */}
      {/* <UseState></UseState> */}
      {/* <UseEffect></UseEffect> */}
      {/* <UseRef1></UseRef1> */}
      {/* <UseRef2></UseRef2> */}
      {/* <UseRef3></UseRef3> */}
      <UseContext1></UseContext1>
    </div>
  );
}

export default App;
