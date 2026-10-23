import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./css/Sidebar.css"

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Sidebar from "./Components/Sidebar";

const App = () => {

  return (

    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>

        </main>

      </div>
    </BrowserRouter>



  )
}

export default App 