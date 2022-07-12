import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import NotFoundPage from "./NotFoundPage";


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <Link to="/oblivion" className="link">
          Oblivion
        </Link>
      </div>
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
  );
}
