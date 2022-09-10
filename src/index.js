import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./path/Main";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);
