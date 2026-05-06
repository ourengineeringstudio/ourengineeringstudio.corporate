import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Home from './pages/Home';
import Support from './pages/Support';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Term from './pages/Term';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/term" element={<Term />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
