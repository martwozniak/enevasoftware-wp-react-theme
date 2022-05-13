import "./styles/main.scss";
import Person from "./scripts/Person";
import ExampleReactComponent from "./scripts/ExampleReactComponent";
import React from "react";
import ReactDOM from "react-dom";

const person1 = new Person("Mart");
ReactDOM.render(
  <ExampleReactComponent />,
  document.querySelector("#render-react-example-here")
);
