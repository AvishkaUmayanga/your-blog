import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { useEffect } from "react";

function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  },[location])
    
  return (
    <div className="flex flex-col w-full min-h-screen dark:bg-slate-950 bg-gray-50 font-roboto">
      <Header />
      <div className="flex grow">
        <Outlet />
      </div>
      <Footer />
   </div>
  )
}

export default App
