import '../App.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Header from '../components/Header';

function Support() {
  const { t } = useLanguage();

  return (
    <div className="App">
      <Header />
      <main className="page-content">
        <h1 className="page-title">{t('support.title')}</h1>
        <div className="page-body">
          <p>{t('support.intro')}</p>
          <p>{t('support.description')}</p>

          <h3>{t('support.contactTitle')}</h3>
          <p><strong>{t('support.emailLabel')}</strong> {t('support.email')}</p>
          <p><strong>{t('support.responseTimeLabel')}</strong> {t('support.responseTime')}</p>
          <p><strong>{t('support.urgentLabel')}</strong> {t('support.urgent')}</p>

          <h3>{t('support.techTitle')}</h3>
          <p>{t('support.techIntro')}</p>
          <ul>
            <li>{t('support.techDevice')}</li>
            <li>{t('support.techDescription')}</li>
            <li>{t('support.techScreenshots')}</li>
          </ul>
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

export default Support;
