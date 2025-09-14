import React, { useState } from "react";
import "./BookNowModal.css";

function BookNowModal({ hotel, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    requests: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [success, setSuccess] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  // ✅ safely parse YYYY-MM-DD into a local Date object
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day); // avoid UTC offset issues
  };

  // ✅ calculate nights correctly
  const calcNights = () => {
    const inDate = parseDate(form.checkIn);
    const outDate = parseDate(form.checkOut);
    if (!inDate || !outDate) return 0;

    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  // ✅ calculate total price
  const calcPrice = () => {
    const nights = calcNights();
    const pricePerNight = Number(hotel.price) || 0;
    if (nights === 0) return 0;
    return nights * pricePerNight * form.guests;
  };

  // ✅ fix guests field so it stays a number
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "guests" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.checkIn ||
      !form.checkOut
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setFinalTotal(calcPrice()); // lock in total
    setSuccess(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!success ? (
          <>
            <h2>Book {hotel.name}</h2>
            <p className="night-rate">
              Rate: KES {Number(hotel.price).toLocaleString()} per night
            </p>

            <form onSubmit={handleSubmit} className="booking-form">
              <label>
                Full Name*
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email Address*
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Phone Number*
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Check-in Date*
                <input
                  type="date"
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Check-out Date*
                <input
                  type="date"
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Guests
                <input
                  type="number"
                  name="guests"
                  min="1"
                  value={form.guests}
                  onChange={handleChange}
                />
              </label>

              <label>
                Special Requests (optional)
                <textarea
                  name="requests"
                  value={form.requests}
                  onChange={handleChange}
                />
              </label>

              {/* ✅ Price breakdown */}
              {calcNights() > 0 && (
                <div className="price-breakdown">
                  <p>
                    Nights: <b>{calcNights()}</b>
                  </p>
                  <p>
                    {form.guests} guest(s) × {calcNights()} night(s) × KES{" "}
                    {Number(hotel.price).toLocaleString()} =
                    <b> KES {calcPrice().toLocaleString()}</b>
                  </p>
                </div>
              )}

              <p className="price total-amount">
                Total: <b>KES {calcPrice().toLocaleString()}</b>
              </p>

              <div className="actions">
                <button type="submit" className="confirm-btn">
                  Confirm & Book
                </button>
                <button type="button" onClick={onClose} className="close-btn">
                  Close
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h3>🎉 Booking Successful!</h3>
            <p>
              Thank you, {form.name}! Your booking at <b>{hotel.name}</b> is
              confirmed.
              <br />
              Total Paid: <b>KES {finalTotal.toLocaleString()}</b>
              <br />
              We'll email you shortly.
            </p>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookNowModal;
