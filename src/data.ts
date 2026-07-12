import type { Category, Cake } from './types';

// ═══════════════════════════════════════════
//  Planet Sweets — 13 Categories
// ═══════════════════════════════════════════

export const categories: Category[] = [
  { id: 13, name: '冬日推荐', nameEn: 'Winter Picks', icon: '\u{2744}', description: '冬日限定 温暖治愈', descriptionEn: 'Winter exclusive, warm & cozy' },
  { id: 1,  name: '水果奶油裱花蛋糕', nameEn: 'Fruit Cream Piped Cakes', icon: '\u{1F353}', description: '新鲜水果搭配轻盈奶油', descriptionEn: 'Fresh fruit with light whipped cream' },
  { id: 2,  name: '口味蛋糕', nameEn: 'Flavoured Cakes', icon: '\u{1F36E}', description: '多种口味 丰富夹心', descriptionEn: 'Assorted flavours with layered fillings' },
  { id: 3,  name: '巴斯克', nameEn: 'Basque Cheesecakes', icon: '\u{1F9C0}', description: '焦香浓郁 绵密丝滑', descriptionEn: 'Rich caramelised top, silky texture' },
  { id: 4,  name: '裸蛋糕', nameEn: 'Naked Cakes', icon: '\u{1F353}', description: '简约清新 水果本味', descriptionEn: 'Minimalist with fresh fruit' },
  { id: 7,  name: '童趣款', nameEn: 'Kids Cakes', icon: '\u{1F9B8}', description: '可爱有趣 儿童最爱', descriptionEn: 'Fun & cute, kids love them' },
  { id: 8,  name: '夹心加料（一层）', nameEn: 'Extra Filling (1 layer)', icon: '\u{1F36E}', description: '自选夹心 增添风味', descriptionEn: 'Add a layer of filling' },
  { id: 9,  name: '异形加收', nameEn: 'Novelty Shapes', icon: '\u2728', description: '特殊造型 额外加收', descriptionEn: 'Special shapes, extra charge' },
  { id: 10, name: '蛋糕配件', nameEn: 'Cake Accessories', icon: '\u{1F381}', description: '精致配件 生日必备', descriptionEn: 'Birthday party essentials' },
  { id: 11, name: '特殊工艺', nameEn: 'Special Techniques', icon: '\u{1F3A8}', description: '特殊工艺 个性定制', descriptionEn: 'Special techniques, custom designs' },
];

// ═══════════════════════════════════════════
//  Cake Data (6"/8" price per variant)
// ═══════════════════════════════════════════

export const cakes: Cake[] = [

  // ─── Cat 13: Winter Picks ───
  {
    id: 1302, categoryId: 13,
    name: '焦糖咖啡蛋糕', nameEn: 'Caramel Coffee Cake',
    description: '黄油薄脆+焦糖海盐奶油+拿铁奶冻+咖啡戚风。浓郁咖啡香融入绵密蛋糕体，层层夹入顺滑奶油，表面淋上琥珀色焦糖酱，是属于大人的温柔甜点。',
    descriptionEn: 'Butter crunch + salted caramel cream + latte milk pudding + coffee chiffon. Rich coffee aroma, smooth cream layers, amber caramel glaze on top. A grown-up dessert.',
    price6: 75, price8: 95, image: '/jiatang-coffee.jpg',
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
    id: 105, categoryId: 1,
    name: '葡萄奶油裱花蛋糕', nameEn: 'Grape Cream Piped Cake',
    description: '饱满葡萄果肉均匀铺陈，清甜多汁，精致美观。',
    descriptionEn: 'Juicy grapes evenly arranged, sweet and delicately beautiful.',
    price6: 65, price8: 85, image: '/putao.JPG',
  },
  {
    id: 106, categoryId: 1,
    name: '青提奶油裱花蛋糕', nameEn: 'Green Grape Cream Piped Cake',
    description: '清爽青提果肉，翠绿悦目，清甜不腻，夏日首选。',
    descriptionEn: 'Crisp green grapes, refreshingly sweet, perfect summer choice.',
    price6: 65, price8: 85, image: '/qingti.JPG',
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
    id: 201, categoryId: 2,
    name: '伯爵红茶', nameEn: 'Earl Grey Tea',
    description: '夹心：特调红茶奶油+红茶奶冻',
    descriptionEn: 'Filling: Earl Grey cream + tea milk pudding',
    price6: 75, price8: 95, image: '/bojuehongcha.JPG',
  },
  {
    id: 202, categoryId: 2,
    name: '抹茶', nameEn: 'Matcha',
    description: '夹心：抹茶奶油+抹茶奶冻',
    descriptionEn: 'Filling: matcha cream + matcha milk pudding',
    price6: 75, price8: 95, image: '/mocha.JPG',
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
    id: 209, categoryId: 2,
    name: '黑糖珍珠奶茶蛋糕', nameEn: 'Brown Sugar Bubble Tea Cake',
    description: '因珍珠特性建议当天食用完',
    descriptionEn: 'Best consumed same day due to boba texture',
    price6: 70, price8: 90, image: '/heitangbobo.JPG',
  },
  {
    id: 210, categoryId: 2,
    name: '厚巧克力蛋糕', nameEn: 'Thick Chocolate Cake',
    description: '可可戚风+特调可可奶油+醇厚干纳许，白巧/黑巧可选',
    descriptionEn: 'Cocoa chiffon + special cocoa cream + rich ganache. White/dark chocolate options',
    price6: 75, price8: 95, image: '/qiaokelikeke.JPG',
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

  // ─── Cat 3: Basque Cheesecakes ───
  {
    id: 301, categoryId: 3,
    name: '原味芒果酸奶巴斯克', nameEn: 'Mango Yoghurt Basque',
    description: '芒果酸奶香气，焦香外皮',
    descriptionEn: 'Mango yoghurt fragrance with caramelised crust',
    price6: 65, price8: 85, image: '/yuanweimangguosuannaibasike.JPG',
  },
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

  // ─── Cat 7: Kids Cakes ───
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
    id: 704, categoryId: 7,
    name: '缤纷色彩', nameEn: 'Colourful Splash',
    description: '多彩缤纷装饰，活泼生动',
    descriptionEn: 'Vibrant decorations, lively and fun',
    price6: 65, price8: 85, image: '/binfensecai.JPG',
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
  { id: 1001, categoryId: 10, name: '刀叉盘（5人份）', nameEn: 'Cutlery Set (5 people)', description: '精致刀叉餐具套装', descriptionEn: 'Deluxe cutlery set', price6: 0, price8: 0, singlePrice: 2, image: '/daochapaipan.JPG' },
  { id: 1002, categoryId: 10, name: '铅笔蜡烛', nameEn: 'Pencil Candles', description: '彩色铅笔蜡烛', descriptionEn: 'Colourful pencil candles', price6: 0, price8: 0, singlePrice: 2, image: '/qianbilazhu.JPG' },
  { id: 1003, categoryId: 10, name: '生日皇冠', nameEn: 'Birthday Crown', description: '闪耀生日皇冠', descriptionEn: 'Sparkly birthday crown', price6: 0, price8: 0, singlePrice: 2, image: '/shengrihuangguan.JPG' },

  // ─── Cat 11: Special Techniques ───
  { id: 1101, categoryId: 11, name: '芝士转印', nameEn: 'Cheese Transfer', description: '按图定制，每图$15', descriptionEn: 'Custom per design, $15 each', price6: 0, price8: 0, singlePrice: 15, image: '/zhishizhuanyin.JPG' },
  { id: 1102, categoryId: 11, name: '翻糖', nameEn: 'Fondant', description: '翻糖装饰，每件$15', descriptionEn: 'Fondant decoration, $15 per piece', price6: 0, price8: 0, singlePrice: 15, image: '/fantang.jpg' },
  { id: 1103, categoryId: 11, name: '奶油霜小动物', nameEn: 'Buttercream Animals', description: '可爱奶油霜小动物，每件$15', descriptionEn: 'Cute buttercream animals, $15 each', price6: 0, price8: 0, singlePrice: 15, image: '/naiyoushuangxiaodongwu.JPG' },
];
