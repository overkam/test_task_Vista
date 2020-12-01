import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

export const renderTree = (state) => {
  ReactDOM.render(
      <BrowserRouter>
        <App state={state}/>
      </BrowserRouter>,
    document.getElementById("root")
  );
};

store.getPatients()
renderTree(store.getState());

store.subscribe(renderTree);
