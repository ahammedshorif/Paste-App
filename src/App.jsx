import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pastes from "./components/Pastes";
import ViewPaste from "./components/ViewPaste";

const router = createBrowserRouter(
    [
      {
        path: "/",
        element:
        <div className=" w-[90%] md:max-w-[800px] flex flex-col">
            <Navbar></Navbar>
            <Home></Home>
        </div>
      },
      {
        path: "/pastes",
        element: 
        <div className="w-[90%] md:max-w-[800px]">
           <Navbar></Navbar>
           <Pastes></Pastes>
        </div>
      },
      {
        path: "pastes/:pasteId",
        element: 
        <div className="w-[90%] md:max-w-[800px]">
           <Navbar></Navbar>
           <ViewPaste></ViewPaste>
        </div>
      },
    ]
);

function App() {
  

  return (
    <div className=" bg-black w-full flex justify-center text-amber-50 min-h-screen">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App
