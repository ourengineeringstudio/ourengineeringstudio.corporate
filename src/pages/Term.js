import '../App.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Header from '../components/Header';

function Term() {
  const { t } = useLanguage();

  return (
    <div className="App">
      <Header />
      <main className="page-content">
        <h1 className="page-title">{t('term.title')}</h1>
        <div className="page-body">
          <h3>{t('term.section1Title')}</h3>
          <p>{t('term.section1Body')}</p>

          <h3>{t('term.section2Title')}</h3>
          <p>{t('term.section2Body')}</p>

          <h3>{t('term.section3Title')}</h3>
          <p>{t('term.section3Body')}</p>

          <h3>{t('term.section4Title')}</h3>
          <p>{t('term.section4Body')}</p>

          <h3>{t('term.section5Title')}</h3>
          <p>{t('term.section5Body')}</p>

          <h3>{t('term.section6Title')}</h3>
          <p>{t('term.section6Body')}</p>
        </div>
      </main>

      <footer className="footer">
        <nav className="footer-nav">
          <Link to="/" className="footer-link">{t('common.home')}</Link>
        </nav>
      </footer>
    </div>
  );
}

export default Term;
