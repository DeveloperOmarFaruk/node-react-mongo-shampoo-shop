import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  Provider as AlertProvider,
  positions,
  transitions,
  types,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: positions.TOP_RIGHT,
  timeout: 4000,
  offset: "60px",
  type: types.SUCCESS,
  transition: transitions.FADE,
};

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
