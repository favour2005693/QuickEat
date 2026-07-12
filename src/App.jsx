import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Layouts
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
// Pages
import Home from './pages/Home/Home.jsx';
import SignUp from './pages/SignUpForm/SignUp';
import Login from './pages/LoginForm/LoginForm';
import Menu from './pages/Menu/Menu.jsx';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Offers from './pages/Offers/Offers.jsx';
import Search from './pages/Search/Search.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import EditProfile from './pages/ProfilePage/EdithProfile.jsx';
// component
import OfflineModal from "./components/OfflineModal.jsx";
import Welcome from './screen/WelcomeScreen.jsx';
// Library
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

function App() {
   const [ShowWelcome, setShowWelcome] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setShowWelcome(false);
      }, 5000);
      return () => clearTimeout(timer);
   }, []);

   if (ShowWelcome) {
      return <Welcome />;
   }

   

   return (
      <>
         <BrowserRouter basename="">
            <OfflineModal /> 

            <Navbar />
            {/* Client-side routing:
                "/" shows the Home component
                "/menu" shows the Menu component
            */}
            <Routes>
               {/* <ToastContainer position='top-center' autoClose={3000} theme='colored' /> */}
               <Route
                  path="/"
                  element={<Home />}
               />
               <Route
                  path="/menu"
                  element={<Menu />}
               />
               <Route
                  path="/about"
                  element={<About />}
               />
               <Route
                  path="/contact"
                  element={<Contact />}
               />
               <Route
                  path="/offers"
                  element={<Offers />}
               />
               <Route
                  path="/search"
                  element={<Search />}
               />
               <Route
                  path="/signUp"
                  element={<SignUp />}
               />
               <Route
                  path="/Login"
                  element={<Login />}
               />
               <Route
                  path="/profile"
                  element={<ProfilePage />}
               />
               <Route
                  path="/edit-profile"
                  element={<EditProfile />}
               />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
}

export default App;
