import Home from "./Pages/Home"
import Profile from './Pages/Profile'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowUser from "./Pages/ShowUser";

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile/:userid" element={<Profile />}/>
      <Route path="/showuser" element={<ShowUser />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
