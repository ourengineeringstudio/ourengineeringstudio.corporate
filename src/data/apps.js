// アプリ情報の設定ファイル
// 新しいアプリを追加する場合は、このファイルに追加してください

const apps = [
  {
    id: 'coffeehouse',
    name: 'Coffee House',
    icon: 'coffeehouse.png',
    platform: 'ios', // 'ios', 'android', 'both' のいずれか（両方ある場合はこの値で優先するストアを決定）
    appStoreUrl: 'https://apps.apple.com/jp/app/coffeehouse',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ourengineering.coffeehouse',
  },
];

export default apps;
