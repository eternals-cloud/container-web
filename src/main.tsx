import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import App from "./App.tsx";
import "./main.scss";
import store from "./redux/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={"Loader..."}>
      <Provider store={store}>
        <Toaster
          position="top-right"
          toastOptions={{
            classNames: {
              title: "sonner-title",
              description: "sonner-description",
              error: "sonner-error",
            },
          }}
        />
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
);
