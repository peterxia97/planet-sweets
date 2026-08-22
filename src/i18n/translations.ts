// ═══════════════════════════════════════════
//  Planet Sweets — 双语翻译字典
// ═══════════════════════════════════════════

// ── 分类名称 ──
export const CATEGORY_NAMES: Record<number, { zh: string; en: string }> = {
  13: { zh: '春日甄选', en: 'Spring Selection' },
  1:  { zh: '水果蛋糕', en: 'Fresh Fruit Cakes' },
  2:  { zh: '口味蛋糕', en: 'Flavor Cakes' },
  3:  { zh: '巴斯克', en: 'Basque Cheesecakes' },
  4:  { zh: '裸蛋糕', en: 'Naked Cakes' },
  7:  { zh: '特定样式', en: 'Special Themes' },
  8:  { zh: '夹心加料（一层）', en: 'Extra Filling (1 Layer)' },
  9:  { zh: '异形加收', en: 'Special Shapes' },
  10: { zh: '蛋糕配件', en: 'Cake Accessories' },
  11: { zh: '特殊工艺', en: 'Special Techniques' },
};

// ── 分类描述 ──
export const CATEGORY_DESCRIPTIONS: Record<number, { zh: string; en: string }> = {
  13: { zh: '春日限定 清新治愈', en: 'Spring limited, fresh & delightful' },
  1:  { zh: '新鲜水果 自然甜美', en: 'Fresh fruit, naturally sweet' },
  2:  { zh: '多种口味 丰富夹心', en: 'Multiple flavors, rich fillings' },
  3:  { zh: '焦香浓郁 绵密丝滑', en: 'Rich caramelized, velvety smooth' },
  4:  { zh: '简约清新 水果本味', en: 'Simple & fresh, natural fruit taste' },
  7:  { zh: '专属主题 独特造型', en: 'Unique themed designs' },
  8:  { zh: '自选夹心 增添风味', en: 'Choose your filling, extra flavor' },
  9:  { zh: '特殊造型 额外加收', en: 'Special shapes, additional charge' },
  10: { zh: '精致配件 生日必备', en: 'Delicate accessories, birthday essentials' },
  11: { zh: '特殊工艺 个性定制', en: 'Special techniques, personalized' },
};

// ── 蛋糕名称 ──
export const CAKE_NAMES: Record<number, { zh: string; en: string }> = {
  // 春日甄选
  1303: { zh: '龙井青梨蛋糕', en: 'Longjing Pear Cake' },
  1305: { zh: '薄荷曼波绿蛋糕', en: 'Mint Mambo Green Cake' },
  1306: { zh: '椰香菠萝蛋糕', en: 'Coconut Pineapple Cake' },
  // 水果蛋糕
  101: { zh: '草莓奶油裱花蛋糕', en: 'Strawberry Fresh Cream Decorated Cake' },
  102: { zh: '蓝莓奶油裱花蛋糕', en: 'Blueberry Fresh Cream Decorated Cake' },
  104: { zh: '黑莓果酱奶油裱花蛋糕', en: 'Blackberry Jam Fresh Cream Decorated Cake' },
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
  210: { zh: '纯巧克力蛋糕', en: 'Pure Chocolate Cake' },
  211: { zh: '紫薯芋泥蛋糕', en: 'Purple Yam & Taro Cake' },
  212: { zh: '焦糖杏仁草莓', en: 'Caramel Almond Strawberry' },
  213: { zh: '黑森林蛋糕', en: 'Black Forest Cake' },
  1304: { zh: '栗子蛋糕', en: 'Chestnut Cake' },
  // 巴斯克
  302: { zh: '原味草莓酸奶巴斯克', en: 'Strawberry Yogurt Basque' },
  303: { zh: '原味蓝莓酸奶巴斯克', en: 'Blueberry Yogurt Basque' },
  304: { zh: '原味香草酸奶巴斯克', en: 'Vanilla Yogurt Basque' },
  305: { zh: '抹茶酸奶巴斯克', en: 'Matcha Yogurt Basque' },
  306: { zh: '抹茶奶油巴斯克', en: 'Matcha Cream Basque' },
  307: { zh: '原味莓果奶油巴斯克', en: 'Mixed Berry Cream Basque' },
  308: { zh: '柠檬巴斯克', en: 'Lemon Basque' },
  309: { zh: '榴莲巴斯克', en: 'Durian Basque' },
  // 裸蛋糕
  401: { zh: '红丝绒草莓裸蛋糕', en: 'Red Velvet Strawberry Naked Cake' },
  402: { zh: '原味奶油水果裸蛋糕', en: 'Original Cream Fruit Naked Cake' },
  // 特定样式
  701: { zh: '蛋壳', en: 'Eggshell' },
  702: { zh: '雪顶草莓', en: 'Snowcap Strawberry' },
  703: { zh: '经典儿童彩针', en: 'Classic Kids Sprinkle' },
  705: { zh: '蝴蝶款式', en: 'Butterfly Style' },
  706: { zh: '日月同辉', en: 'Sun & Moon' },
  707: { zh: '许愿池', en: 'Wishing Pool' },
  708: { zh: '拼色蛋糕', en: 'Color Block Cake' },
  709: { zh: '小雏菊蛋糕', en: 'Daisy Cake' },
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
  1002: { zh: '铅笔蜡烛', en: 'Pencil Candles' },
  1003: { zh: '生日皇冠', en: 'Birthday Crown' },
  1004: { zh: '蛋糕餐具', en: 'Cake Tableware Set' },
  1005: { zh: '蝴蝶结蜡烛', en: 'Bow Candles' },
  // 特殊工艺
  1101: { zh: '芝士转印', en: 'Cheese Transfer' },
  1102: { zh: '翻糖', en: 'Fondant' },
  1103: { zh: '奶油霜小动物', en: 'Buttercream Animals' },
};

// ── 蛋糕描述 ──
export const CAKE_DESCRIPTIONS: Record<number, { zh: string; en: string }> = {
  1303: { zh: '夹心：茉莉绿茶奶冻+新鲜梨块。淡淡龙井茶香搭配清甜梨肉，入口清雅，是属于春天的味道。', en: 'Filling: jasmine green tea milk pudding + fresh pear chunks. Subtle Longjing tea aroma paired with sweet pear, a refreshing springtime treat.' },
  1305: { zh: '夹心：酸奶跳跳珠+薄荷奶冻。清新薄荷绿配酸甜跳跳珠，俏皮清新，夏日必试。', en: 'Filling: yoghurt popping boba + mint milk pudding. Refreshing minty green with tangy popping boba — playful, fresh, and a summer favourite.' },
  1306: { zh: '夹心：椰子奶冻+手作菠萝果酱。椰香清甜碰撞菠萝果香，热带风味十足。', en: 'Filling: coconut milk pudding + homemade pineapple jam. Sweet coconut meets tangy pineapple — a tropical escape in every bite.' },
  101: { zh: '新鲜草莓搭配轻盈奶油裱花，粉嫩甜美，适合生日、聚会。', en: 'Fresh strawberries with light cream piping, sweet and pink, perfect for birthdays and parties.' },
  102: { zh: '颗颗饱满蓝莓点缀，清爽酸甜，口感层次丰富。', en: 'Plump blueberries, refreshingly sweet and tangy with rich texture.' },
  104: { zh: '进口黑莓点缀，深邃紫红色泽，酸甜开胃。', en: 'Imported blackberries, deep purple-red color, tangy and appetizing.' },
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
  210: { zh: '可可戚风+特调奶油+薄脆夹心+混合坚果', en: 'Cocoa chiffon + special cream + crispy filling + mixed nuts' },
  211: { zh: '夹心：奶香紫薯芋泥（限定食材，建议提前5天预定）', en: 'Filling: creamy purple yam & taro (limited, order 5 days ahead)' },
  212: { zh: '甜中带咸的焦糖与草莓完美搭配', en: 'Sweet & salty caramel perfectly paired with strawberries' },
  213: { zh: '可可戚风+特调奶油+糖渍樱桃', en: 'Cocoa chiffon + special cream + candied cherries' },
  1304: { zh: '夹心：栗子蓉+黄油薄脆。绵密栗子蓉层叠黄油薄脆，秋意浓香与酥脆交融，温润回甘。', en: 'Filling: chestnut puree + butter crunch. Silky chestnut paste layered with crispy butter crunch, autumnal warmth in every bite.' },
  302: { zh: '草莓酸奶香气，酸甜可口', en: 'Strawberry yogurt aroma, sweet and tangy' },
  303: { zh: '蓝莓酸奶香气，清爽自然', en: 'Blueberry yogurt aroma, fresh and natural' },
  304: { zh: '香草酸奶香气，经典绵密', en: 'Vanilla yogurt aroma, classic and creamy' },
  305: { zh: '宇治抹茶粉，香浓微苦', en: 'Uji matcha powder, rich with subtle bitterness' },
  306: { zh: '抹茶搭配奶香，回味悠长', en: 'Matcha with creamy milk, long-lasting aftertaste' },
  307: { zh: '混合莓果，香甜浓郁', en: 'Mixed berries, sweet and rich' },
  308: { zh: '柠檬清香，酸甜平衡', en: 'Lemon fragrance, perfectly balanced sweet & sour' },
  309: { zh: '泰国金枕榴莲果肉，香气浓郁霸道，榴莲爱好者的终极享受。', en: 'Thai Monthong durian flesh, intensely aromatic — the ultimate indulgence for durian lovers.' },
  401: { zh: '红丝绒蛋糕配新鲜草莓，经典搭配', en: 'Red velvet cake with fresh strawberries, a classic match' },
  402: { zh: '时令水果搭配（不指定水果种类）', en: 'Seasonal fruit mix (variety not specified)' },
  701: { zh: '蛋壳造型，创意十足', en: 'Eggshell design, super creative' },
  702: { zh: '雪顶造型配新鲜草莓，清新可爱', en: 'Snowcap design with fresh strawberries, fresh and cute' },
  703: { zh: '七彩彩针装饰，缤纷喜庆', en: 'Rainbow sprinkle decoration, colorful and festive' },
  705: { zh: '轻盈蝴蝶造型，浪漫精致', en: 'Delicate butterfly design, romantic and elegant' },
  706: { zh: '日月星辰造型，梦幻特别款', en: 'Sun, moon and stars design, dreamy and special' },
  707: { zh: '三层水池蛋糕，自选口味夹心。可在下单时备注口味偏好（参见夹心加料类目）。', en: 'Three-tier pool design with customisable filling. Please specify your preferred flavour in the order notes (see Extra Filling category).' },
  708: { zh: '多色拼色造型，夹心可自选（价格需与自由星人确认）。下单请备注偏好口感和颜色搭配。', en: 'Multi-colour block design with customisable filling (price subject to final confirmation). Please leave your colour and flavour preferences in the order notes.' },
  709: { zh: '清新小雏菊裱花造型，夹心可自选（价格需与自由星人确认）。下单请备注偏好口感和花色。', en: 'Fresh little-daisy piping design with customisable filling (price subject to final confirmation). Please leave your flavour and colour preferences in the order notes.' },
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
  1002: { zh: '彩色铅笔蜡烛', en: 'Colorful pencil candles' },
  1003: { zh: '闪耀生日皇冠', en: 'Sparkling birthday crown' },
  1004: { zh: '一套5人份（含刀叉盘等）', en: '5-piece set (plates, forks, etc.)' },
  1005: { zh: '一盒6个', en: '6 per box' },
  1101: { zh: '按图定制，每图$15', en: 'Custom per design, $15 each' },
  1102: { zh: '翻糖装饰，每件$15', en: 'Fondant decoration, $15 each' },
  1103: { zh: '可爱奶油霜小动物，每件$15', en: 'Cute buttercream animals, $15 each' },
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
  '冬日限定': { zh: '冬日限定', en: 'Winter' },
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
  'notice.blind_box': { zh: '除指定款式外，口味自选，盲盒样式噢～', en: 'Except for specified designs, choose your favorite flavor and leave the design to us — it\'ll be a surprise!' },
  'notice.custom': { zh: '提前一周预约。南边Wandal上门自取，仅收现金或人民币转账。', en: 'Please order 1 week in advance. Pickup at Wandal (South side). Cash or RMB transfer only.' },

  // Category header
  'category.items': { zh: '款', en: ' items' },
  'category.empty': { zh: '该分类暂无商品', en: 'No items in this category yet' },

  // CakeCard
  'cake.size6': { zh: '6寸', en: '6 inch' },
  'cake.size8': { zh: '8寸', en: '8 inch' },
  'cake.each': { zh: '每份', en: 'each' },
  'cake.add': { zh: '加入购物车', en: 'Add to Cart' },
  'cake.soldOut': { zh: '缺货', en: 'Sold Out' },

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
  'cart.checkout': { zh: '复制订单 · 发微信确认', en: 'Copy & Send to WeChat' },
  'cart.copied': { zh: '已复制！请打开微信粘贴发送', en: 'Copied! Paste to WeChat now' },
  'cart.footer': { zh: '本网站不提供在线付款。点击按钮复制订单信息后，请打开微信粘贴给客服确认订单、沟通付款和取货时间。', en: 'No online payment on this site. After copying, paste your order to our WeChat customer service to confirm, arrange payment, and schedule pickup.' },
  'cart.note': { zh: '备注', en: 'Note' },

  // GuestbookModal
  'guestbook.title': { zh: '留言板', en: 'Guestbook' },
  'guestbook.subtitle': { zh: '欢迎留下您的意见或建议，完全匿名', en: 'Share your thoughts anonymously — we read every message!' },
  'guestbook.nickname': { zh: '昵称（可选）', en: 'Nickname (optional)' },
  'guestbook.message': { zh: '留言内容', en: 'Your Message' },
  'guestbook.placeholder': { zh: '说说您的想法...', en: 'Tell us what you think...' },
  'guestbook.submit': { zh: '提交留言', en: 'Submit Message' },
  'guestbook.error_empty': { zh: '请输入留言内容', en: 'Please enter a message' },
  'guestbook.error_submit': { zh: '提交失败，请稍后再试', en: 'Failed to submit, please try again' },
  'guestbook.error_fetch': { zh: '加载失败，请稍后再试', en: 'Failed to load, please try again' },
  'guestbook.thanks': { zh: '感谢您的留言！', en: 'Thank You!' },
  'guestbook.thanks_sub': { zh: '我们会认真阅读每一条留言 ❤️', en: 'We read every message ❤️' },
  'guestbook.leave_another': { zh: '再写一条', en: 'Leave another message' },
  'guestbook.admin_hint': { zh: '店主入口', en: 'Admin' },
  'guestbook.admin_login': { zh: '管理员登录', en: 'Admin Login' },
  'guestbook.admin_desc': { zh: '请输入管理员密码查看留言', en: 'Enter admin password to view messages' },
  'guestbook.password': { zh: '密码', en: 'Password' },
  'guestbook.wrong_password': { zh: '密码错误', en: 'Incorrect password' },
  'guestbook.view_messages': { zh: '查看留言', en: 'View Messages' },
  'guestbook.admin_title': { zh: '留言管理', en: 'Message Management' },
  'guestbook.anonymous': { zh: '匿名', en: 'Anonymous' },
  'guestbook.no_messages': { zh: '暂无留言', en: 'No messages yet' },
  'guestbook.total': { zh: '共', en: 'Total: ' },

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
