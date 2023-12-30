import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/testimonial' element={<Testimonial />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

