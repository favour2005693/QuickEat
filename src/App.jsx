import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider.jsx";

// PAGES 
import Home from "./pages/Home/Home.jsx"
import SignUp from "./pages/SignUpForm/SignUp"
import Login from "./pages/LoginForm/LoginForm"


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<h1>Menu</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <HeroSlider />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;