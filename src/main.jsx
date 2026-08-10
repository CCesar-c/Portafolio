import React from "react";
import App from "./App";
import { createRoot, StrictMode } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
