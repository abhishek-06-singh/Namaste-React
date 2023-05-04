/** 
 <div id="root">
  <div id="parent">
  <div id="child">
    <h1>HELLO I AM FIRST child</h1>
    <h2>HELLO I AM THE second Child</h2>
  </div>
  <div id="sibling">
    <h1>HELLO I AM FIRST child of sib</h1>
    <h2>HELLO I AM THE second  child of sib</h2>
  </div>
 </div>
</div>
**/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "HELLO I AM FIRST child"),
    React.createElement("h2", {}, "HELLO I AM THE second Child"),
  ]),
  React.createElement("div", { id: "sibling" }, [
    React.createElement("h1", {}, "HELLO I AM FIRST child of sib"),
    React.createElement("h2", {}, "HELLO I AM THE second  child of sib "),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
