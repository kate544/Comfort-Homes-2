import React from "react";
import "./OffersAndTestimonials.css";

import Offer1 from "../../assets/Offer1.jpg";
import Offer2 from "../../assets/Offer2.jpg";
import Offer3 from "../../assets/Offer3.jpg";

function OffersAndTestimonials() {
  return (
    <section className="testimonials" id="experience">
      {/* Exclusive Offers */}
      <div className="offers-section">
        <div className="offers-header">
          <h2>Exclusive Offers</h2>
          <a href="/" className="view-all">
            View all offers →
          </a>
        </div>
        <p className="offers-subtext">
          Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
        </p>

        <div className="offers-grid">
          <div className="offer-card" style={{ backgroundImage: `url(${Offer1})` }}>
            <span className="badge">25% Off</span>
            <div className="offer-content">
              <h3>Summer Escape Package</h3>
              <p>Enjoy a complimentary night and daily breakfast.</p>
              <a href="/">View Offers</a>
            </div>
          </div>

          <div className="offer-card" style={{ backgroundImage: `url(${Offer2})` }}>
            <span className="badge">20% Off</span>
            <div className="offer-content">
              <h3>Romantic Getaway</h3>
              <p>Special couples package including spa treatment.</p>
              <a href="/">View Offers</a>
            </div>
          </div>

          <div className="offer-card" style={{ backgroundImage: `url(${Offer3})` }}>
            <span className="badge">20% Off</span>
            <div className="offer-content">
              <h3>Early Bird Special</h3>
              <p>Book 60 days in advance and save on your stay at any of our luxury properties worldwide.</p>
              <a href="/">View Offers</a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <h2>What Our Guests Say</h2>
        <p className="testimonials-subtext">
          Discover why discerning travelers choose Comfort Homes for their luxury accommodations around the world.
        </p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="https://i.pravatar.cc/80?img=12" alt="guest" />
            <h4>Emma Rodriguez</h4>
            <p className="location">Barcelona, Spain</p>
            <div className="stars">★★★★★</div>
            <p className="review">
              "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that Comfort Homes provides."
            </p>
          </div>

          <div className="testimonial-card">
            <img src="https://i.pravatar.cc/80?img=15" alt="guest" />
            <h4>David Kim</h4>
            <p className="location">Seoul, South Korea</p>
            <div className="stars">★★★★★</div>
            <p className="review">
              "Comfort Homes exceeded my expectations. From the luxurious rooms to the world-class service, it was a truly unforgettable stay."
            </p>
          </div>

          <div className="testimonial-card">
            <img src="https://i.pravatar.cc/80?img=20" alt="guest" />
            <h4>Sophia Johnson</h4>
            <p className="location">New York, USA</p>
            <div className="stars">★★★★★</div>
            <p className="review">
              "The offers made it easy to plan my trip affordably without compromising on luxury. Highly recommended!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersAndTestimonials;
