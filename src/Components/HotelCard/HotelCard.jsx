import React, { useState } from "react";
import "./HotelCard.css";
import BookNowModal from "../BookNowModal/BookNowModal";

function HotelCard({ name, price, img }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="hotel-card">
      <img src={img} alt={name} className="hotel-img" />
      <div className="hotel-info">
        <h3>{name}</h3>
        <p className="price">{price}</p>
        <button 
          className="book-btn" 
          onClick={() => setShowModal(true)} 
          type="button"
        >
          Book Now
        </button>
      </div>

      {showModal && (
        <BookNowModal 
          hotel={{ name, price }} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
}

export default HotelCard;
