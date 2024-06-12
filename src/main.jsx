import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Provider from "./store/utils/Provider.jsx";
import { store } from "./store/store.js";
ReactDOM.createRoot(document.getElementById("root"), {
  identifierPrefix: "unicode_",
}).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
