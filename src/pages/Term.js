import '../App.css';
import { Link } from 'react-router-dom';

function Term() {
  return (
    <div className="App">
      <main className="page-content">
        <h1 className="page-title">TERM</h1>
        <div className="page-body">
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing and using the applications and services provided by OUR ENGINEERING (collectively, the "Services"), you agree to be bound by these terms.</p>

          <h3>2. Privacy Policy Reference</h3>
          <p>Your use of the Services is also governed by our Privacy Policy. Please review it carefully to understand our practices.</p>

          <h3>3. User Responsibilities</h3>
          <p>You agree to use our Services responsibly and must not use them for any unlawful purpose or violate any intellectual property rights.</p>

          <h3>4. Disclaimer of Warranties</h3>
          <p>Our Services are provided 'as is' and without warranty of any kind. We do not guarantee that the Services will always be secure, error-free, or function without disruptions.</p>

          <h3>5. Limitation of Liability</h3>
          <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages, or any loss of data or profits resulting from your use of or inability to use the Services.</p>

          <h3>6. Governing Law and Jurisdiction</h3>
          <p>These terms are governed by the laws of Japan. Any disputes shall be subject to the exclusive jurisdiction of the courts of Japan.</p>
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

export default Term;
