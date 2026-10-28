// Firebase の設定。null のままだとクラウド同期はオフ（ログイン画面も出ず、端末内だけに保存）。
// 使うときは Firebase コンソールの「プロジェクトの設定 → マイアプリ」にある firebaseConfig を貼る。
// ここに書く値は公開されても問題ない（アクセス制限は Firestore のルールで行う）。
window.FIREBASE_CONFIG = null;
/* 例：
window.FIREBASE_CONFIG = {
  apiKey: '...',
  authDomain: 'your-project.firebaseapp.com',
  projectId: 'your-project',
  storageBucket: 'your-project.firebasestorage.app',
  messagingSenderId: '...',
  appId: '...',
};
*/

// クラウドに保存してよいアカウント（Google のメールアドレス）。ほかのアカウントはこの端末だけに保存する。
// 空 [] にすると、ログインした人は誰でもクラウドに保存する。firestore.rules と同じアカウントにそろえる。
window.ALLOWED_EMAILS = [];
