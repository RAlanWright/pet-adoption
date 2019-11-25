import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Conan" animal="Cat" breed="Medium-Hair Gray" />
      <Pet name="Seestah" animal="Cat" breed="Medium-Hair Gray" />
      <Pet name="Road-Roller" animal="Cat" breed="Medium-Hair Black" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
