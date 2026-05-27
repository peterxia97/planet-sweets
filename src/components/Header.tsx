import { ShoppingCart } from 'lucide-react';
import { useCart } from '../CartContext';
import { useI18n } from '../i18n/I18nContext';

interface HeaderProps {
  onCartOpen: () => void;
  onContactOpen: () => void;
}

export default function Header({ onCartOpen, onContactOpen }: HeaderProps) {
  const { totalItems } = useCart();
  const { lang, setLang, t } = useI18n();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100">
      <div className="flex items-center justify-between px-4 h-14 ml-[72px] sm:ml-20">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-0">
          <img src="/logo.jpg" alt="Planet Sweets" className="w-8 h-8 object-contain flex-shrink-0" />
          <div className="min-w-0">
            <h1 className="text-base font-bold text-rose-600 leading-tight truncate">
              {lang === 'zh' ? '多糖星球' : t('header.planetSweets')}
            </h1>
            <p className="text-[10px] text-gray-400 leading-tight">Planet Sweets</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Language Toggle */}
          <div className="flex bg-gray-100 rounded-full p-0.5">
            <button
              onClick={() => setLang('zh')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                lang === 'zh'
                  ? 'bg-white text-rose-600 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              中
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                lang === 'en'
                  ? 'bg-white text-rose-600 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={onContactOpen}
            className="flex items-center justify-center w-9 h-9 rounded-full text-rose-600 hover:bg-rose-50 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          <button
            onClick={onCartOpen}
            className="relative flex items-center justify-center w-9 h-9 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"
          >
            <ShoppingCart className="w-4 h-4 text-white" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-amber-400 text-white text-[10px] rounded-full flex items-center justify-center px-0.5 font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
