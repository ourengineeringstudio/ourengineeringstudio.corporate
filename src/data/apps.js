// アプリ情報の設定ファイル
// 新しいアプリを追加する場合は、配列の末尾に追加してください（末尾が上段に表示されます）

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
  {
    id: 'asagao',
    name: 'Asagao',
    icon: 'asagao.png',
    platform: 'ios',
    status: 'coming-soon',
    description: {
      ja: 'うるさいアラームに頼らず\n自分で起きる早起きアプリ',
      en: 'Wake up on your own\nwithout noisy alarms',
    },
    screenshot: {
      ja: 'asagao_screenshot.png',
      en: 'asagao_screenshot.png',
    },
    appStoreUrl: '',
    playStoreUrl: '',
    webUrl: '',
  },
];

export default apps;
