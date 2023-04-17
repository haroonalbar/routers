import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul></ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/head">Header</Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/head" element={<h1>Header</h1>} />
      </Routes>
    </>
  );
}

export default App;
