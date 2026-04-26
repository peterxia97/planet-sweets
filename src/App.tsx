import { useState } from 'react';
import { CartProvider, useCart } from './CartContext';
import { categories, cakes } from './data';
import Header from './components/Header';
import CakeCard from './components/CakeCard';
import CartDrawer from './components/CartDrawer';
import ContactModal from './components/ContactModal';
import { ShoppingCart } from 'lucide-react';

function Main() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? 1);
  const [cartOpen, setCartOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const { totalItems, totalPrice } = useCart();

  const activeCategory = categories.find(c => c.id === activeCategoryId);
  const filteredCakes = cakes.filter(c => c.categoryId === activeCategoryId && !c.hidden);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        onCartOpen={() => setCartOpen(true)}
        onContactOpen={() => setContactOpen(true)}
      />

      {/* 主体：左侧分类栏 + 右侧内容区 */}
      <div className="flex flex-1 pt-14">

        {/* ── 左侧分类导航（固定，全端常驻） ── */}
        <aside className="fixed top-14 left-0 bottom-0 w-[72px] sm:w-20 bg-white border-r border-gray-100 z-30 flex flex-col overflow-y-auto">
          {/* 顶部标签 */}
          <div className="py-2 text-center">
            <span className="text-[10px] text-gray-400 font-semibold tracking-widest">分类</span>
          </div>

          <nav className="flex flex-col gap-0.5 px-1 pb-4">
            {categories.map(cat => {
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`
                    relative flex flex-col items-center justify-center gap-0.5
                    w-full py-2.5 px-1 rounded-xl transition-all duration-200
                    ${isActive
                      ? 'bg-rose-50 text-rose-600'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }
                  `}
                >
                  {/* 激活指示条 */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-rose-500 rounded-r-full" />
                  )}
                  <span className="text-xl leading-none">{cat.icon}</span>
                  <span className="text-[10px] font-medium leading-tight text-center w-full px-0.5 break-words line-clamp-2">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── 右侧内容区 ── */}
        <main className="flex-1 ml-[72px] sm:ml-20 min-w-0 flex flex-col">

          {/* 横幅（手机端） */}
          <div className="mx-3 mt-3 rounded-2xl overflow-hidden bg-gradient-to-r from-rose-400 to-pink-500 px-5 py-4 relative lg:hidden">
            <img src="/logo.jpg" alt="" className="absolute right-3 bottom-2 w-16 h-16 object-contain opacity-20" />
            <p className="text-white/60 text-xs mb-0.5">Welcome to</p>
            <h2 className="text-xl font-bold text-white leading-tight">多糖星球</h2>
            <p className="text-white/80 text-sm">Planet Sweets</p>
          </div>

          {/* 下单须知 */}
          <div className="mx-3 mt-3 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3">
            <p className="text-amber-700 text-xs font-bold mb-1.5">📋 下单须知</p>
            <div className="space-y-1.5">
              <div className="flex gap-1.5">
                <span className="text-xs mt-0.5 flex-shrink-0">🎂</span>
                <p className="text-amber-700 text-xs leading-relaxed">除指定款式外，口味自选，盲盒样式噢～</p>
              </div>
              <div className="flex gap-1.5">
                <span className="text-xs mt-0.5 flex-shrink-0">🎨</span>
                <p className="text-amber-700 text-xs leading-relaxed">
                  来图定制因材料色彩会有些许差别，非100%还原。提前三天预定，无法接急单。上门自取Wandal，仅现金或人民币实时汇率转账。颜色为食用色素，介意请要求原色。
                </p>
              </div>
            </div>
          </div>

          {/* 当前分类标题 */}
          <div className="px-3 mt-4 mb-3 flex items-center gap-2">
            <span className="text-2xl">{activeCategory?.icon}</span>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-gray-800 leading-tight truncate">{activeCategory?.name}</h3>
              <p className="text-xs text-gray-400 truncate">{activeCategory?.description}</p>
            </div>
            <span className="ml-auto text-xs text-gray-400 bg-white px-2.5 py-1 rounded-full border border-gray-100 flex-shrink-0">
              {filteredCakes.length}款
            </span>
          </div>

          {/* 蛋糕网格 */}
          <div className="px-3 grid grid-cols-2 gap-2.5 pb-28">
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

          {/* Footer */}
          <footer className="bg-white border-t border-rose-50 py-5 px-4 text-center mt-auto">
            <p className="text-rose-400 font-semibold text-sm">🍰 多糖星球 Planet Sweets</p>
            <p className="text-gray-300 text-xs mt-1">新鲜手工 · 当日制作</p>
          </footer>
        </main>
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
