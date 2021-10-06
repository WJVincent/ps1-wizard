import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PromptProvider } from "./context/promptContext";

const Root = () => {
  return (
    <PromptProvider>
      <App />
    </PromptProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
