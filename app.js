const heading = React.createElement("div", { id: "div1" }, [
  React.createElement("div", { id: "div2" }, [
    React.createElement("h1", { id: "h1" }, "Its an h1 tag"),
    React.createElement("h1", { id: "h2" }, "Its an h2 tag"),
  ]),
  React.createElement("div", { id: "div2" }, [
    React.createElement("h1", { id: "h1" }, "Its an h1 tag"),
    React.createElement("h1", { id: "h2" }, "Its an h2 tag"),
  ]),
]);
console.log("heading", heading);
console.log("heading", heading.props);
console.log("heading", heading.props.children);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
