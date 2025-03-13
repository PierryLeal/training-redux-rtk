import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { Theme } from "./features/shared/shared.consts";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
