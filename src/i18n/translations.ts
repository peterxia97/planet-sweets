export type Lang = 'zh' | 'en';

export type TranslationKey =
  // Header
  | 'header.categories'
  | 'header.planetSweets'
  // Sidebar
  | 'sidebar.orderNotes'
  | 'sidebar.orderNotes1'
  | 'sidebar.orderNotes2'
  | 'sidebar.categories'
  | 'sidebar.paymentInfo'
  // Banner
  | 'banner.welcome'
  | 'banner.tagline'
  // Category
  | 'category.items'
  // Cake Card
  | 'cake.addToCart'
  | 'cake.perItem'
  | 'cake.size6'
  | 'cake.size8'
  | 'cake.empty'
  // Tags
  | 'tag.autumn'
  | 'tag.hot'
  | 'tag.popular'
  | 'tag.bestSeller'
  | 'tag.premium'
  | 'tag.new'
  | 'tag.custom'
  | 'tag.recommended'
  // Cart
  | 'cart.title'
  | 'cart.clear'
  | 'cart.empty'
  | 'cart.browse'
  | 'cart.note'
  | 'cart.total'
  | 'cart.checkout'
  | 'cart.copied'
  | 'cart.copyHint'
  | 'cart.itemUnit'
  | 'cart.sizeLabel'
  // Order text (generated)
  | 'order.title'
  | 'order.total'
  | 'order.note'
  | 'order.prompt'
  // Contact Modal
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.scanQR'
  | 'contact.longPress'
  | 'contact.orSearch'
  | 'contact.copy'
  | 'contact.copied'
  | 'contact.storeAddress'
  // Footer
  | 'footer.tagline';

const zh: Record<TranslationKey, string> = {
  'header.categories': '分类',
  'header.planetSweets': '多糖星球',
  'sidebar.orderNotes': '下单须知',
  'sidebar.orderNotes1': '除指定款式外，口味自选，盲盒样式噢～',
  'sidebar.orderNotes2': '来图定制因材料色彩会有些许差别，非100%还原。提前三天预定，无法接急单。上门自取Wandal，仅现金或人民币实时汇率转账。颜色为食用色素，介意请要求原色。',
  'sidebar.categories': '分类',
  'sidebar.paymentInfo': '支持澳币现金 / 支付宝汇率转账',
  'banner.welcome': 'Welcome to',
  'banner.tagline': 'Planet Sweets',
  'category.items': '款',
  'cake.addToCart': '加入购物车',
  'cake.perItem': '每份',
  'cake.size6': '6寸',
  'cake.size8': '8寸',
  'cake.empty': '该分类暂无商品',
  'tag.autumn': '秋日限定',
  'tag.hot': '热销',
  'tag.popular': '人气',
  'tag.bestSeller': '爆款',
  'tag.premium': '高价',
  'tag.new': '新品',
  'tag.custom': '定制',
  'tag.recommended': '推荐',
  'cart.title': '购物车',
  'cart.clear': '清空',
  'cart.empty': '购物车空空如也',
  'cart.browse': '去挑选蛋糕 →',
  'cart.note': '添加备注（如：忌口、配送时间、贺卡内容等）',
  'cart.total': '合计',
  'cart.checkout': '立即下单 · 复制订单信息',
  'cart.copied': '已复制订单信息！',
  'cart.copyHint': '点击后自动复制订单信息，请打开微信联系客服粘贴确认',
  'cart.itemUnit': '件',
  'cart.sizeLabel': '寸',
  'order.title': '多糖星球 Planet Sweets 订单',
  'order.total': '合计',
  'order.note': '备注',
  'order.prompt': '请扫描上方二维码或搜索微信号添加客服确认订单',
  'contact.title': '联系我们',
  'contact.subtitle': '仅支持上门自提，请提前联系',
  'contact.scanQR': '扫码添加客服微信',
  'contact.longPress': '长按识别二维码',
  'contact.orSearch': '或搜索微信号',
  'contact.copy': '复制',
  'contact.copied': '已复制',
  'contact.storeAddress': '门店地址',
  'footer.tagline': '新鲜手工 · 当日制作',
};

const en: Record<TranslationKey, string> = {
  'header.categories': 'Menu',
  'header.planetSweets': 'Planet Sweets',
  'sidebar.orderNotes': 'Order Notes',
  'sidebar.orderNotes1': 'Unless specified, flavor is random — blind box style!',
  'sidebar.orderNotes2': 'Custom orders may have slight color variations, not 100% identical. Order 3 days in advance, no rush orders. Pickup at Wandal, cash or RMB real-time exchange rate transfer only. Colors use food-grade dye; request natural color if concerned.',
  'sidebar.categories': 'Categories',
  'sidebar.paymentInfo': 'AUD Cash / Alipay Exchange Rate Accepted',
  'banner.welcome': 'Welcome to',
  'banner.tagline': 'Planet Sweets',
  'category.items': 'items',
  'cake.addToCart': 'Add to Cart',
  'cake.perItem': 'each',
  'cake.size6': '6 inch',
  'cake.size8': '8 inch',
  'cake.empty': 'No items in this category',
  'tag.autumn': 'Autumn Special',
  'tag.hot': 'Hot',
  'tag.popular': 'Popular',
  'tag.bestSeller': 'Best Seller',
  'tag.premium': 'Premium',
  'tag.new': 'New',
  'tag.custom': 'Custom',
  'tag.recommended': 'Recommended',
  'cart.title': 'Cart',
  'cart.clear': 'Clear',
  'cart.empty': 'Your cart is empty',
  'cart.browse': 'Browse Cakes →',
  'cart.note': 'Add note (e.g., dietary restrictions, delivery time, card message)',
  'cart.total': 'Total',
  'cart.checkout': 'Order Now · Copy Order Info',
  'cart.copied': 'Order Copied!',
  'cart.copyHint': 'Order info automatically copied. Open WeChat to contact us and paste to confirm.',
  'cart.itemUnit': 'item(s)',
  'cart.sizeLabel': 'inch',
  'order.title': 'Planet Sweets Order',
  'order.total': 'Total',
  'order.note': 'Note',
  'order.prompt': 'Please scan the QR code above or search WeChat ID to confirm your order',
  'contact.title': 'Contact Us',
  'contact.subtitle': 'Pickup only, please contact in advance',
  'contact.scanQR': 'Scan to add WeChat',
  'contact.longPress': 'Long press to scan QR code',
  'contact.orSearch': 'Or search WeChat ID',
  'contact.copy': 'Copy',
  'contact.copied': 'Copied',
  'contact.storeAddress': 'Store Address',
  'footer.tagline': 'Freshly Handmade · Made Daily',
};

export const translations = { zh, en };

/** Tag name -> TranslationKey mapping */
export const tagKeyMap: Record<string, TranslationKey> = {
  '秋日限定': 'tag.autumn',
  '热销': 'tag.hot',
  '人气': 'tag.popular',
  '爆款': 'tag.bestSeller',
  '高价': 'tag.premium',
  '新品': 'tag.new',
  '定制': 'tag.custom',
  '推荐': 'tag.recommended',
};
