// アプリ情報の設定ファイル
// 新しいアプリを追加する場合は、このファイルに追加してください

const apps = [
  {
    id: 'coffeehouse',
    name: 'Coffeehouse',
    icon: 'coffeehouse.png',
    platform: 'ios', // 'ios', 'android', 'both', 'web' のいずれか（両方ある場合はこの値で優先するストアを決定）
    status: 'released', // 'released' | 'coming-soon'
    appStoreUrl: {
      ja: 'https://apps.apple.com/jp/app/coffeehouse/id6755665211',
      en: 'https://apps.apple.com/app/coffeehouse/id6755665211',
    },
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ourengineering.coffeehouse',
    webUrl: '', // Webアプリ/サービスのURL
  },
  {
    id: 'daymarkphoto',
    name: 'Daymark Photo',
    icon: 'daymark_photo.png',
    platform: 'ios',
    status: 'released',
    appStoreUrl: {
      ja: 'https://apps.apple.com/jp/app/daymark-photos/id6761719165',
      en: 'https://apps.apple.com/us/app/daymark-photos/id6761719165',
    },
    playStoreUrl: '',
    webUrl: '',
  },
  {
    id: 'dailyshingon',
    name: 'Daily Shingon',
    icon: 'dailyshingon.png',
    platform: 'web', // 'ios', 'android', 'both', 'web' のいずれか（両方ある場合はこの値で優先するストアを決定）
    status: 'released',
    appStoreUrl: '',
    playStoreUrl: '',
    webUrl: 'https://nomuman.github.io/daily-shingon/', // Webアプリ/サービスのURL
  },
  // テスト用 coming-soon アプリ（動作確認後に削除 or 差し替え）
  {
    id: 'testapp',
    name: 'Test App',
    icon: 'coffeehouse.png', // 仮アイコン
    platform: 'ios',
    status: 'coming-soon',
    description: {
      ja: 'これはテスト用のアプリです。',
      en: 'This is a test app.',
    },
    appStoreUrl: '',
    playStoreUrl: '',
    webUrl: '',
  },
];

export default apps;
