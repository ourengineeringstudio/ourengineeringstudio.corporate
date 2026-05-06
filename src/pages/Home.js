import '../App.css';
import apps from '../data/apps';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Header from '../components/Header';

function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h1 className="company-name">{t('home.companyName')}</h1>
      </main>

      {apps.length > 0 && (
        <div className="app-icons-section">
          <div className="app-icons-container">
            {apps.map((app) => {
              const iconPath = require(`../assets/images/appIcons/${app.icon}`);

              // URLが言語別オブジェクトの場合は現在の言語で解決、文字列ならそのまま使用
              const resolve = (url) =>
                typeof url === 'object' && url !== null ? (url[language] || url.en || '') : (url || '');

              let storeUrl = null;

              if (app.platform === 'web' && app.webUrl) {
                storeUrl = resolve(app.webUrl);
              } else if (app.platform === 'ios' && app.appStoreUrl) {
                storeUrl = resolve(app.appStoreUrl);
              } else if (app.platform === 'android' && app.playStoreUrl) {
                storeUrl = resolve(app.playStoreUrl);
              } else if (app.platform === 'both') {
                storeUrl = resolve(app.appStoreUrl) || resolve(app.playStoreUrl);
              } else {
                storeUrl = resolve(app.webUrl) || resolve(app.appStoreUrl) || resolve(app.playStoreUrl);
              }

              return (
                <a
                  key={app.id}
                  href={storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-icon-item"
                >
                  <img
                    src={iconPath}
                    alt={app.name}
                    className="app-icon"
                  />
                </a>
              );
            })}
          </div>
        </div>
      )}

      <footer className="footer">
        <nav className="footer-nav">
          <Link to="/support" className="footer-link">{t('home.support')}</Link>
          <Link to="/privacy" className="footer-link">{t('home.privacy')}</Link>
          <Link to="/term" className="footer-link">{t('home.term')}</Link>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
