import '../App.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Header from '../components/Header';

function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="App">
      <Header />
      <main className="page-content">
        <h1 className="page-title">{t('privacy.title')}</h1>
        <div className="page-body">
          <p><em>{t('privacy.lastUpdated')}</em></p>
          <p>{t('privacy.intro')}</p>

          <h3>{t('privacy.section1Title')}</h3>
          <p><strong>{t('privacy.section1PersonalLabel')}</strong> {t('privacy.section1Personal')}</p>
          <p><strong>{t('privacy.section1UsageLabel')}</strong> {t('privacy.section1Usage')}</p>

          <h3>{t('privacy.section2Title')}</h3>
          <p>{t('privacy.section2Body')}</p>

          <h3>{t('privacy.section3Title')}</h3>
          <p><strong>{t('privacy.section3GdprLabel')}</strong> {t('privacy.section3Gdpr')}</p>
          <p><strong>{t('privacy.section3CcpaLabel')}</strong> {t('privacy.section3Ccpa')}</p>

          <h3>{t('privacy.section4Title')}</h3>
          <p>{t('privacy.section4Body')}</p>

          <h3>{t('privacy.section5Title')}</h3>
          <p>{t('privacy.section5Body')}</p>

          <h3>{t('privacy.section6Title')}</h3>
          <p>{t('privacy.section6Body')}</p>

          <h3>{t('privacy.contactTitle')}</h3>
          <p><strong>{t('support.email')}</strong></p>
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

export default PrivacyPolicy;
