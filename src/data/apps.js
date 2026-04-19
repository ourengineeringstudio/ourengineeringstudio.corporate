// アプリ情報の設定ファイル
// 新しいアプリを追加する場合は、このファイルに追加してください

const apps = [
  {
    id: 'coffeehouse',
    name: 'Coffeehouse',
    icon: 'coffeehouse.png',
    platform: 'ios', // 'ios', 'android', 'both', 'web' のいずれか（両方ある場合はこの値で優先するストアを決定）
    appStoreUrl: 'https://apps.apple.com/jp/app/coffeehouse',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ourengineering.coffeehouse',
    webUrl: '', // Webアプリ/サービスのURL
  },
  {
    id: 'daymarkphoto',
    name: 'Daymark Photo',
    icon: 'daymark_photo.png',
    platform: 'ios',
    appStoreUrl: '',
    playStoreUrl: '',
    webUrl: '',
  },
  {
    id: 'dailyshingon',
    name: 'Daily Shingon',
    icon: 'dailyshingon.png',
    platform: 'web', // 'ios', 'android', 'both', 'web' のいずれか（両方ある場合はこの値で優先するストアを決定）
    appStoreUrl: '',
    playStoreUrl: '',
    webUrl: 'https://nomuman.github.io/daily-shingon/', // Webアプリ/サービスのURL
  },
];

export default apps;
