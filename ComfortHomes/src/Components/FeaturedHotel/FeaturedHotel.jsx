import React from "react";
import HotelCard from "../HotelCard/HotelCard.jsx";
import "./FeaturedHotel.css";

import heronImg from "../../assets/Heron.jpg";
import serenaImg from "../../assets/Serena.jpg";
import albaImg from "../../assets/Alba.jpg";
import panariImg from "../../assets/Panari.jpg";

function FeaturedHotel() {
  const hotels = [
    { name: "The Heron Hotel, Nairobi", price: "Ksh 10,000", img: heronImg },
    { name: "Serena Hotel, Nairobi", price: "Ksh 20,000", img: serenaImg },
    { name: "Alba Hotel, Meru", price: "Ksh 9,500", img: albaImg },
    { name: "Panari Hotel, Nairobi", price: "Ksh 10,000", img: panariImg },
  ];
return (
  <section id="hotels" className="featured-hotel">
    <div className="section-header">
      <h2>Featured Hotels</h2>
      <p>
        Discover our handpicked selection of exceptional properties around the
        world, offering unparalleled luxury and unforgettable experiences.
      </p>
    </div>

    <div className="hotels-grid">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} {...hotel} />
      ))}
    </div>

    <div className="view-more">
      <button>View other destinations</button>
    </div>
  </section>
);
}
export default FeaturedHotel;
