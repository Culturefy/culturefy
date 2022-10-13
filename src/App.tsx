import React, { useEffect } from "react";
import { useState } from "react";
// import reactLogo from './assets/react.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
// import { router } from 'src/routes/index'
import { router } from "./routes/index";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
      </Provider>
    </div>
  );
}

export default App;
