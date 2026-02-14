import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Support from './pages/Support';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Term from './pages/Term';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/term" element={<Term />} />
      </Routes>
    </Router>
  );
}

export default App;
