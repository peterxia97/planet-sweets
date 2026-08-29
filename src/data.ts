import type { Category, Cake } from './types';

// ═══════════════════════════════════════════
//  Planet Sweets — 13 Categories
// ═══════════════════════════════════════════

export const categories: Category[] = [
  { id: 13, name: '春日甄选', nameEn: 'Spring Selection', icon: '\u{1F338}', description: '春日限定 清新治愈', descriptionEn: 'Spring exclusive, fresh & delightful' },
  { id: 1,  name: '水果蛋糕', nameEn: 'Fresh Fruit Cakes', icon: '\u{1F353}', description: '新鲜水果 自然甜美', descriptionEn: 'Fresh fruit, naturally sweet' },
  { id: 2,  name: '口味蛋糕', nameEn: 'Flavoured Cakes', icon: '\u{1F36E}', description: '多种口味 丰富夹心', descriptionEn: 'Assorted flavours with layered fillings' },
  { id: 3,  name: '巴斯克', nameEn: 'Basque Cheesecakes', icon: '\u{1F9C0}', description: '焦香浓郁 绵密丝滑', descriptionEn: 'Rich caramelised top, silky texture' },
  { id: 4,  name: '裸蛋糕', nameEn: 'Naked Cakes', icon: '\u{1F353}', description: '简约清新 水果本味', descriptionEn: 'Minimalist with fresh fruit' },
  { id: 7,  name: '特定样式', nameEn: 'Special Themes', icon: '\u{1F9B8}', description: '专属主题 独特造型', descriptionEn: 'Unique themed cake designs' },
  { id: 8,  name: '夹心加料（一层）', nameEn: 'Extra Filling (1 layer)', icon: '\u{1F36E}', description: '自选夹心 增添风味', descriptionEn: 'Add a layer of filling' },
  { id: 9,  name: '异形加收', nameEn: 'Novelty Shapes', icon: '\u2728', description: '特殊造型 额外加收', descriptionEn: 'Special shapes, extra charge' },
  { id: 10, name: '蛋糕配件', nameEn: 'Cake Accessories', icon: '\u{1F381}', description: '精致配件 生日必备', descriptionEn: 'Birthday party essentials' },
  { id: 11, name: '特殊工艺', nameEn: 'Special Techniques', icon: '\u{1F3A8}', description: '特殊工艺 个性定制', descriptionEn: 'Special techniques, custom designs' },
];

// ═══════════════════════════════════════════
//  Cake Data (6"/8" price per variant)
// ═══════════════════════════════════════════

export const cakes: Cake[] = [

  // ─── Cat 13: Spring Selection ───
  {
    id: 1303, categoryId: 13,
    name: '龙井青梨蛋糕', nameEn: 'Longjing Pear Cake',
    description: '夹心：茉莉绿茶奶冻+新鲜梨块。淡淡龙井茶香搭配清甜梨肉，入口清雅，是属于春天的味道。',
    descriptionEn: 'Filling: jasmine green tea milk pudding + fresh pear chunks. Subtle Longjing tea aroma paired with sweet pear, a refreshing springtime treat.',
    price6: 75, price8: 95, image: '/longjingqingli.jpg',
  },
  {
    id: 1305, categoryId: 13,
    name: '薄荷曼波绿蛋糕', nameEn: 'Mint Mambo Green Cake',
    description: '夹心：酸奶跳跳珠+薄荷奶冻。清新薄荷绿配酸甜跳跳珠，俏皮清新，夏日必试。',
    descriptionEn: 'Filling: yoghurt popping boba + mint milk pudding. Refreshing minty green with tangy popping boba — playful, fresh, and a summer favourite.',
    price6: 70, price8: 90, image: '/bohe-manbolv.jpg', alsoIn: [2],
  },
  {
    id: 1306, categoryId: 13,
    name: '椰香菠萝蛋糕', nameEn: 'Coconut Pineapple Cake',
    description: '夹心：椰子奶冻+手作菠萝果酱。椰香清甜碰撞菠萝果香，热带风味十足。',
    descriptionEn: 'Filling: coconut milk pudding + homemade pineapple jam. Sweet coconut meets tangy pineapple — a tropical escape in every bite.',
    price6: 75, price8: 95, image: '/yexiang-boluo.jpg', alsoIn: [1],
  },

  // ─── Cat 1: Fruit Cream Piped Cakes ───
  {
    id: 109, categoryId: 1,
    name: '榴莲奶油裱花蛋糕', nameEn: 'Durian Cream Piped Cake',
    description: '泰国金枕榴莲果肉，浓郁香气，爱榴莲人士不可错过。',
    descriptionEn: 'Thai Monthong durian flesh, intensely aromatic — a must for durian lovers.',
    price6: 85, price8: 105, image: '/liulian.JPG', tag: '爆款', tagEn: 'Best Seller',
  },
  {
    id: 101, categoryId: 1,
    name: '草莓奶油裱花蛋糕', nameEn: 'Strawberry Cream Piped Cake',
    description: '新鲜草莓搭配轻盈奶油裱花，粉嫩甜美，适合生日、聚会。',
    descriptionEn: 'Fresh strawberries with light piped cream, sweet and perfect for birthdays.',
    price6: 65, price8: 85, image: '/caomei.jpg', tag: '热销', tagEn: 'Hot',
  },
  {
    id: 102, categoryId: 1,
    name: '蓝莓奶油裱花蛋糕', nameEn: 'Blueberry Cream Piped Cake',
    description: '颗颗饱满蓝莓点缀，清爽酸甜，口感层次丰富。',
    descriptionEn: 'Plump blueberries, refreshing sweet-tart flavour with rich texture.',
    price6: 80, price8: 100, image: '/lanmei.jpg',
  },
  {
    id: 104, categoryId: 1,
    name: '黑莓果酱奶油裱花蛋糕', nameEn: 'Blackberry Jam Cream Piped Cake',
    description: '进口黑莓点缀，深邃紫红色泽，酸甜开胃。',
    descriptionEn: 'Imported blackberries, deep purple hue, tangy and appetising.',
    price6: 60, price8: 80, image: '/heimei.PNG',
  },
  {
    id: 106, categoryId: 1,
    name: '青提奶油裱花蛋糕', nameEn: 'Green Grape Cream Piped Cake',
    description: '清爽青提果肉，翠绿悦目，清甜不腻，夏日首选。',
    descriptionEn: 'Crisp green grapes, refreshingly sweet, perfect summer choice.',
    price6: 85, price8: 105, image: '/qingti.JPG',
  },
  {
    id: 107, categoryId: 1,
    name: '树莓奶油裱花蛋糕', nameEn: 'Raspberry Cream Piped Cake',
    description: '进口树莓点缀，小巧红艳，酸甜口感，精致优雅。',
    descriptionEn: 'Imported raspberries, petite and ruby red, tangy and elegant.',
    price6: 75, price8: 95, image: '/shumei.jpg',
  },
  {
    id: 108, categoryId: 1,
    name: '荔枝奶油裱花蛋糕', nameEn: 'Lychee Cream Piped Cake',
    description: '罐头荔枝果肉，清甜水润，独特风味。',
    descriptionEn: 'Canned lychee flesh, sweet and juicy with a unique flavour.',
    price6: 75, price8: 95, image: '/lizhi.JPG', tag: '人气', tagEn: 'Popular', hidden: true,
  },
  // ─── Cat 2: Flavoured Cakes ───
  {
    id: 1302, categoryId: 2,
    name: '摩卡咖啡蛋糕', nameEn: 'Mocha Coffee Cake',
    description: '摩卡咖啡蛋糕。咖啡戚风胚+巧克力奶冻+黄油薄脆+混合坚果干+摩卡奶油。',
    descriptionEn: 'Mocha coffee cake. Coffee chiffon sponge + chocolate milk pudding + butter crunch + mixed nuts + mocha cream.',
    price6: 75, price8: 95, image: '/moka-coffee.jpg',
  },
  {
    id: 201, categoryId: 2,
    name: '伯爵红茶', nameEn: 'Earl Grey Tea',
    description: '夹心：特调红茶奶油+红茶奶冻',
    descriptionEn: 'Filling: Earl Grey cream + tea milk pudding',
    price6: 80, price8: 100, image: '/bojuehongcha.jpg',
  },
  {
    id: 202, categoryId: 2,
    name: '抹茶', nameEn: 'Matcha',
    description: '夹心：抹茶奶油+抹茶奶冻',
    descriptionEn: 'Filling: matcha cream + matcha milk pudding',
    price6: 80, price8: 100, image: '/mocha.JPG', alsoIn: [13],
  },
  {
    id: 203, categoryId: 2,
    name: '桂花', nameEn: 'Osmanthus',
    description: '夹心：桂花酱+桂花奶冻',
    descriptionEn: 'Filling: osmanthus syrup + osmanthus milk pudding',
    price6: 75, price8: 95, image: '/guihua.JPG',
  },
  {
    id: 204, categoryId: 2,
    name: '原味奥利奥', nameEn: 'Classic Oreo',
    description: '夹心：奥利奥碎',
    descriptionEn: 'Filling: Oreo crumbles',
    price6: 70, price8: 90, image: '/yuanweiaoliao.PNG',
  },
  {
    id: 205, categoryId: 2,
    name: '海盐奥利奥', nameEn: 'Sea Salt Oreo',
    description: '夹心：奥利奥碎',
    descriptionEn: 'Filling: Oreo crumbles',
    price6: 70, price8: 90, image: '/haiyanaoliao.JPG',
  },
  {
    id: 206, categoryId: 2,
    name: '玫瑰荔枝', nameEn: 'Rose Lychee',
    description: '夹心：荔枝果肉+荔枝特调奶油',
    descriptionEn: 'Filling: lychee flesh + lychee cream',
    price6: 80, price8: 100, image: '/meiguilizhi.JPG',
  },
  {
    id: 207, categoryId: 2,
    name: '岩烧焦糖香蕉蛋糕', nameEn: 'Caramel Banana Cake',
    description: '夹心：香蕉泥+焦糖奶冻',
    descriptionEn: 'Filling: banana puree + caramel milk pudding',
    price6: 70, price8: 90, image: '/jiaotangxiangjiao.JPG',
  },
  {
    id: 208, categoryId: 2,
    name: '开心果', nameEn: 'Pistachio',
    description: '夹心：奶冻+开心果碎',
    descriptionEn: 'Filling: milk pudding + crushed pistachios',
    price6: 80, price8: 100, image: '/kaixinguo.jpg',
  },
  {
    id: 210, categoryId: 2,
    name: '纯巧克力蛋糕', nameEn: 'Pure Chocolate Cake',
    description: '可可戚风+特调奶油+薄脆夹心+混合坚果',
    descriptionEn: 'Cocoa chiffon + special cream + crispy filling + mixed nuts',
    price6: 75, price8: 95, image: '/qiaokelikeke.jpg',
  },
  {
    id: 211, categoryId: 2,
    name: '紫薯芋泥蛋糕', nameEn: 'Purple Sweet Potato & Taro Cake',
    description: '夹心：奶香紫薯芋泥（限定食材，建议提前5天预定）',
    descriptionEn: 'Filling: creamy purple sweet potato taro paste (limited ingredient, please order 5 days ahead)',
    price6: 75, price8: 95, image: '/zishunidangao.JPG', alsoIn: [13],
  },
  {
    id: 212, categoryId: 2,
    name: '焦糖杏仁草莓', nameEn: 'Caramel Almond Strawberry',
    description: '甜中带咸的焦糖与草莓完美搭配',
    descriptionEn: 'Sweet-salty caramel perfectly paired with strawberries',
    price6: 75, price8: 95, image: '/jiaotangxingrencaomei.JPG',
  },
  {
    id: 213, categoryId: 2,
    name: '黑森林蛋糕', nameEn: 'Black Forest Cake',
    description: '可可戚风+特调奶油+糖渍樱桃',
    descriptionEn: 'Cocoa chiffon + special cream + candied cherries',
    price6: 75, price8: 95, image: '/heisenlin.jpg',
  },
  {
    id: 1304, categoryId: 2,
    name: '栗子蛋糕', nameEn: 'Chestnut Cake',
    description: '夹心：栗子蓉+黄油薄脆。绵密栗子蓉层叠黄油薄脆，秋意浓香与酥脆交融，温润回甘。',
    descriptionEn: 'Filling: chestnut puree + butter crunch. Silky chestnut paste layered with crispy butter crunch, autumnal warmth in every bite.',
    price6: 75, price8: 95, image: '/lizi.jpg',
  },

  // ─── Cat 3: Basque Cheesecakes ───
  {
    id: 302, categoryId: 3,
    name: '原味草莓酸奶巴斯克', nameEn: 'Strawberry Yoghurt Basque',
    description: '草莓酸奶香气，酸甜可口',
    descriptionEn: 'Strawberry yoghurt fragrance, sweet and tangy',
    price6: 65, price8: 85, image: '/yuanweicaomeisuannaibasike.JPG',
  },
  {
    id: 303, categoryId: 3,
    name: '原味蓝莓酸奶巴斯克', nameEn: 'Blueberry Yoghurt Basque',
    description: '蓝莓酸奶香气，清爽自然',
    descriptionEn: 'Blueberry yoghurt fragrance, refreshingly natural',
    price6: 65, price8: 85, image: '/yuanweilanmeisuannaibasike.JPG',
  },
  {
    id: 304, categoryId: 3,
    name: '原味香草酸奶巴斯克', nameEn: 'Vanilla Yoghurt Basque',
    description: '香草酸奶香气，经典绵密',
    descriptionEn: 'Vanilla yoghurt fragrance, classic and creamy',
    price6: 65, price8: 85, image: '/yuanweixiangcaosuannaibasike.JPG',
  },
  {
    id: 305, categoryId: 3,
    name: '抹茶酸奶巴斯克', nameEn: 'Matcha Yoghurt Basque',
    description: '宇治抹茶粉，香浓微苦',
    descriptionEn: 'Uji matcha powder, rich with a subtle bitterness',
    price6: 75, price8: 95, image: '/mochasuannaibasike.JPG',
  },
  {
    id: 306, categoryId: 3,
    name: '抹茶奶油巴斯克', nameEn: 'Matcha Cream Basque',
    description: '抹茶搭配奶香，回味悠长',
    descriptionEn: 'Matcha paired with creamy richness, lingering finish',
    price6: 75, price8: 95, image: '/mochanaiyoubasike.JPG',
  },
  {
    id: 307, categoryId: 3,
    name: '原味莓果奶油巴斯克', nameEn: 'Mixed Berry Cream Basque',
    description: '混合莓果，香甜浓郁',
    descriptionEn: 'Mixed berries, sweet and richly aromatic',
    price6: 70, price8: 90, image: '/yuanweimeiguonaiyoubasike.jpg',
  },
  {
    id: 308, categoryId: 3,
    name: '柠檬巴斯克', nameEn: 'Lemon Basque',
    description: '柠檬清香，酸甜平衡',
    descriptionEn: 'Zesty lemon aroma, perfectly balanced sweet and sour',
    price6: 70, price8: 90, image: '/ningmengbasike.JPG',
  },
  {
    id: 309, categoryId: 3,
    name: '榴莲巴斯克', nameEn: 'Durian Basque',
    description: '泰国金枕榴莲果肉，香气浓郁霸道，榴莲爱好者的终极享受。',
    descriptionEn: 'Thai Monthong durian flesh, intensely aromatic — the ultimate indulgence for durian lovers.',
    price6: 85, price8: 105, image: '/liulian-basike.jpg',
  },

  // ─── Cat 4: Naked Cakes ───
  {
    id: 401, categoryId: 4,
    name: '红丝绒草莓裸蛋糕', nameEn: 'Red Velvet Strawberry Naked Cake',
    description: '红丝绒蛋糕配新鲜草莓，经典搭配',
    descriptionEn: 'Red velvet cake with fresh strawberries, a classic pairing',
    price6: 55, price8: 75, image: '/hongsirongcaomeiluodangao.JPG',
  },
  {
    id: 402, categoryId: 4,
    name: '原味奶油水果裸蛋糕', nameEn: 'Classic Fruit Naked Cake',
    description: '时令水果搭配（不指定水果种类）',
    descriptionEn: 'Seasonal fruit mix (fruit selection may vary)',
    price6: 55, price8: 75, image: '/yuanweinaiyoushuiguoluodangao.JPG',
  },

  // ─── Cat 7: Special Themes ───
  {
    id: 701, categoryId: 7,
    name: '蛋壳', nameEn: 'Egg Shell',
    description: '蛋壳造型，创意十足',
    descriptionEn: 'Egg shell shape, wonderfully creative',
    price6: 80, price8: 100, image: '/danke.JPG',
  },
  {
    id: 702, categoryId: 7,
    name: '雪顶草莓', nameEn: 'Snowcap Strawberry',
    description: '雪顶造型配新鲜草莓，清新可爱',
    descriptionEn: 'Snowcap design with fresh strawberries, fresh and adorable',
    price6: 65, price8: 85, image: '/xuedingcaomei.JPG',
  },
  {
    id: 703, categoryId: 7,
    name: '经典儿童彩针', nameEn: 'Classic Rainbow Sprinkles',
    description: '七彩彩针装饰，缤纷喜庆',
    descriptionEn: 'Rainbow sprinkles, colourful and festive',
    price6: 65, price8: 85, image: '/jingdianertongcaizhen.JPG',
  },
  {
    id: 705, categoryId: 7,
    name: '蝴蝶款式', nameEn: 'Butterfly Style',
    description: '轻盈蝴蝶造型，浪漫精致',
    descriptionEn: 'Delicate butterfly design, romantic and elegant',
    price6: 70, price8: 90, image: '/hudie.jpg',
  },
  {
    id: 706, categoryId: 7,
    name: '日月同辉', nameEn: 'Sun & Moon',
    description: '日月星辰造型，梦幻特别款',
    descriptionEn: 'Sun, moon and stars design, dreamy and special',
    price6: 115, price8: 135, image: '/riyuetonghui.jpg',
  },
  {
    id: 707, categoryId: 7,
    name: '许愿池', nameEn: 'Wishing Pool',
    description: '三层水池蛋糕，自选口味夹心。可在下单时备注口味偏好（参见夹心加料类目）。',
    descriptionEn: 'Three-tier pool design with customisable filling. Please specify your preferred flavour in the order notes (see Extra Filling category).',
    price6: 85, price8: 105, image: '/xuyuanchi.jpg',
  },
  {
    id: 708, categoryId: 7,
    name: '拼色蛋糕', nameEn: 'Color Block Cake',
    description: '多色拼色造型，夹心可自选（价格需与自由星人确认）。下单请备注偏好口感和颜色搭配。',
    descriptionEn: 'Multi-colour block design with customisable filling (price subject to final confirmation). Please leave your colour and flavour preferences in the order notes.',
    price6: 80, price8: 100, image: '/pinse.jpg',
  },
  {
    id: 709, categoryId: 7,
    name: '小雏菊蛋糕', nameEn: 'Daisy Cake',
    description: '清新小雏菊裱花造型，夹心可自选（价格需与自由星人确认）。下单请备注偏好口感和花色。',
    descriptionEn: 'Fresh little-daisy piping design with customisable filling (price subject to final confirmation). Please leave your flavour and colour preferences in the order notes.',
    price6: 75, price8: 95, image: '/xiaochuju.jpg',
  },

  // ─── Cat 8: Extra Fillings ───
  { id: 801, categoryId: 8, name: '时令水果', nameEn: 'Seasonal Fruit', description: '当季新鲜水果夹心', descriptionEn: 'Fresh seasonal fruit filling', price6: 0, price8: 0, singlePrice: 5, image: '/shilingshuiguo.JPG' },
  { id: 802, categoryId: 8, name: '各式奶冻', nameEn: 'Assorted Milk Pudding', description: '细腻奶冻夹心', descriptionEn: 'Silky milk pudding filling', price6: 0, price8: 0, singlePrice: 5, image: '/geshinaidong.JPG' },
  { id: 803, categoryId: 8, name: '紫薯泥夹心', nameEn: 'Purple Sweet Potato Paste', description: '奶香紫薯泥夹心', descriptionEn: 'Creamy purple sweet potato paste', price6: 0, price8: 0, singlePrice: 10, image: '/zishuyunijiaxin.JPG' },
  { id: 804, categoryId: 8, name: '奥利奥碎', nameEn: 'Oreo Crumbles', description: '酥脆奥利奥碎夹心', descriptionEn: 'Crunchy Oreo crumble filling', price6: 0, price8: 0, singlePrice: 5, image: '/aoliaosui.JPG' },
  { id: 805, categoryId: 8, name: '黄油薄脆', nameEn: 'Butter Crunch', description: '香脆黄油薄脆夹心', descriptionEn: 'Crispy butter crunch filling', price6: 0, price8: 0, singlePrice: 5, image: '/huangyoubaocui.JPG' },
  { id: 806, categoryId: 8, name: '黑糖珍珠', nameEn: 'Brown Sugar Boba', description: '4小时内食用完', descriptionEn: 'Consume within 4 hours', price6: 0, price8: 0, singlePrice: 10, image: '/heitangzhenzhu.JPG' },
  { id: 807, categoryId: 8, name: '伯爵红茶奶冻', nameEn: 'Earl Grey Milk Pudding', description: '伯爵红茶口味奶冻', descriptionEn: 'Earl Grey flavoured milk pudding', price6: 0, price8: 0, singlePrice: 5, image: '/bojuehongchanaidong.JPG' },

  // ─── Cat 9: Novelty Shapes ───
  { id: 901, categoryId: 9, name: '爱心', nameEn: 'Heart', description: '爱心造型', descriptionEn: 'Heart-shaped', price6: 0, price8: 0, singlePrice: 5, image: '/aixin.JPG' },
  { id: 902, categoryId: 9, name: '方形', nameEn: 'Square', description: '方形造型', descriptionEn: 'Square-shaped', price6: 0, price8: 0, singlePrice: 10, image: '/fangxing.JPG' },
  { id: 903, categoryId: 9, name: '不规则蝴蝶', nameEn: 'Irregular Butterfly', description: '不规则蝴蝶造型', descriptionEn: 'Irregular butterfly shape', price6: 0, price8: 0, singlePrice: 10, image: '/buguizehudie.JPG' },
  { id: 904, categoryId: 9, name: '椭圆', nameEn: 'Oval', description: '椭圆造型', descriptionEn: 'Oval-shaped', price6: 0, price8: 0, singlePrice: 5, image: '/tuoyuan.JPG' },
  { id: 905, categoryId: 9, name: '加高', nameEn: 'Tall (Extra Layer)', description: '一层蛋糕胚', descriptionEn: 'One extra cake layer', price6: 0, price8: 0, singlePrice: 5, image: '/jiagao.jpg' },

  // ─── Cat 10: Cake Accessories ───
  { id: 1002, categoryId: 10, name: '铅笔蜡烛', nameEn: 'Pencil Candles', description: '彩色铅笔蜡烛', descriptionEn: 'Colourful pencil candles', price6: 0, price8: 0, singlePrice: 2, image: '/qianbilazhu.JPG' },
  { id: 1003, categoryId: 10, name: '生日皇冠', nameEn: 'Birthday Crown', description: '闪耀生日皇冠', descriptionEn: 'Sparkly birthday crown', price6: 0, price8: 0, singlePrice: 2, image: '/shengrihuangguan.JPG' },
  { id: 1004, categoryId: 10, name: '蛋糕餐具', nameEn: 'Cake Tableware Set', description: '一套5人份（含刀叉盘等）', descriptionEn: '5-piece set (plates, forks, etc.)', price6: 0, price8: 0, singlePrice: 2, image: '/dangaocanju.jpg' },
  { id: 1005, categoryId: 10, name: '蝴蝶结蜡烛', nameEn: 'Bow Candles', description: '一盒6个', descriptionEn: '6 per box', price6: 0, price8: 0, singlePrice: 2, image: '/hudielazhu.jpg' },

  // ─── Cat 11: Special Techniques ───
  { id: 1101, categoryId: 11, name: '芝士转印', nameEn: 'Cheese Transfer', description: '按图定制，每图$15', descriptionEn: 'Custom per design, $15 each', price6: 0, price8: 0, singlePrice: 15, image: '/zhishizhuanyin.JPG' },
  { id: 1102, categoryId: 11, name: '翻糖', nameEn: 'Fondant', description: '翻糖装饰，每件$15', descriptionEn: 'Fondant decoration, $15 per piece', price6: 0, price8: 0, singlePrice: 15, image: '/fantang.jpg' },
  { id: 1103, categoryId: 11, name: '奶油霜小动物', nameEn: 'Buttercream Animals', description: '可爱奶油霜小动物，每件$15', descriptionEn: 'Cute buttercream animals, $15 each', price6: 0, price8: 0, singlePrice: 15, image: '/naiyoushuangxiaodongwu.JPG' },
];
