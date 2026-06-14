import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import '../App.css';
import apps from '../data/apps';
import { useLanguage } from '../i18n/LanguageContext';
import Header from '../components/Header';

function AppWaitlist() {
  const { appId } = useParams();
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | already | error

  const app = apps.find((a) => a.id === appId);

  if (!app || app.status !== 'coming-soon') {
    return <Navigate to="/" replace />;
  }

  const iconPath = require(`../assets/images/appIcons/${app.icon}`);

  const resolve = (value) =>
    typeof value === 'object' && value !== null ? (value[language] || value.en || '') : (value || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const scriptUrl = process.env.REACT_APP_GAS_URL;
      const res = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify({ app_id: app.id, email, language }),
      });
      const data = await res.json();

      if (data.status === 'already') {
        setStatus('already');
      } else if (data.status === 'ok') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="waitlist-content">
        <div className="waitlist-header">
          <img src={iconPath} alt={app.name} className="waitlist-icon" />
          <h1 className="waitlist-app-name">{app.name}</h1>
        </div>
        {app.screenshot && (
          <div className="waitlist-screenshot">
            <img
              src={require(`../assets/images/screenshots/${resolve(app.screenshot)}`)}
              alt={`${app.name} screenshot`}
              className="waitlist-screenshot-img"
            />
          </div>
        )}

        {app.description && (
          <p className="waitlist-description">{resolve(app.description)}</p>
        )}

        {status === 'success' ? (
          <p className="waitlist-message waitlist-success">{t('waitlist.success')}</p>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="waitlist-input-group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('waitlist.emailPlaceholder')}
                className="waitlist-input"
                disabled={status === 'submitting'}
              />
              <button
                type="submit"
                className={`waitlist-button ${language === 'ja' ? 'waitlist-button-ja' : ''}`}
                disabled={status === 'submitting'}
              >
                {t('waitlist.submit')}
              </button>
            </div>
            {status === 'already' && (
              <p className="waitlist-message waitlist-already">{t('waitlist.alreadyRegistered')}</p>
            )}
            {status === 'error' && (
              <p className="waitlist-message waitlist-error">{t('waitlist.error')}</p>
            )}
          </form>
        )}
      </div>

      <footer className="footer">
        <nav className="footer-nav">
          <Link to="/" className="footer-link">{t('common.home')}</Link>
        </nav>
      </footer>
    </div>
  );
}

export default AppWaitlist;
