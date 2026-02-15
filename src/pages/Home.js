import '../App.css';
import apps from '../data/apps';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <main className="main-content">
        <h1 className="company-name">OUR ENGINEERING</h1>
      </main>

      {apps.length > 0 && (
        <div className="app-icons-section">
          <div className="app-icons-container">
            {apps.map((app) => {
              // 画像のインポートパスを動的に生成
              const iconPath = require(`../assets/images/appIcons/${app.icon}`);

              // リンク先を決定するロジック
              let storeUrl = null;

              // platform指定がある場合はそれに従う
              if (app.platform === 'web' && app.webUrl) {
                storeUrl = app.webUrl;
              } else if (app.platform === 'ios' && app.appStoreUrl) {
                storeUrl = app.appStoreUrl;
              } else if (app.platform === 'android' && app.playStoreUrl) {
                storeUrl = app.playStoreUrl;
              } else if (app.platform === 'both') {
                // bothの場合はApp Storeを優先（変更可能）
                storeUrl = app.appStoreUrl || app.playStoreUrl;
              } else {
                // platform指定がない場合は、存在する方を使用（優先順位: Web > App Store > Google Play）
                storeUrl = app.webUrl || app.appStoreUrl || app.playStoreUrl;
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
          <Link to="/support" className="footer-link">SUPPORT</Link>
          <Link to="/privacy" className="footer-link">PRIVACY POLICY</Link>
          <Link to="/term" className="footer-link">TERM</Link>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
