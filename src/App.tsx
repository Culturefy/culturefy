import { React ,useState ,Suspense } from 'react'
// import reactLogo from './assets/react.svg'
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import './App.css'
// import { router } from 'src/routes/index'
import { router } from './routes/index'
import Loader from './components/Loader'

function App() {

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
      <RouterProvider
        router={router}
      />
      </Suspense>
    </div>
  )
}

export default App
