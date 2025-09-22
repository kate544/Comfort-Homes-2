import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email, 
    };

    emailjs
      .send(
        "service_nudoey4",   
        "template_d01gumk", 
        templateParams,
        "g0O_sICWysmxUzrzd"    
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ Thanks for subscribing! Check your inbox.");
          setEmail("kathryntokoli@gmail.com");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("✅ Thanks for subscribing! Check your inbox.");
        }
      );
  };

  return (
    <section className="newsletter">
      <div className="newsletter-card">
        <h2>Stay Inspired</h2>
        <p>
          Join our newsletter and be the first to discover new destinations,
          exclusive offers, and travel inspiration.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">
            Subscribe <span>→</span>
          </button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
}

export default Newsletter;
