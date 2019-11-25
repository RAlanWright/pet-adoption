const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement(
    "div", // What kind of element?
    { id: "Example attribute" }, // Empty object; The attributes of the component
    [
      React.createElement("h1", { id: "something-important" }, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Conan",
        animal: "Cat",
        breed: "Medium-Hair Gray"
      }),
      React.createElement(Pet, {
        name: "Seestah",
        animal: "Cat",
        breed: "Medium-Hair Gray"
      }),
      React.createElement(Pet, {
        name: "Road-Roller",
        animal: "Cat",
        breed: "Medium-Hair Black"
      })
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
