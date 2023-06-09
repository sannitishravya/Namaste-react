import React from "react";
import  ReactDOM  from "react-dom";
const Component1 = ()=><div> <h1>Namaste React

</h1></div>
const Component2 = ()=> <div><Component1/><h1>Hello</h1></div>
const root = ReactDOM.createRoot(document.getElementById("roots"));

root.render(<Component2/>);
