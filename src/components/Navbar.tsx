import React from "react"
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/"><h1 className="name">Eden Hen</h1></Link>
        <nav className="nav">
          {/* Adding the navigation bar links! (Note: Make sure they line up with the Route paths set up in App.tsx) */}
          <Link to="/about">About</Link>
          <Link to="/">Projects</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar