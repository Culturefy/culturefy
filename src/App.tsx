import React, { useEffect } from "react";
import { useState } from "react";
// import reactLogo from './assets/react.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import { router } from 'src/routes/index'
import { router } from "./routes/index";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
    </div>
  );
}

export default App;
