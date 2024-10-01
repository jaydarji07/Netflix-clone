import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/Home/HomePage"
import LogInPage from "./Pages/LogInPage"
import SignUpPage from "./Pages/SignUpPage"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"
import HomeScreen from "./Pages/Home/HomeScreen"
import Movies from "./Pages/Movies"

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/movies" element={<Movies/>} />
      </Routes>

      <Footer />
      <Toaster />
    </>
  )
}

export default App
