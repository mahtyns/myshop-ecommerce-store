import react from "react";
import reactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from "./routes";

reactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
