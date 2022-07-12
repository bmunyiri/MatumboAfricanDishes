import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";


import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import NotFoundPage from "./NotFoundPage";


export default function App() {
  return (
 <> 
    <BrowserRouter>
   <nav className="navbar is-warning">
   <img className="navbar-brand" src="/Matumbo.jpg  " alt=""  width="50px" height="50px" />
          <Link to="/" className="navbar-item">
          Home
        </Link>
        <hr navbar-divider />
        <Link to="/about" className="navbar-item">
          About
        </Link>
         <hr navbar-divider />
        <Link to="/contact" className="navbar-item">
          Contact
        </Link>
         <hr navbar-divider />
        <Link to="/oblivion" className="navbar-item">
          Oblivion
        </Link>
         <hr navbar-divider />

 </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/p">
        <Route path="*" element={<Navigate replace to="/about" />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}
