import { useState } from 'react';
import { CartProvider, useCart } from './CartContext';
import { categories, cakes } from './data';
import Header from './components/Header';
import CakeCard from './components/CakeCard';
import CartDrawer from './components/CartDrawer';
import ContactModal from './components/ContactModal';
import { ShoppingCart, X } from 'lucide-react';

function Main() {
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, totalPrice } = useCart();

  const activeCategory = categories.find(c => c.id === activeCategoryId);
  const filteredCakes = cakes.filter(c => c.categoryId === activeCategoryId);

  const handleCategorySelect = (id: number) => {
    setActiveCategoryId(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onMenuOpen={() => setMenuOpen(true)}
        onCartOpen={() => setCartOpen(true)}
        onContactOpen={() => setContactOpen(true)}
      />

      {/* 左侧导航栏 - 固定展开 */}
      <aside
        className="fixed top-0 left-0 h-full w-44 bg-white shadow-xl z-50 overflow-y-auto
          lg:static lg:shadow-none lg:border-r lg:border-gray-100"
      >
        {/* Logo区域 */}
        <div className="flex items-center gap-2 px-3 py-4 border-b border-gray-100">
          <img src="/logo.jpg" alt="Planet Sweets" className="w-9 h-9 object-contain" />
          <div>
            <h2 className="text-sm font-bold text-rose-600 leading-tight">多糖星球</h2>
            <p className="text-[10px] text-gray-400">Planet Sweets</p>
          </div>
        </div>

        {/* 温馨提示（桌面端） */}
        <div className="mx-3 mt-3 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5 hidden lg:block">
          <p className="text-amber-700 text-[11px] font-medium leading-relaxed">
            所有图片均为参考，非100%还原。仅限 Wandal 上门自提，不接急单，请提前一周联系。
          </p>
        </div>

        {/* 分类列表 */}
        <nav className="py-3">
          <p className="px-4 text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-2">分类</p>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors
                ${activeCategoryId === cat.id
                  ? 'bg-rose-50 text-rose-600 border-r-2 border-rose-500'
                  : 'text-gray-600 hover:bg-gray-50 border-r-2 border-transparent'
                }`}
            >
              <span className="text-lg flex-shrink-0">{cat.icon}</span>
              <span className="text-sm font-medium truncate">{cat.name}</span>
            </button>
          ))}
        </nav>

        {/* 侧边栏底部（桌面端） */}
        <div className="mt-auto px-4 py-4 border-t border-gray-100 hidden lg:block">
          <p className="text-xs text-gray-400 text-center">支持澳币现金 / 支付宝汇率转账</p>
        </div>
      </aside>

      {/* 主内容区 */}
      <div className="ml-44 lg:ml-52 pt-14 min-h-screen flex flex-col">
        {/* 横幅（仅手机端） */}
        <div className="mx-3 mt-3 rounded-2xl overflow-hidden bg-gradient-to-r from-rose-400 to-pink-500 px-5 py-5 relative lg:hidden">
          <img src="/logo.jpg" alt="" className="absolute right-3 bottom-3 w-20 h-20 object-contain opacity-20" />
          <p className="text-white/60 text-xs mb-0.5">Welcome to</p>
          <h2 className="text-2xl font-bold text-white leading-tight">多糖星球</h2>
          <p className="text-white/80 text-sm">Planet Sweets</p>
        </div>

        {/* 温馨提示（仅手机端） */}
        <div className="mx-3 mt-3 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 lg:hidden">
          <p className="text-amber-700 text-xs font-medium leading-relaxed">
            ⚠️ <span className="font-bold">温馨提示</span>：所有图片均为参考，非100%还原。仅限上门自提，地址在 Wandal。不接急单，请至少提前一周联系。支持澳币现金或支付宝实时汇率人民币转账。颜色为食用色素，介意请要求原色。
          </p>
        </div>

        {/* 当前分类标题 */}
        <div className="px-4 mt-4 mb-3 flex items-center gap-2">
          <span className="text-2xl">{activeCategory?.icon}</span>
          <div>
            <h3 className="text-base font-bold text-gray-800 leading-tight">{activeCategory?.name}</h3>
            <p className="text-xs text-gray-400">{activeCategory?.description}</p>
          </div>
          <span className="ml-auto text-xs text-gray-400 bg-white px-2.5 py-1 rounded-full border border-gray-100 flex-shrink-0">
            {filteredCakes.length}款
          </span>
        </div>

        {/* 蛋糕网格 */}
        <div className="px-3 grid grid-cols-2 gap-2.5 pb-24">
          {filteredCakes.map(cake => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>

        {filteredCakes.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🍰</p>
            <p className="text-sm">该分类暂无商品</p>
          </div>
        )}

        {/* Footer - 精简（仅手机端） */}
        <footer className="bg-white border-t border-rose-50 py-5 px-4 text-center mt-auto lg:hidden">
          <p className="text-rose-400 font-semibold text-sm">🍰 多糖星球 Planet Sweets</p>
          <p className="text-gray-300 text-xs mt-1">新鲜手工 · 当日制作</p>
        </footer>
      </div>

      {/* Bottom Cart FAB */}
      {totalItems > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-rose-500 text-white px-5 py-3 rounded-full shadow-lg shadow-rose-300 flex items-center gap-2 font-semibold text-sm active:scale-95 transition-transform"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{totalItems}件 · ${totalPrice.toFixed(0)}</span>
          <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-xs">查看</span>
        </button>
      )}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onContact={() => setContactOpen(true)}
      />

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Main />
    </CartProvider>
  );
}

export default App;
