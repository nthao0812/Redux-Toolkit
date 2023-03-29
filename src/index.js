import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//function Greeting(){
// return <h2>My frist Component</h2>}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //(<Greeting/>)
);
