import React, { useState } from "react";
import "./Dashboard.css";
import searchIcon from "./search.png";
import logo from "./logo.png";
import backgroundVideo from "./background.mp4";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false); // used only for desktop focus
  const [mobileSearchActive, setMobileSearchActive] = useState(false);

  return (
    <div className="dashboard">
      <video className="video-bg" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="FashAI" />
        </div>

        <div className="menu desktop-menu">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">FashCoins</a>
          <a href="#">Your Profile</a>

          {/* Permanent desktop search */}
          <div className={`desktop-search ${searchActive ? "active" : ""}`}>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              onFocus={() => setSearchActive(true)}
              onBlur={() => setSearchActive(false)}
            />
            <button className="search-btn">
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
        </div>

        <div className="right-actions">
          <a href="#" className="btn desktop-only">
            Go to App
          </a>

          {/* Mobile search (unchanged) */}
          <div className={`mobile-search ${mobileSearchActive ? "active" : ""}`}>
            <button
              className="search-btn"
              onClick={() => setMobileSearchActive(!mobileSearchActive)}
            >
              <img src={searchIcon} alt="Search" />
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">FashCoins</a>
          <a href="#">Your Profile</a>
          <a href="#" className="btn">
            Go to App
          </a>
        </div>
      )}

      <div className="hero-text">
        <h1>Unlock your competitive edge with</h1>
        <h1><span>FashAI</span></h1>
      </div>
    </div>
  );
};

export default Dashboard;
