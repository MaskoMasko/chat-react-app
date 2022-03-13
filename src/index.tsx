import React from "react";
import ReactDOM from "react-dom";
import Router from "./router/Router";
import { AuthUserProvider } from "./context/AuthUserContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthUserProvider>
      <Router />
    </AuthUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
