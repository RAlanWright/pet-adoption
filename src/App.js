import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div", // What kind of element?
  //   { id: "Example attribute" }, // Empty object; The attributes of the component
  //   [
  //     React.createElement("h1", { id: "something-important" }, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Conan",
  //       animal: "Cat",
  //       breed: "Medium-Hair Gray"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Seestah",
  //       animal: "Cat",
  //       breed: "Medium-Hair Gray"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Road-Roller",
  //       animal: "Cat",
  //       breed: "Medium-Hair Black"
  //     })
  //   ]
  // );

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Conan" animal="Cat" breed="Medium-Hair Gray" />
      <Pet name="Seestah" animal="Cat" breed="Medium-Hair Gray" />
      <Pet name="Road-Roller" animal="Cat" breed="Medium-Hair Black" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
