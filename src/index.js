import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { FeedsStore } from "./store";

const feedsStore = new FeedsStore();

ReactDOM.render(
  <App feedsStore={feedsStore} />,
  document.getElementById("root")
);

serviceWorker.register();