import React from "react";
import  ReactDOM  from "react-dom";
const Parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
const heading = React.createElement("h1", { id: "heading" }, "Hello world");

const root = ReactDOM.createRoot(document.getElementById("roots"));

root.render(Parent);
