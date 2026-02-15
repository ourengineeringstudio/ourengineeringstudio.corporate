import '../App.css';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  // 現在の日付を取得してフォーマット
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="App">
      <main className="page-content">
        <h1 className="page-title">PRIVACY POLICY</h1>
        <div className="page-body">
          <p><em>Last updated: {lastUpdated}</em></p>
          <p>OUR ENGINEERING ("we", "our", or "us") operates mobile applications and web services. This policy informs you of our practices regarding the collection, use, and disclosure of personal data.</p>

          <h3>1. Information Collection and Use</h3>
          <p><strong>Personal Information:</strong> We may collect your name and email address when you contact us.</p>
          <p><strong>Usage Data:</strong> We may collect device information, IP address, and usage patterns to improve our services.</p>

          <h3>2. Compliance with Japanese Laws</h3>
          <p>We comply with the Act on the Protection of Personal Information (APPI) of Japan.</p>

          <h3>3. Global Privacy Rights</h3>
          <p><strong>GDPR Rights (EU Residents):</strong> Rights to access, rectification, erasure, and data portability.</p>
          <p><strong>CCPA Rights (California Residents):</strong> Rights to know, delete, and opt-out of the sale of personal information.</p>

          <h3>4. Data Security</h3>
          <p>We implement appropriate security measures, but please note that no method of transmission over the internet is 100% secure.</p>

          <h3>5. Children's Privacy</h3>
          <p>Our services are not directed to children under 13. We do not knowingly collect personal data from children.</p>

          <h3>6. Governing Law</h3>
          <p>This Privacy Policy is governed by the laws of Japan.</p>

          <h3>Contact</h3>
          <p><strong>contact@ourengineeringstudio.com</strong></p>
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
