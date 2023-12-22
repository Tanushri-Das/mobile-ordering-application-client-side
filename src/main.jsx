import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'; // Import the Provider
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes/Routes.jsx";
import { FilteredProductsProvider } from "./Context/FilteredProductsContext/FilteredProductsContext.jsx";
import store from "./redux/store.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your entire app with Provider */}
      <RouterProvider router={routes}>
        <FilteredProductsProvider>
          <App />
        </FilteredProductsProvider>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
