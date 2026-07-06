import "../../styles/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Laser Journey</h2>
          <p>
            Track your laser treatment journey with elegance,
            confidence and simplicity.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>support@laserjourney.com</p>
          <p>Mumbai, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Laser Journey. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;