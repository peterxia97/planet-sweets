import type { Category, Cake } from './types';

// ═══════════════════════════════════════════
//  多糖星球 Planet Sweets — 11 大类
// ═══════════════════════════════════════════

export const categories: Category[] = [
  { id: 1,  name: '水果奶油裱花蛋糕', icon: '🍓', description: '新鲜水果搭配轻盈奶油' },
  { id: 2,  name: '口味蛋糕',          icon: '🍮', description: '多种口味 丰富夹心' },
  { id: 3,  name: '巴斯克',           icon: '🧀', description: '焦香浓郁 绵密丝滑' },
  { id: 4,  name: '裸蛋糕',           icon: '🍓', description: '简约清新 水果本味' },
  { id: 5,  name: '慕斯蛋糕',         icon: '🍨', description: '丝滑慕斯 入口即化' },
  { id: 6,  name: '特定造型',         icon: '🎂', description: '定制造型 独一无二' },
  { id: 7,  name: '童趣款',           icon: '🧸', description: '可爱有趣 儿童最爱' },
  { id: 8,  name: '夹心加料（一层）', icon: '🍮', description: '自选夹心 增添风味' },
  { id: 9,  name: '异形加收',         icon: '✨', description: '特殊造型 额外加收' },
  { id: 10, name: '蛋糕配件',         icon: '🎁', description: '精致配件 生日必备' },
  { id: 11, name: '来图定制',         icon: '📷', description: '来图定制 提前微信联系' },
];

// ═══════════════════════════════════════════
//  蛋糕数据（每款支持 6寸/8寸 价格不同）
// ═══════════════════════════════════════════

export const cakes: Cake[] = [

  // ──────────────────────────────────────
  // 大类1：水果奶油裱花蛋糕
  // 常规：6寸=$65 / 8寸=$75
  // 荔枝：6寸=$75 / 8寸=$85
  // 榴莲：6寸=$85 / 8寸=$95
  // ──────────────────────────────────────
  {
    id: 101,
    categoryId: 1,
    name: '草莓奶油裱花蛋糕',
    description: '新鲜草莓搭配轻盈奶油裱花，粉嫩甜美，适合生日、聚会。',
    price6: 65, price8: 75,
    image: '/caomei.JPG',
    tag: '热销',
  },
  {
    id: 102,
    categoryId: 1,
    name: '蓝莓奶油裱花蛋糕',
    description: '颗颗饱满蓝莓点缀，清爽酸甜，口感层次丰富。',
    price6: 65, price8: 75,
    image: '/lanmei.PNG',
  },
  {
    id: 103,
    categoryId: 1,
    name: '芒果奶油裱花蛋糕',
    description: '金黄芒果果肉铺满蛋糕，香甜浓郁，热带风情。',
    price6: 65, price8: 75,
    image: '/mangguo.PNG',
  },
  {
    id: 104,
    categoryId: 1,
    name: '黑莓奶油裱花蛋糕',
    description: '进口黑莓点缀，深邃紫红色泽，酸甜开胃。',
    price6: 65, price8: 75,
    image: '/heimei.PNG',
  },
  {
    id: 105,
    categoryId: 1,
    name: '葡萄奶油裱花蛋糕',
    description: '饱满葡萄果肉均匀铺陈，清甜多汁，精致美观。',
    price6: 65, price8: 75,
    image: '/putao.JPG',
  },
  {
    id: 106,
    categoryId: 1,
    name: '青提奶油裱花蛋糕',
    description: '清爽青提果肉，翠绿悦目，清甜不腻，夏日首选。',
    price6: 65, price8: 75,
    image: '/qingti.JPG',
  },
  {
    id: 107,
    categoryId: 1,
    name: '树莓奶油裱花蛋糕',
    description: '进口树莓点缀，小巧红艳，酸甜口感，精致优雅。',
    price6: 65, price8: 75,
    image: '/shumei.jpg',
  },
  {
    id: 108,
    categoryId: 1,
    name: '荔枝奶油裱花蛋糕',
    description: '罐头荔枝果肉，清甜水润，独特风味。',
    price6: 75, price8: 85,
    image: '/lizhi.JPG',
    tag: '人气',
  },
  {
    id: 109,
    categoryId: 1,
    name: '榴莲奶油裱花蛋糕',
    description: '泰国金枕榴莲果肉，浓郁香气，爱榴莲人士不可错过。',
    price6: 85, price8: 95,
    image: '/liulian.JPG',
    tag: '爆款',
  },

  // ──────────────────────────────────────
  // 大类2：口味蛋糕
  // 常规：6寸=$75 / 8寸=$85
  // 奥利奥系列：6寸=$70 / 8寸=$80
  // 玫瑰荔枝：6寸=$80 / 8寸=$90
  // ──────────────────────────────────────
  {
    id: 201,
    categoryId: 2,
    name: '伯爵红茶',
    description: '夹心：特调红茶奶油+红茶奶冻',
    price6: 75, price8: 85,
    image: '/bojuehongcha.JPG',
  },
  {
    id: 202,
    categoryId: 2,
    name: '抹茶',
    description: '夹心：抹茶奶油+抹茶奶冻',
    price6: 75, price8: 85,
    image: '/mocha.JPG',
  },
  {
    id: 203,
    categoryId: 2,
    name: '桂花',
    description: '夹心：桂花酱+桂花奶冻',
    price6: 75, price8: 85,
    image: '/guihua.JPG',
  },
  {
    id: 204,
    categoryId: 2,
    name: '原味奥利奥',
    description: '夹心：奥利奥碎',
    price6: 70, price8: 80,
    image: '/yuanweiaoliao.PNG',
  },
  {
    id: 205,
    categoryId: 2,
    name: '海盐奥利奥',
    description: '夹心：奥利奥碎',
    price6: 70, price8: 80,
    image: '/haiyanaoliao.JPG',
  },
  {
    id: 206,
    categoryId: 2,
    name: '玫瑰荔枝',
    description: '夹心：荔枝果肉+荔枝特调奶油',
    price6: 80, price8: 90,
    image: '/meiguilizhi.JPG',
  },
  {
    id: 207,
    categoryId: 2,
    name: '焦糖香蕉',
    description: '夹心：香蕉泥+焦糖奶冻',
    price6: 70, price8: 80,
    image: '/jiaotangxiangjiao.JPG',
  },
  {
    id: 208,
    categoryId: 2,
    name: '开心果',
    description: '夹心：奶冻+开心果碎',
    price6: 75, price8: 85,
    image: '/kaixinguo.jpg',
  },
  {
    id: 209,
    categoryId: 2,
    name: '黑糖波波',
    description: '因珍珠特性建议当天食用完',
    price6: 70, price8: 80,
    image: '/heitangbobo.JPG',
  },
  {
    id: 210,
    categoryId: 2,
    name: '巧克力可可',
    description: '夹心：巧克力奶冻+黄油薄脆',
    price6: 75, price8: 85,
    image: '/qiaokelikeke.JPG',
  },
  {
    id: 211,
    categoryId: 2,
    name: '紫薯芋泥蛋糕',
    description: '夹心：奶香紫薯芋泥（限定食材，建议提前5天预定）',
    price6: 75, price8: 85,
    image: '/zishunidangao.JPG',
  },
  {
    id: 212,
    categoryId: 2,
    name: '焦糖杏仁草莓',
    description: '甜中带咸的焦糖与草莓完美搭配',
    price6: 75, price8: 85,
    image: '/jiaotangxingrencaomei.JPG',
  },

  // ──────────────────────────────────────
  // 大类3：巴斯克
  // 原味系列：6寸=$65 / 8寸=$75
  // 抹茶系列：6寸=$75 / 8寸=$85
  // 莓果/柠檬：6寸=$70 / 8寸=$80
  // ──────────────────────────────────────
  {
    id: 301,
    categoryId: 3,
    name: '原味芒果酸奶巴斯克',
    description: '芒果酸奶香气，焦香外皮',
    price6: 65, price8: 75,
    image: '/yuanweimangguosuannaibasike.JPG',
  },
  {
    id: 302,
    categoryId: 3,
    name: '原味草莓酸奶巴斯克',
    description: '草莓酸奶香气，酸甜可口',
    price6: 65, price8: 75,
    image: '/yuanweicaomeisuannaibasike.JPG',
  },
  {
    id: 303,
    categoryId: 3,
    name: '原味蓝莓酸奶巴斯克',
    description: '蓝莓酸奶香气，清爽自然',
    price6: 65, price8: 75,
    image: '/yuanweilanmeisuannaibasike.JPG',
  },
  {
    id: 304,
    categoryId: 3,
    name: '原味香草酸奶巴斯克',
    description: '香草酸奶香气，经典绵密',
    price6: 65, price8: 75,
    image: '/yuanweixiangcaosuannaibasike.JPG',
  },
  {
    id: 305,
    categoryId: 3,
    name: '抹茶酸奶巴斯克',
    description: '宇治抹茶粉，香浓微苦',
    price6: 75, price8: 85,
    image: '/mochasuannaibasike.JPG',
  },
  {
    id: 306,
    categoryId: 3,
    name: '抹茶奶油巴斯克',
    description: '抹茶搭配奶香，回味悠长',
    price6: 75, price8: 85,
    image: '/mochanaiyoubasike.JPG',
  },
  {
    id: 307,
    categoryId: 3,
    name: '原味莓果奶油巴斯克',
    description: '混合莓果，香甜浓郁',
    price6: 70, price8: 80,
    image: '/yuanweimeiguonaiyoubasike.PNG',
  },
  {
    id: 308,
    categoryId: 3,
    name: '柠檬巴斯克',
    description: '柠檬清香，酸甜平衡',
    price6: 70, price8: 80,
    image: '/ningmengbasike.JPG',
  },

  // ──────────────────────────────────────
  // 大类4：水果蛋糕
  // 6寸=$55 / 8寸=$65
  // ──────────────────────────────────────
  {
    id: 401,
    categoryId: 4,
    name: '红丝绒草莓裸蛋糕',
    description: '红丝绒蛋糕配新鲜草莓，经典搭配',
    price6: 55, price8: 65,
    image: '/hongsirongcaomeiluodangao.JPG',
  },
  {
    id: 402,
    categoryId: 4,
    name: '原味奶油水果裸蛋糕',
    description: '时令水果搭配（不指定水果种类）',
    price6: 55, price8: 65,
    image: '/yuanweinaiyoushuiguoluodangao.JPG',
  },

  // ──────────────────────────────────────
  // 大类5：裸蛋糕
  // ──────────────────────────────────────
  // 大类5：慕斯蛋糕
  // 常规：6寸=$65 / 8寸=$75
  // 巧克力：6寸=$70 / 8寸=$80
  // ──────────────────────────────────────
  {
    id: 501,
    categoryId: 5,
    name: '蓝莓多多慕斯',
    description: '蓝莓慕斯，酸甜清爽',
    price6: 65, price8: 75,
    image: '/lanmeiduoduomusi.JPG',
  },
  {
    id: 502,
    categoryId: 5,
    name: '巧克力慕斯',
    description: '浓郁巧克力慕斯，丝滑香浓',
    price6: 70, price8: 80,
    image: '/qiaokelimusi.JPG',
  },
  {
    id: 503,
    categoryId: 5,
    name: '草莓奶酪慕斯',
    description: '草莓与奶酪完美融合',
    price6: 65, price8: 75,
    image: '/caomeinailaomusi.JPG',
  },
  {
    id: 504,
    categoryId: 5,
    name: '柠檬酸奶慕斯',
    description: '柠檬清香，酸甜可口',
    price6: 65, price8: 75,
    image: '/ningmengsuannaimusi.PNG',
  },

  // ──────────────────────────────────────
  // 大类6：特定造型
  // 极简：6寸=$65 / 8寸=$75
  // 插件/花篮：6寸=$70 / 8寸=$80
  // 丝带蝴蝶结：6寸=$70 / 8寸=$85
  // 复古裱花：6寸=$80起 / 8寸=$90起
  // ──────────────────────────────────────
  {
    id: 601,
    categoryId: 6,
    name: '极简风格',
    description: '简约设计，干净利落',
    price6: 65, price8: 75,
    image: '/jijianfengge.JPG',
  },
  {
    id: 602,
    categoryId: 6,
    name: '丝带蝴蝶结蛋糕',
    description: '丝带蝴蝶结装饰，优雅大方',
    price6: 70, price8: 85,
    image: '/sidaihudiejiedangao.JPG',
  },
  {
    id: 603,
    categoryId: 6,
    name: '复古裱花蛋糕',
    description: '复古裱花工艺，精致典雅',
    price6: 80, price8: 90,
    image: '/fugubiaohuadangao.JPG',
    tag: '高价',
  },
  {
    id: 604,
    categoryId: 6,
    name: '插件蛋糕',
    description: '插件装饰，造型多变',
    price6: 70, price8: 80,
    image: '/chajiandangao.JPG',
  },
  {
    id: 605,
    categoryId: 6,
    name: '花篮蛋糕',
    description: '花篮造型，精美别致',
    price6: 70, price8: 80,
    image: '/hualandangao.JPG',
  },

  // ──────────────────────────────────────
  // 大类7：童趣款
  // 蛋壳：6寸=$80 / 8寸=$90
  // 其他：6寸=$65 / 8寸=$75
  // ──────────────────────────────────────
  {
    id: 701,
    categoryId: 7,
    name: '蛋壳',
    description: '蛋壳造型，创意十足',
    price6: 80, price8: 90,
    image: '/danke.JPG',
  },
  {
    id: 702,
    categoryId: 7,
    name: '雪顶草莓',
    description: '雪顶造型配新鲜草莓，清新可爱',
    price6: 65, price8: 75,
    image: '/xuedingcaomei.JPG',
  },
  {
    id: 703,
    categoryId: 7,
    name: '经典儿童彩针',
    description: '七彩彩针装饰，缤纷喜庆',
    price6: 65, price8: 75,
    image: '/jingdianertongcaizhen.JPG',
  },
  {
    id: 704,
    categoryId: 7,
    name: '缤纷色彩',
    description: '多彩缤纷装饰，活泼生动',
    price6: 65, price8: 75,
    image: '/binfensecai.JPG',
  },

  // ──────────────────────────────────────
  // 大类8：夹心加料（一层）
  // 紫薯泥：$10 / 其他：$5（不区分尺寸）
  // ──────────────────────────────────────
  {
    id: 801,
    categoryId: 8,
    name: '时令水果',
    description: '当季新鲜水果夹心',
    price6: 0, price8: 0,
    singlePrice: 5,
    image: '/shilingshuiguo.JPG',
  },
  {
    id: 802,
    categoryId: 8,
    name: '各式奶冻',
    description: '细腻奶冻夹心',
    price6: 0, price8: 0,
    singlePrice: 5,
    image: '/geshinaidong.JPG',
  },
  {
    id: 803,
    categoryId: 8,
    name: '紫薯泥夹心',
    description: '奶香紫薯泥夹心',
    price6: 0, price8: 0,
    singlePrice: 10,
    image: '/zishuyunijiaxin.JPG',
  },
  {
    id: 804,
    categoryId: 8,
    name: '奥利奥碎',
    description: '酥脆奥利奥碎夹心',
    price6: 0, price8: 0,
    singlePrice: 5,
    image: '/aoliaosui.JPG',
  },
  {
    id: 805,
    categoryId: 8,
    name: '黄油薄脆',
    description: '香脆黄油薄脆夹心',
    price6: 0, price8: 0,
    singlePrice: 5,
    image: '/huangyoubaocui.JPG',
  },
  {
    id: 806,
    categoryId: 8,
    name: '黑糖珍珠',
    description: '4小时内食用完',
    price6: 0, price8: 0,
    singlePrice: 10,
    image: '/heitangzhenzhu.JPG',
  },

  // ──────────────────────────────────────
  // 大类9：异形加收
  // 全部 $5（不区分尺寸）
  // ──────────────────────────────────────
  {
    id: 901,
    categoryId: 9,
    name: '爱心',
    description: '爱心造型',
    price6: 0, price8: 0,
    singlePrice: 5,
    image: '/aixin.JPG',
  },
  {
    id: 902,
    categoryId: 9,
    name: '方形',
    description: '方形造型',
    price6: 0, price8: 0,
    singlePrice: 10,
    image: '/fangxing.JPG',
  },
  {
    id: 903,
    categoryId: 9,
    name: '不规则蝴蝶',
    description: '不规则蝴蝶造型',
    price6: 0, price8: 0,
    singlePrice: 10,
    image: '/buguizehudie.JPG',
  },
  {
    id: 904,
    categoryId: 9,
    name: '椭圆',
    description: '椭圆造型',
    price6: 0, price8: 0,
    singlePrice: 5,
    image: '/tuoyuan.JPG',
  },
  {
    id: 905,
    categoryId: 9,
    name: '加高',
    description: '蛋糕加高',
    price6: 0, price8: 0,
    singlePrice: 5,
    image: '/jiajiagao.JPG',
  },

  // ──────────────────────────────────────
  // 大类10：蛋糕配件
  // 全部 $2（不区分尺寸）
  // ──────────────────────────────────────
  {
    id: 1001,
    categoryId: 10,
    name: '刀叉盘（5人份）',
    description: '精致刀叉餐具套装',
    price6: 0, price8: 0,
    singlePrice: 2,
    image: '/daochapaipan.JPG',
  },
  {
    id: 1002,
    categoryId: 10,
    name: '铅笔蜡烛',
    description: '彩色铅笔蜡烛',
    price6: 0, price8: 0,
    singlePrice: 2,
    image: '/qianbilazhu.JPG',
  },
  {
    id: 1003,
    categoryId: 10,
    name: '生日皇冠',
    description: '闪耀生日皇冠',
    price6: 0, price8: 0,
    singlePrice: 2,
    image: '/shengrihuangguan.JPG',
  },

  // ──────────────────────────────────────
  // 大类11：来图定制
  // 芝士转印/翻糖：$15 / 奶油霜小动物：$10（不区分尺寸）
  // ──────────────────────────────────────
  {
    id: 1101,
    categoryId: 11,
    name: '芝士转印',
    description: '按图定制，每图$15',
    price6: 0, price8: 0,
    singlePrice: 15,
    image: '/zhishizhuanyin.JPG',
  },
  {
    id: 1102,
    categoryId: 11,
    name: '翻糖',
    description: '翻糖装饰，每件$15',
    price6: 0, price8: 0,
    singlePrice: 15,
    image: '/fansu.JPG',
  },
  {
    id: 1103,
    categoryId: 11,
    name: '奶油霜小动物',
    description: '可爱奶油霜小动物，每件$10',
    price6: 0, price8: 0,
    singlePrice: 10,
    image: '/naiyoushuangxiaodongwu.JPG',
  },
];
