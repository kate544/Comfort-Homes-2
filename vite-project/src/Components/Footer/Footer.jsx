import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Comfort Homes</h3>
          <p>
            Discover the world's most extraordinary places to stay,
            from boutique hotels to luxury villas and private islands.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Safety Information</li>
              <li>Cancellation Options</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for travel inspiration and special offers.</p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Your email" />
              <button>→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Comfort Homes. All rights reserved.</p>
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
