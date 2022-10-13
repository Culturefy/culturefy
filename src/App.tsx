import { useState ,Suspense } from 'react'
// import reactLogo from './assets/react.svg'
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import './App.css'
// import { router } from 'src/routes/index'
import { router } from './routes/index'

function App() {

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider
        router={router}
        // fallbackElement={<h1>Loading...</h1>}
      />
      </Suspense>
    </div>
  )
}

export default App
