import '../App.css';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="App">
      <main className="page-content">
        <h1 className="page-title">PRIVACY POLICY</h1>
        <div className="page-body">
          <p><em>Last updated: February 13, 2026</em></p>

          <p>OUR ENGINEERING ("we", "our", or "us") operates mobile applications and web services. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our services and the choices you have associated with that data.</p>

          <h3>Information We Collect</h3>
          <p><strong>Personal Information:</strong> We may collect personally identifiable information such as your name and email address when you contact us.</p>
          <p><strong>Usage Data:</strong> We may collect information about how you access and use our applications, including device information, IP address, and usage patterns.</p>

          <h3>How We Use Your Information</h3>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To provide customer support</li>
            <li>To monitor usage and improve our applications</li>
            <li>To detect and prevent technical issues</li>
          </ul>

          <h3>Data Sharing and Disclosure</h3>
          <p>We do not sell or trade your personal information to third parties. We may share information only to comply with legal obligations or to protect our rights and safety.</p>

          <h3>Your Privacy Rights</h3>
          <p><strong>GDPR Rights (EU Residents):</strong> Rights to access, rectification, erasure, and data portability.</p>
          <p><strong>CCPA Rights (California Residents):</strong> Rights to know, delete, and opt-out of the sale of personal information.</p>

          <h3>Data Security</h3>
          <p>We implement appropriate security measures, but please note that no method of transmission over the internet is 100% secure.</p>

          <h3>Children's Privacy</h3>
          <p>Our services are not directed to children under 13. If you believe your child has provided personal information, please contact us.</p>

          <h3>Contact Us</h3>
          <p>For any questions regarding this policy, please contact us at: <strong>contact@ourengineeringstudio.com</strong></p>
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

export default PrivacyPolicy;
