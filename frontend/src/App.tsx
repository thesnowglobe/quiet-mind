import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./blocks/Header"
import Main from "./blocks/Main"
import Footer from "./blocks/Footer"
import SignUp from "./blocks/SignUp"
import SignIn from "./blocks/SignIn"

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
