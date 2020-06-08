import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./styles/index.scss";
import "./styles/tailwind/tailwind.css";

const App = () => (
  <div className="text-center">
    <h1>Hello World</h1>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
