import sum from './sum.js';
import React from "react";
import { render } from "react-dom";
import App from "./app.jsx"

render(<App />, document.getElementById("root"));

let args = [5,6];

console.log(sum(...args));

console.log("Hello webpack!");

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();
console.log(a);
console.log(b);