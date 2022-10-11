import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import { AuthContext } from './context/AuthContext';
import AuthLayout from './Layout/AuthLayout';
// import { router } from 'src/routes/index'
import { router } from './routes/index'

function App() {
  // </div>

  return (
    // <div className="App">
    //   <RouterProvider
    //     router={router}
    //     fallbackElement={<h1>Loading...</h1>}
    //   />
    
    
      <RouterProvider
        router={router}
        fallbackElement={<h1>Loading...</h1>}
      />
    
  )
}

export default App
