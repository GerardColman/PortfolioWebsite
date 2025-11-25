import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'

function Home() {
  return <h1>Homepage</h1>;
}

function About() {
  return <h1>About</h1>;
}

function MusicPortfolio(){
  return <h1>Music Portfolio</h1>;
}

function Showreel(){
  return <h1>Showreel</h1>;
}

function ProgrammingPortfolio(){
  return <h1>Programming Portfolio</h1>;
}

function Contact(){
  return <h1>Contact</h1>;
}


function App() {

  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/music">Music Portfolio</Link> |{" "}
        <Link to="/showreel">Showreel</Link> |{" "}
        <Link to="/programming">Programming Portfolio</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<MusicPortfolio />} />
        <Route path="/showreel" element={<Showreel />} />
        <Route path="/programming" element={<ProgrammingPortfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
