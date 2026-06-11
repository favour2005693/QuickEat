import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// PAGES
import Home from "./pages/Home/Home.jsx";
import SignUp from "./pages/SignUpForm/SignUp";
import Login from "./pages/LoginForm/LoginForm";
import Menu from "./pages/Menu/Menu.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
