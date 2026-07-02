// 実物に近いAR表示を行うためのGLBモデル登録ファイルです。
// 例:
// window.REAL_MODEL_FILES = {
//   shoyu_ramen: {
//     url: 'assets/models/shoyu_ramen.glb',
//     scale: '.9 .9 .9',
//     rotation: '0 0 0',
//     position: '0 .12 0'
//   }
// };
//
// 施設の実メニューを3DスキャンしたGLBを assets/models/ に置き、
// 上の形式で登録すると、ARでは自作の簡易形状ではなくGLBを表示します。
window.REAL_MODEL_FILES = window.REAL_MODEL_FILES || {};
