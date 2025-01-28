import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import {Provider} from 'react-redux'
import store from "./store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>      {/* parent route*/}
        <Route index={true} element={<HomeScreen />} /> {/* child route*/}
        <Route path ='/cart' element={<HomeScreen />} /> {/* child route*/}
        <Route path = "/product/:id" element={<ProductScreen />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={ store} >
    <RouterProvider router={router} />
  </Provider>
);
