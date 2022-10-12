import React, { useEffect } from "react";
import { useState } from "react";
// import reactLogo from './assets/react.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Services from "./Services/example.service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Test...</h1>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
    </div>
  );
}

export default App;
