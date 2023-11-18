import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProviderContextProvider } from "./context/ProviderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProviderContextProvider>,
);
