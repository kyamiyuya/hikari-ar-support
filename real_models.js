// 実物3Dモデル登録ファイル
// 施設の実メニューを3DスキャンしたGLBだけを登録します。
// 未登録の料理は、ARで簡易モデルを出さず「実物3Dモデル未登録」と表示します。
(function () {
  window.REAL_MODEL_TARGETS = [
    'shoyu_ramen',
    'miso_ramen',
    'beef_curry',
    'hamburg_steak',
    'omurice',
    'fried_chicken_plate',
    'udon',
    'gyudon',
    'katsudon',
    'spaghetti'
  ];

  window.REAL_MODEL_FILES = window.REAL_MODEL_FILES || {};

  window.registerRealFoodModel = function registerRealFoodModel(id, options) {
    if (!id || !options || !options.url) return;
    window.REAL_MODEL_FILES[id] = {
      url: options.url,
      scale: options.scale || '.9 .9 .9',
      rotation: options.rotation || '0 0 0',
      position: options.position || '0 .12 0'
    };
  };

  // 登録例:
  // window.registerRealFoodModel('shoyu_ramen', {
  //   url: 'assets/models/shoyu_ramen.glb',
  //   scale: '.9 .9 .9',
  //   rotation: '0 0 0',
  //   position: '0 .12 0'
  // });
})();
