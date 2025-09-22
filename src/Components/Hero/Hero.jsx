import React from "react";
import "./Hero.css";
import bgImage from "../../assets/ComfortHomes-img-1.jpeg";


function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h4 className="tagline">The Ultimate Hotel Experience</h4>
          <h1>Discover Your Perfect Getaway Destination.</h1>
          <p>
            Unparalleled luxury and comfort await at the world’s most exclusive
            hotels and resorts. Start your journey today.
          </p>

          <div className="search-box">
            <input type="text" placeholder="Destination" />
            <input type="date" />
            <input type="number" placeholder="Guests" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
