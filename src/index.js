import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Layout from "./Component/Layout";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <BrowserRouter>
      <Layout>
        <App />
      </Layout>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
