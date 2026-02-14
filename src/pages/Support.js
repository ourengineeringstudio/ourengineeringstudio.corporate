import '../App.css';
import { Link } from 'react-router-dom';

function Support() {
  return (
    <div className="App">
      <main className="page-content">
        <h1 className="page-title">SUPPORT</h1>
        <div className="page-body">
          <p>Thank you for using services by OUR ENGINEERING.</p>
          <p>Founded and operated by Kosuke Osada and Senri Gotoda, we are dedicated to providing a unique and seamless experience for our users.</p>

          <h3>Contact Information</h3>
          <p><strong>Email:</strong> contact@ourengineeringstudio.com</p>
          <p><strong>Response Time:</strong> We typically respond within 24-48 hours during business days (Mon-Fri).</p>
          <p><strong>Urgent Matters:</strong> Please mark your subject line with [URGENT].</p>

          <h3>Technical Support</h3>
          <p>To help us resolve your issue quickly, please include:</p>
          <ul>
            <li>Device and OS version</li>
            <li>Description of the issue and steps to reproduce</li>
            <li>Screenshots (if relevant)</li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <nav className="footer-nav">
          <Link to="/" className="footer-link">HOME</Link>
        </nav>
      </footer>
    </div>
  );
}

export default Support;
