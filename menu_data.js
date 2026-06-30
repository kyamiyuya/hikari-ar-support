// Menu data for the decision-support app.
// The image field is generated as a lightweight SVG so the app keeps working
// even when external image services are unavailable.
(function () {
  const categories = [
    ['ramen', 'ラーメン', '🍜', '#E8A53F'],
    ['don', '丼もの', '🍚', '#C85A2B'],
    ['curry', 'カレー', '🍛', '#B8722F'],
    ['japanese', '和食', '🍱', '#8B9467'],
    ['family', 'ファミレス', '🍽️', '#D4884C'],
    ['western', '洋食', '🍝', '#C9453E'],
    ['fastfood', 'ファストフード', '🍔', '#E8935A'],
    ['light', '軽食', '🥪', '#A89968'],
    ['sweets', 'スイーツ', '🍰', '#E8789F'],
    ['drink', '飲み物', '🥤', '#6B8E8E'],
    ['ricebread', 'おにぎり・パン', '🍙', '#D4A574'],
    ['chinese', '中華', '🥟', '#C23E3E'],
    ['event', '行事食', '🎉', '#B85CA0'],
    ['facility', '施設の食事', '🏠', '#7B9EC9']
  ];

  const categoryById = Object.fromEntries(categories.map(([id, label, emoji, color]) => [id, { id, label, emoji, color }]));

  function svgFood(label, emoji, color) {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#fffaf2"/>
            <stop offset="1" stop-color="${color}"/>
          </linearGradient>
          <radialGradient id="plate" cx="50%" cy="45%" r="55%">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset="1" stop-color="#f3eadb"/>
          </radialGradient>
        </defs>
        <rect width="800" height="800" rx="120" fill="url(#bg)"/>
        <ellipse cx="400" cy="580" rx="230" ry="38" fill="#2b2118" opacity=".16"/>
        <circle cx="400" cy="390" r="255" fill="url(#plate)" stroke="#ffffff" stroke-width="18"/>
        <circle cx="400" cy="390" r="180" fill="${color}" opacity=".18"/>
        <text x="400" y="395" text-anchor="middle" dominant-baseline="middle" font-size="168">${emoji}</text>
        <text x="400" y="630" text-anchor="middle" font-size="50" font-family="sans-serif" font-weight="700" fill="#3d2e1f">${label}</text>
      </svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }

  const rawItems = [
    ['shoyu_ramen', '醤油ラーメン', 'しょうゆらーめん', 'ramen', '🍜', ['あたたかい', 'めん', 'しょうゆ']],
    ['miso_ramen', '味噌ラーメン', 'みそらーめん', 'ramen', '🍜', ['あたたかい', 'みそ', 'こってり']],
    ['tonkotsu_ramen', '豚骨ラーメン', 'とんこつらーめん', 'ramen', '🍜', ['あたたかい', 'こってり', '白いスープ']],
    ['tsukemen', 'つけ麺', 'つけめん', 'ramen', '🍜', ['めん', 'つけだれ', 'しっかり']],

    ['gyudon', '牛丼', 'ぎゅうどん', 'don', '🍚', ['ごはん', '牛肉', '甘辛い']],
    ['oyakodon', '親子丼', 'おやこどん', 'don', '🍚', ['ごはん', 'たまご', 'やさしい']],
    ['katsudon', 'カツ丼', 'かつどん', 'don', '🍚', ['ごはん', 'カツ', 'しっかり']],

    ['beef_curry', 'カレーライス', 'かれーらいす', 'curry', '🍛', ['ごはん', 'カレー', '人気']],
    ['katsu_curry', 'カツカレー', 'かつかれー', 'curry', '🍛', ['カツ', 'カレー', '満足感']],
    ['vegetable_curry', '野菜カレー', 'やさいかれー', 'curry', '🍛', ['野菜', 'カレー', '彩り']],

    ['sushi', 'お寿司', 'おすし', 'japanese', '🍣', ['特別感', '和食', '冷たい']],
    ['grilled_fish', '焼き魚', 'やきざかな', 'japanese', '🐟', ['和食', '魚', 'あっさり']],
    ['tempura', '天ぷら', 'てんぷら', 'japanese', '🍤', ['揚げ物', '和食', 'サクサク']],
    ['udon', 'うどん', 'うどん', 'japanese', '🍜', ['めん', 'やさしい', 'あたたかい']],

    ['hamburg_steak', 'ハンバーグ', 'はんばーぐ', 'family', '🍽️', ['肉', 'やわらかい', '人気']],
    ['omurice', 'オムライス', 'おむらいす', 'family', '🍳', ['たまご', 'ごはん', '洋食']],
    ['fried_chicken_plate', '唐揚げ定食', 'からあげていしょく', 'family', '🍗', ['揚げ物', '定食', 'しっかり']],
    ['kids_plate', 'お子様ランチ', 'おこさまらんち', 'family', '🚩', ['楽しい', '少しずつ', '彩り']],

    ['spaghetti', 'スパゲティ', 'すぱげてぃ', 'western', '🍝', ['めん', '洋食', 'トマト']],
    ['gratin', 'グラタン', 'ぐらたん', 'western', '🧀', ['あたたかい', 'チーズ', 'やわらかい']],
    ['stew', 'シチュー', 'しちゅー', 'western', '🥣', ['あたたかい', 'やさしい', '白い']],

    ['hamburger', 'ハンバーガー', 'はんばーがー', 'fastfood', '🍔', ['手で持てる', 'パン', '肉']],
    ['pizza', 'ピザ', 'ぴざ', 'fastfood', '🍕', ['チーズ', '分けやすい', '楽しい']],
    ['fried_potato', 'フライドポテト', 'ふらいどぽてと', 'fastfood', '🍟', ['サクサク', 'つまみやすい', '軽い']],

    ['sandwich', 'サンドイッチ', 'さんどいっち', 'light', '🥪', ['パン', '軽食', '手で持てる']],
    ['soup', 'スープ', 'すーぷ', 'light', '🥣', ['あたたかい', 'やさしい', '飲みやすい']],
    ['salad', 'サラダ', 'さらだ', 'light', '🥗', ['野菜', 'さっぱり', '冷たい']],

    ['pudding', 'プリン', 'ぷりん', 'sweets', '🍮', ['甘い', 'やわらかい', 'おやつ']],
    ['cake', 'ケーキ', 'けーき', 'sweets', '🍰', ['甘い', '特別感', 'お祝い']],
    ['ice_cream', 'アイスクリーム', 'あいすくりーむ', 'sweets', '🍨', ['冷たい', '甘い', 'なめらか']],
    ['fruit_jelly', 'フルーツゼリー', 'ふるーつぜりー', 'sweets', '🍧', ['冷たい', '果物', 'つるん']],

    ['tea', 'お茶', 'おちゃ', 'drink', '🍵', ['飲み物', 'さっぱり', '食事中']],
    ['water', '水', 'みず', 'drink', '💧', ['水分', '休憩', '食事前後']],
    ['orange_juice', 'オレンジジュース', 'おれんじじゅーす', 'drink', '🧃', ['甘い', '果物', '冷たい']],
    ['milk', '牛乳', 'ぎゅうにゅう', 'drink', '🥛', ['飲み物', 'カルシウム', '冷たい']],

    ['onigiri', 'おにぎり', 'おにぎり', 'ricebread', '🍙', ['ごはん', '手で持てる', '食べやすい']],
    ['bread_roll', 'ロールパン', 'ろーるぱん', 'ricebread', '🥐', ['パン', 'やわらかい', '軽い']],
    ['toast', 'トースト', 'とーすと', 'ricebread', '🍞', ['パン', '朝食', '香ばしい']],

    ['gyoza', '餃子', 'ぎょうざ', 'chinese', '🥟', ['中華', '焼き目', '人気']],
    ['fried_rice', 'チャーハン', 'ちゃーはん', 'chinese', '🍚', ['ごはん', '中華', '香ばしい']],
    ['mapo_tofu', '麻婆豆腐', 'まーぼーどうふ', 'chinese', '🥘', ['豆腐', '中華', 'とろみ']],
    ['harumaki', '春巻き', 'はるまき', 'chinese', '🥠', ['サクサク', '中華', '揚げ物']],

    ['osechi', 'おせち料理', 'おせちりょうり', 'event', '🎍', ['正月', '特別', '華やか']],
    ['chirashi_sushi', 'ちらし寿司', 'ちらしずし', 'event', '🍣', ['行事', '彩り', '華やか']],
    ['ehomaki', '恵方巻き', 'えほうまき', 'event', '🍙', ['節分', '巻き寿司', '行事']],
    ['toshikoshi_soba', '年越しそば', 'としこしそば', 'event', '🍜', ['大晦日', 'そば', 'あたたかい']],

    ['facility_breakfast', '朝ごはん', 'あさごはん', 'facility', '🌅', ['朝食', 'やさしい', '定番']],
    ['facility_lunch', '昼ごはん', 'ひるごはん', 'facility', '🍱', ['昼食', 'バランス', '定食']],
    ['facility_snack_fruit', 'フルーツおやつ', 'ふるーつおやつ', 'facility', '🍎', ['おやつ', '果物', 'さっぱり']],
    ['facility_snack_yogurt', 'ヨーグルト', 'よーぐると', 'facility', '🥣', ['おやつ', 'やわらかい', '冷たい']]
  ];

  window.MENU_CATEGORIES = categories.map(([id, label, emoji, color]) => ({ id, label, emoji, color }));
  window.MENU_ITEMS = rawItems.map(([id, name, reading, category, emoji, tags]) => ({
    id,
    name,
    reading,
    romaji: id.replace(/_/g, ' '),
    category,
    categoryLabel: categoryById[category].label,
    emoji,
    color: categoryById[category].color,
    image: svgFood(name, emoji, categoryById[category].color),
    tags
  }));
})();
