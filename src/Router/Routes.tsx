import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Header";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Help from "../Pages/Help";
import Store from "../Pages/Store";
import Footer from "../Components/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
