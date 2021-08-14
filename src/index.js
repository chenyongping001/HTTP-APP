import React from "react";
import ReactDOM from "react-dom";
import Raven from "raven-js";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
Raven.config(
  "https://ba5aa601005143a7b9f1fda5f5fe0987@o956932.ingest.sentry.io/5906283",
  { release: 1 - 0 - 0, environment: "development-test" }
).install();
