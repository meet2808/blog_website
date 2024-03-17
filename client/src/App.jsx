import { useState } from "react"
import { Header, Footer, ScrollToTop } from "./components";
import { Outlet } from "react-router-dom";
import { LoggedInProvider } from "./hooks/useLoggedIn";
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <LoggedInProvider value={{ isLoggedIn }} >
      <ScrollToTop />
      <div className="flex flex-col">
        <Header />
        <div className="px-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </LoggedInProvider >
  )
}

export default App;