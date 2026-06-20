import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home/Home.jsx";
import SignUp from "./pages/SignUpForm/SignUp";
import Login from "./pages/LoginForm/LoginForm";
import Menu from "./pages/Menu/Menu.jsx";
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Offers from "./pages/Offers/Offers.jsx";

function App() {
  return (
    <>
      <BrowserRouter basename="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
