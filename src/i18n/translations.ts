// ═══════════════════════════════════════════
//  Planet Sweets — 双语翻译字典
// ═══════════════════════════════════════════

// ── 分类名称 ──
export const CATEGORY_NAMES: Record<number, { zh: string; en: string }> = {
  13: { zh: '秋日推荐', en: 'Autumn Picks' },
  1:  { zh: '水果奶油裱花蛋糕', en: 'Fresh Cream Decorated Cakes' },
  2:  { zh: '口味蛋糕', en: 'Flavor Cakes' },
  3:  { zh: '巴斯克', en: 'Basque Cheesecakes' },
  4:  { zh: '裸蛋糕', en: 'Naked Cakes' },
  5:  { zh: '慕斯蛋糕', en: 'Mousse Cakes' },
  12: { zh: '来图定制', en: 'Custom Orders' },
  6:  { zh: '特定造型', en: 'Special Designs' },
  7:  { zh: '童趣款', en: "Kids' Favorites" },
  8:  { zh: '夹心加料（一层）', en: 'Extra Filling (1 Layer)' },
  9:  { zh: '异形加收', en: 'Special Shapes' },
  10: { zh: '蛋糕配件', en: 'Cake Accessories' },
  11: { zh: '特殊工艺', en: 'Special Techniques' },
};

// ── 分类描述 ──
export const CATEGORY_DESCRIPTIONS: Record<number, { zh: string; en: string }> = {
  13: { zh: '秋日限定 温暖治愈', en: 'Autumn limited, warm & comforting' },
  1:  { zh: '新鲜水果搭配轻盈奶油', en: 'Fresh fruit with light cream' },
  2:  { zh: '多种口味 丰富夹心', en: 'Multiple flavors, rich fillings' },
  3:  { zh: '焦香浓郁 绵密丝滑', en: 'Rich caramelized, velvety smooth' },
  4:  { zh: '简约清新 水果本味', en: 'Simple & fresh, natural fruit taste' },
  5:  { zh: '丝滑慕斯 入口即化', en: 'Silky mousse, melts in your mouth' },
  12: { zh: '请把你喜欢的网图发给我哦~', en: 'Send us your favorite cake pics~' },
  6:  { zh: '定制造型 独一无二', en: 'Custom designs, one of a kind' },
  7:  { zh: '可爱有趣 儿童最爱', en: 'Cute & fun, kids love them' },
  8:  { zh: '自选夹心 增添风味', en: 'Choose your filling, extra flavor' },
  9:  { zh: '特殊造型 额外加收', en: 'Special shapes, additional charge' },
  10: { zh: '精致配件 生日必备', en: 'Delicate accessories, birthday essentials' },
  11: { zh: '特殊工艺 个性定制', en: 'Special techniques, personalized' },
};

// ── 蛋糕名称 ──
export const CAKE_NAMES: Record<number, { zh: string; en: string }> = {
  // 秋日推荐
  1301: { zh: '焦糖南瓜蛋糕', en: 'Caramel Pumpkin Cake' },
  1302: { zh: '焦糖咖啡蛋糕', en: 'Caramel Coffee Cake' },
  // 水果奶油裱花蛋糕
  101: { zh: '草莓奶油裱花蛋糕', en: 'Strawberry Fresh Cream Decorated Cake' },
  102: { zh: '蓝莓奶油裱花蛋糕', en: 'Blueberry Fresh Cream Decorated Cake' },
  103: { zh: '罐头芒果奶油裱花蛋糕', en: 'Canned Mango Fresh Cream Decorated Cake' },
  104: { zh: '黑莓果酱奶油裱花蛋糕', en: 'Blackberry Jam Fresh Cream Decorated Cake' },
  105: { zh: '葡萄奶油裱花蛋糕', en: 'Grape Fresh Cream Decorated Cake' },
  106: { zh: '青提奶油裱花蛋糕', en: 'Green Grape Fresh Cream Decorated Cake' },
  107: { zh: '树莓奶油裱花蛋糕', en: 'Raspberry Fresh Cream Decorated Cake' },
  108: { zh: '荔枝奶油裱花蛋糕', en: 'Lychee Fresh Cream Decorated Cake' },
  109: { zh: '榴莲奶油裱花蛋糕', en: 'Durian Fresh Cream Decorated Cake' },
  // 口味蛋糕
  201: { zh: '伯爵红茶', en: 'Earl Grey Tea' },
  202: { zh: '抹茶', en: 'Matcha' },
  203: { zh: '桂花', en: 'Osmanthus' },
  204: { zh: '原味奥利奥', en: 'Original Oreo' },
  205: { zh: '海盐奥利奥', en: 'Sea Salt Oreo' },
  206: { zh: '玫瑰荔枝', en: 'Rose Lychee' },
  207: { zh: '岩烧焦糖香蕉蛋糕', en: 'Caramel Banana Cake' },
  208: { zh: '开心果', en: 'Pistachio' },
  209: { zh: '黑糖珍珠奶茶蛋糕', en: 'Brown Sugar Bubble Tea Cake' },
  210: { zh: '厚巧克力蛋糕', en: 'Thick Chocolate Cake' },
  211: { zh: '紫薯芋泥蛋糕', en: 'Purple Yam & Taro Cake' },
  212: { zh: '焦糖杏仁草莓', en: 'Caramel Almond Strawberry' },
  // 巴斯克
  301: { zh: '原味芒果酸奶巴斯克', en: 'Mango Yogurt Basque' },
  302: { zh: '原味草莓酸奶巴斯克', en: 'Strawberry Yogurt Basque' },
  303: { zh: '原味蓝莓酸奶巴斯克', en: 'Blueberry Yogurt Basque' },
  304: { zh: '原味香草酸奶巴斯克', en: 'Vanilla Yogurt Basque' },
  305: { zh: '抹茶酸奶巴斯克', en: 'Matcha Yogurt Basque' },
  306: { zh: '抹茶奶油巴斯克', en: 'Matcha Cream Basque' },
  307: { zh: '原味莓果奶油巴斯克', en: 'Mixed Berry Cream Basque' },
  308: { zh: '柠檬巴斯克', en: 'Lemon Basque' },
  // 裸蛋糕
  401: { zh: '红丝绒草莓裸蛋糕', en: 'Red Velvet Strawberry Naked Cake' },
  402: { zh: '原味奶油水果裸蛋糕', en: 'Original Cream Fruit Naked Cake' },
  // 慕斯蛋糕
  501: { zh: '蓝莓多多慕斯', en: 'Blueberry Yakult Mousse' },
  502: { zh: '巧克力慕斯', en: 'Chocolate Mousse' },
  503: { zh: '草莓奶酪慕斯', en: 'Strawberry Cheese Mousse' },
  504: { zh: '柠檬酸奶慕斯', en: 'Lemon Yogurt Mousse' },
  // 来图定制
  1201: { zh: '来图定制', en: 'Custom Order' },
  // 特定造型
  601: { zh: '极简风格', en: 'Minimalist Style' },
  602: { zh: '丝带蝴蝶结蛋糕', en: 'Ribbon Bow Cake' },
  603: { zh: '复古裱花蛋糕', en: 'Lambeth Cake' },
  604: { zh: '插件蛋糕', en: 'Topper Cake' },
  605: { zh: '花篮蛋糕', en: 'Flower Basket Cake' },
  606: { zh: '花瓣红粉', en: 'Petal Pink' },
  607: { zh: '母亲节蛋糕', en: "Mother's Day Cake" },
  // 童趣款
  701: { zh: '蛋壳', en: 'Eggshell' },
  702: { zh: '雪顶草莓', en: 'Snowcap Strawberry' },
  703: { zh: '经典儿童彩针', en: 'Classic Kids Sprinkle' },
  704: { zh: '缤纷色彩', en: 'Colorful Delight' },
  // 夹心加料
  801: { zh: '时令水果', en: 'Seasonal Fruit' },
  802: { zh: '各式奶冻', en: 'Assorted Milk Pudding' },
  803: { zh: '紫薯泥夹心', en: 'Purple Yam Paste' },
  804: { zh: '奥利奥碎', en: 'Oreo Crumbs' },
  805: { zh: '黄油薄脆', en: 'Butter Crisp' },
  806: { zh: '黑糖珍珠', en: 'Brown Sugar Pearls' },
  807: { zh: '伯爵红茶奶冻', en: 'Earl Grey Milk Pudding' },
  // 异形加收
  901: { zh: '爱心', en: 'Heart' },
  902: { zh: '方形', en: 'Square' },
  903: { zh: '不规则蝴蝶', en: 'Irregular Butterfly' },
  904: { zh: '椭圆', en: 'Oval' },
  905: { zh: '加高', en: 'Extra Tall' },
  // 蛋糕配件
  1001: { zh: '刀叉盘（5人份）', en: 'Cutlery Set (5 pcs)' },
  1002: { zh: '铅笔蜡烛', en: 'Pencil Candles' },
  1003: { zh: '生日皇冠', en: 'Birthday Crown' },
  // 特殊工艺
  1101: { zh: '芝士转印', en: 'Cheese Transfer' },
  1102: { zh: '翻糖', en: 'Fondant' },
  1103: { zh: '奶油霜小动物', en: 'Buttercream Animals' },
};

// ── 蛋糕描述 ──
export const CAKE_DESCRIPTIONS: Record<number, { zh: string; en: string }> = {
  1301: { zh: '南瓜奶酪泥+奶冻，搭配混合坚果，营养丰富口感层次高。', en: 'Pumpkin cheese paste + milk pudding with mixed nuts, rich in nutrition and texture.' },
  1302: { zh: '黄油薄脆+焦糖海盐奶油+拿铁奶冻+咖啡戚风。浓郁咖啡香融入绵密蛋糕体，层层夹入顺滑奶油，表面淋上琥珀色焦糖酱，是属于大人的温柔甜点。', en: 'Butter crisp + salted caramel cream + latte milk pudding + coffee chiffon. Rich coffee aroma infused in soft cake layers with silky cream, topped with amber caramel sauce.' },
  101: { zh: '新鲜草莓搭配轻盈奶油裱花，粉嫩甜美，适合生日、聚会。', en: 'Fresh strawberries with light cream piping, sweet and pink, perfect for birthdays and parties.' },
  102: { zh: '颗颗饱满蓝莓点缀，清爽酸甜，口感层次丰富。', en: 'Plump blueberries, refreshingly sweet and tangy with rich texture.' },
  103: { zh: '金黄芒果果肉铺满蛋糕，香甜浓郁，热带风情。', en: 'Golden mango pulp spread across the cake, sweet and rich tropical vibe.' },
  104: { zh: '进口黑莓点缀，深邃紫红色泽，酸甜开胃。', en: 'Imported blackberries, deep purple-red color, tangy and appetizing.' },
  105: { zh: '饱满葡萄果肉均匀铺陈，清甜多汁，精致美观。', en: 'Plump grapes evenly arranged, sweet and juicy, exquisitely beautiful.' },
  106: { zh: '清爽青提果肉，翠绿悦目，清甜不腻，夏日首选。', en: 'Fresh green grapes, vibrant green, sweet and refreshing, summer favorite.' },
  107: { zh: '进口树莓点缀，小巧红艳，酸甜口感，精致优雅。', en: 'Imported raspberries, petite and bright red, tangy and elegant.' },
  108: { zh: '罐头荔枝果肉，清甜水润，独特风味。', en: 'Canned lychee pulp, sweet and juicy with unique flavor.' },
  109: { zh: '泰国金枕榴莲果肉，浓郁香气，爱榴莲人士不可错过。', en: 'Thai Monthong durian pulp, rich aroma, a must for durian lovers.' },
  201: { zh: '夹心：特调红茶奶油+红茶奶冻', en: 'Filling: black tea cream + tea milk pudding' },
  202: { zh: '夹心：抹茶奶油+抹茶奶冻', en: 'Filling: matcha cream + matcha milk pudding' },
  203: { zh: '夹心：桂花酱+桂花奶冻', en: 'Filling: osmanthus jam + osmanthus milk pudding' },
  204: { zh: '夹心：奥利奥碎', en: 'Filling: Oreo crumbs' },
  205: { zh: '夹心：奥利奥碎', en: 'Filling: Oreo crumbs' },
  206: { zh: '夹心：荔枝果肉+荔枝特调奶油', en: 'Filling: lychee pulp + lychee cream' },
  207: { zh: '夹心：香蕉泥+焦糖奶冻', en: 'Filling: banana puree + caramel milk pudding' },
  208: { zh: '夹心：奶冻+开心果碎', en: 'Filling: milk pudding + crushed pistachios' },
  209: { zh: '因珍珠特性建议当天食用完', en: 'Best consumed on the day due to pearls' },
  210: { zh: '可可戚风+特调可可奶油+醇厚干纳许，白巧/黑巧可选', en: 'Cocoa chiffon + special cocoa cream + rich ganache. White/dark chocolate options' },
  211: { zh: '夹心：奶香紫薯芋泥（限定食材，建议提前5天预定）', en: 'Filling: creamy purple yam & taro (limited, order 5 days ahead)' },
  212: { zh: '甜中带咸的焦糖与草莓完美搭配', en: 'Sweet & salty caramel perfectly paired with strawberries' },
  301: { zh: '芒果酸奶香气，焦香外皮', en: 'Mango yogurt aroma with caramelized crust' },
  302: { zh: '草莓酸奶香气，酸甜可口', en: 'Strawberry yogurt aroma, sweet and tangy' },
  303: { zh: '蓝莓酸奶香气，清爽自然', en: 'Blueberry yogurt aroma, fresh and natural' },
  304: { zh: '香草酸奶香气，经典绵密', en: 'Vanilla yogurt aroma, classic and creamy' },
  305: { zh: '宇治抹茶粉，香浓微苦', en: 'Uji matcha powder, rich with subtle bitterness' },
  306: { zh: '抹茶搭配奶香，回味悠长', en: 'Matcha with creamy milk, long-lasting aftertaste' },
  307: { zh: '混合莓果，香甜浓郁', en: 'Mixed berries, sweet and rich' },
  308: { zh: '柠檬清香，酸甜平衡', en: 'Lemon fragrance, perfectly balanced sweet & sour' },
  401: { zh: '红丝绒蛋糕配新鲜草莓，经典搭配', en: 'Red velvet cake with fresh strawberries, a classic match' },
  402: { zh: '时令水果搭配（不指定水果种类）', en: 'Seasonal fruit mix (variety not specified)' },
  501: { zh: '蓝莓慕斯，酸甜清爽', en: 'Blueberry mousse, tangy and refreshing' },
  502: { zh: '浓郁巧克力慕斯，丝滑香浓', en: 'Rich chocolate mousse, silky and decadent' },
  503: { zh: '草莓与奶酪完美融合', en: 'Perfect fusion of strawberry and cheese' },
  504: { zh: '柠檬清香，酸甜可口', en: 'Lemon fragrance, sweet and tangy' },
  1201: { zh: '请把你喜欢的网图发给我哦~', en: 'Send us your favorite cake pics~' },
  601: { zh: '简约设计，干净利落', en: 'Minimalist design, clean and crisp' },
  602: { zh: '丝带蝴蝶结装饰，优雅大方', en: 'Ribbon bow decoration, elegant and graceful' },
  603: { zh: '复古裱花工艺，精致典雅', en: 'Vintage piping technique, exquisite and classic' },
  604: { zh: '插件装饰，造型多变', en: 'Topper decoration, versatile designs' },
  605: { zh: '花篮造型，精美别致', en: 'Flower basket design, exquisitely charming' },
  606: { zh: '自选应季水果夹心', en: 'Your choice of seasonal fruit filling' },
  607: { zh: '温馨献礼，感恩母爱', en: 'Heartfelt gift, celebrating motherly love' },
  701: { zh: '蛋壳造型，创意十足', en: 'Eggshell design, super creative' },
  702: { zh: '雪顶造型配新鲜草莓，清新可爱', en: 'Snowcap design with fresh strawberries, fresh and cute' },
  703: { zh: '七彩彩针装饰，缤纷喜庆', en: 'Rainbow sprinkle decoration, colorful and festive' },
  704: { zh: '多彩缤纷装饰，活泼生动', en: 'Colorful decoration, lively and vibrant' },
  801: { zh: '当季新鲜水果夹心', en: 'Fresh seasonal fruit filling' },
  802: { zh: '细腻奶冻夹心', en: 'Delicate milk pudding filling' },
  803: { zh: '奶香紫薯泥夹心', en: 'Creamy purple yam paste filling' },
  804: { zh: '酥脆奥利奥碎夹心', en: 'Crunchy Oreo crumb filling' },
  805: { zh: '香脆黄油薄脆夹心', en: 'Crispy butter crisp filling' },
  806: { zh: '4小时内食用完', en: 'Consume within 4 hours' },
  807: { zh: '伯爵红茶口味奶冻', en: 'Earl Grey flavored milk pudding' },
  901: { zh: '爱心造型', en: 'Heart shape' },
  902: { zh: '方形造型', en: 'Square shape' },
  903: { zh: '不规则蝴蝶造型', en: 'Irregular butterfly shape' },
  904: { zh: '椭圆造型', en: 'Oval shape' },
  905: { zh: '一层蛋糕胚', en: 'One extra cake layer' },
  1001: { zh: '精致刀叉餐具套装', en: 'Delicate cutlery set' },
  1002: { zh: '彩色铅笔蜡烛', en: 'Colorful pencil candles' },
  1003: { zh: '闪耀生日皇冠', en: 'Sparkling birthday crown' },
  1101: { zh: '按图定制，每图$15', en: 'Custom per design, $15 each' },
  1102: { zh: '翻糖装饰，每件$15', en: 'Fondant decoration, $15 each' },
  1103: { zh: '可爱奶油霜小动物，每件$10', en: 'Cute buttercream animals, $10 each' },
};

// ── 标签 ──
export const TAGS: Record<string, { zh: string; en: string }> = {
  '热销': { zh: '热销', en: 'Hot' },
  '新品': { zh: '新品', en: 'New' },
  '人气': { zh: '人气', en: 'Popular' },
  '定制': { zh: '定制', en: 'Custom' },
  '爆款': { zh: '爆款', en: 'Bestseller' },
  '推荐': { zh: '推荐', en: 'Pick' },
  '高价': { zh: '高价', en: 'Premium' },
  '秋日限定': { zh: '秋日限定', en: 'Autumn' },
};

// ── UI 界面文字 (按 key 索引) ──
export const UI: Record<string, { zh: string; en: string }> = {
  // Header
  'header.brand': { zh: '多糖星球', en: 'Planet Sweets' },
  'header.tagline': { zh: 'Planet Sweets', en: 'Handmade in Wandal' },

  // Sidebar
  'sidebar.category': { zh: '分类', en: 'Menu' },

  // Banner
  'banner.welcome': { zh: 'Welcome to', en: 'Welcome to' },
  'banner.brand': { zh: '多糖星球', en: 'Planet Sweets' },
  'banner.tagline': { zh: 'Planet Sweets', en: 'Your Asian Style, Less Sugars' },

  // Order Notice
  'notice.title': { zh: '下单须知', en: 'Order Notice' },
  'notice.blind_box': { zh: '除指定款式外，口味自选，盲盒样式噢～', en: 'Aside from specified designs, flavors are chef\'s choice — it\'s a surprise box~' },
  'notice.custom': { zh: '来图定制因材料色彩会有些许差别，非100%还原。提前三天预定，无法接急单。上门自取Wandal，仅现金或人民币实时汇率转账。颜色为食用色素，介意请要求原色。', en: 'Custom orders may vary slightly in color due to ingredients — not a 100% replica. Please order 3 days in advance, no rush orders. Pickup at Wandal. Cash or RMB real-time rate transfer only. Colors use food coloring — request natural color if preferred.' },

  // Category header
  'category.items': { zh: '款', en: ' items' },
  'category.empty': { zh: '该分类暂无商品', en: 'No items in this category yet' },

  // CakeCard
  'cake.size6': { zh: '6寸', en: '6 inch' },
  'cake.size8': { zh: '8寸', en: '8 inch' },
  'cake.each': { zh: '每份', en: 'each' },
  'cake.add': { zh: '加入购物车', en: 'Add to Cart' },

  // CartDrawer
  'cart.title': { zh: '购物车', en: 'Shopping Cart' },
  'cart.items': { zh: '件', en: ' items' },
  'cart.clear': { zh: '清空', en: 'Clear' },
  'cart.empty': { zh: '购物车空空如也', en: 'Your cart is empty' },
  'cart.go_shop': { zh: '去挑选蛋糕 →', en: 'Browse Cakes →' },
  'cart.total': { zh: '合计', en: 'Total' },
  'cart.remark_placeholder': { zh: '添加备注（如：忌口、配送时间、贺卡内容等）', en: 'Add a note (e.g. dietary needs, pickup time, card message)' },
  'cart.order': { zh: '订单', en: 'Order' },
  'cart.copy_confirm': { zh: '请扫描上方二维码或搜索微信号添加客服确认订单 ❤️', en: 'Please scan the QR code above or search the WeChat ID to confirm your order ❤️' },
  'cart.checkout': { zh: '立即下单 · 复制订单信息', en: 'Place Order · Copy Order Info' },
  'cart.copied': { zh: '已复制订单信息！', en: 'Order info copied!' },
  'cart.footer': { zh: '点击后自动复制订单信息，请打开微信联系客服粘贴确认', en: 'Order info will be copied. Please paste it to our WeChat customer service to confirm.' },
  'cart.note': { zh: '备注', en: 'Note' },

  // ContactModal
  'contact.title': { zh: '联系我们', en: 'Contact Us' },
  'contact.subtitle': { zh: '仅支持上门自提，请提前联系', en: 'Pickup only, please contact in advance' },
  'contact.qr_title': { zh: '扫码添加客服微信', en: 'Scan to add on WeChat' },
  'contact.qr_hint': { zh: '长按识别二维码', en: 'Long press to scan QR code' },
  'contact.qr_placeholder': { zh: '请上传微信二维码', en: 'Please upload WeChat QR code' },
  'contact.search_id': { zh: '或搜索微信号', en: 'or search WeChat ID' },
  'contact.copy': { zh: '复制', en: 'Copy' },
  'contact.copied': { zh: '已复制', en: 'Copied!' },
  'contact.phone': { zh: '手机联系 (JJ)', en: 'Phone (JJ)' },
  'contact.phone_sms': { zh: '仅接短信，暂不方便接听电话，请短信留言', en: 'SMS only please — unable to take calls at the moment. Text us!' },
  'contact.address': { zh: '门店地址', en: 'Store Address' },

  // Footer
  'footer.brand': { zh: '多糖星球 Planet Sweets', en: 'Planet Sweets' },
  'footer.tagline': { zh: '新鲜手工 · 当日制作', en: 'Fresh Handmade · Made Daily' },

  // FAB
  'fab.view': { zh: '查看', en: 'View' },
};

// ── 工具函数 ──
export type Lang = 'zh' | 'en';

export function getCatName(id: number, lang: Lang): string {
  return CATEGORY_NAMES[id]?.[lang] ?? CATEGORY_NAMES[id]?.zh ?? '';
}

export function getCatDesc(id: number, lang: Lang): string {
  return CATEGORY_DESCRIPTIONS[id]?.[lang] ?? CATEGORY_DESCRIPTIONS[id]?.zh ?? '';
}

export function getCakeName(id: number, lang: Lang): string {
  return CAKE_NAMES[id]?.[lang] ?? CAKE_NAMES[id]?.zh ?? '';
}

export function getCakeDesc(id: number, lang: Lang): string {
  return CAKE_DESCRIPTIONS[id]?.[lang] ?? CAKE_DESCRIPTIONS[id]?.zh ?? '';
}

export function getTag(zhTag: string, lang: Lang): string {
  return TAGS[zhTag]?.[lang] ?? zhTag;
}

export function getUI(key: string, lang: Lang): string {
  return UI[key]?.[lang] ?? key;
}
