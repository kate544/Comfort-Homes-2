import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLogin(false);
    setShowToast(true);

    // Hide toast automatically after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <nav className="navbar">
      <div className="logo">Comfort Homes</div>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#hotels">Hotels</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="search-btn">🔍</button>
        <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>

        {/* Hamburger (only mobile) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Drawer Menu (mobile) */}
      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        <button className="close-drawer" onClick={() => setMenuOpen(false)}>✖</button>
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#hotels" onClick={() => setMenuOpen(false)}>Hotels</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        </ul>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Welcome Back</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Enter your email" required />
              <input type="password" placeholder="Enter your password" required />
              <button type="submit" className="submit-btn">Login</button>
              <button type="button" className="close-btn" onClick={() => setShowLogin(false)}>Close</button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && <div className="toast">✅ Welcome back!</div>}
    </nav>
  );
}

export default Navbar;
