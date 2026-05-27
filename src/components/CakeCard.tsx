import { Plus } from 'lucide-react';
import type { Cake } from '../types';
import { useCart } from '../CartContext';
import { useI18n } from '../i18n/I18nContext';
import { tagKeyMap } from '../i18n/translations';

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
  const { addToCart, items } = useCart();
  const { lang, t } = useI18n();
  const cartItem = items.find(i => i.cake.id === cake.id);
  const isSinglePrice = !!cake.singlePrice;

  const handleAdd = (size: '6' | '8' | 'single', e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ ...cake, selectedSize: size });
  };

  // Get display text based on language
  const displayName = lang === 'zh' ? cake.name : (cake.nameEn || cake.name);
  const displayDesc = lang === 'zh' ? cake.description : (cake.descriptionEn || cake.description);

  // Get display tag based on language
  let displayTag: string | undefined;
  if (cake.tag) {
    if (lang === 'en' && cake.tagEn) {
      displayTag = cake.tagEn;
    } else if (lang === 'zh' && cake.tag) {
      displayTag = cake.tag;
    } else {
      // Fallback: translate using key map
      const key = tagKeyMap[cake.tag];
      displayTag = key ? t(key) : cake.tag;
    }
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative bg-gray-50" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={cake.image}
          alt={displayName}
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://via.placeholder.com/400/fda4af/ffffff?text=${encodeURIComponent(displayName)}`;
          }}
        />
        {displayTag && (
          <span className="absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-rose-500 text-white">
            {displayTag}
          </span>
        )}
        {cartItem && (
          <div className="absolute top-2 right-2 bg-rose-500 text-white text-[10px] font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center px-1">
            {cartItem.quantity}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-2.5 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-xs leading-snug">{displayName}</h3>
        {displayDesc && (
          <p className="text-[10px] text-gray-400 mt-0.5 leading-tight line-clamp-2">{displayDesc}</p>
        )}

        {isSinglePrice ? (
          <div className="mt-2 flex items-center justify-between">
            <span className="text-rose-600 font-bold text-sm">${cake.singlePrice}</span>
            <span className="text-[10px] text-gray-400">{t('cake.perItem')}</span>
          </div>
        ) : (
          <div className="flex gap-1.5 mt-2">
            {cake.price6 > 0 && (
              <button
                onClick={(e) => handleAdd('6', e)}
                className="flex-1 border border-rose-200 rounded-lg py-1.5 text-center hover:bg-rose-50 transition-colors active:scale-95"
              >
                <span className="text-[10px] text-gray-400 block">{t('cake.size6')}</span>
                <span className="text-rose-600 font-bold text-xs">${cake.price6}</span>
              </button>
            )}
            {cake.price8 > 0 && (
              <button
                onClick={(e) => handleAdd('8', e)}
                className="flex-1 border border-rose-200 rounded-lg py-1.5 text-center hover:bg-rose-50 transition-colors active:scale-95"
              >
                <span className="text-[10px] text-gray-400 block">{t('cake.size8')}</span>
                <span className="text-rose-600 font-bold text-xs">${cake.price8}</span>
              </button>
            )}
          </div>
        )}

        {/* Add to Cart */}
        <button
          onClick={(e) => handleAdd('single' as '6' | '8' | 'single', e)}
          className="mt-2 w-full flex items-center justify-center gap-1 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white text-xs font-medium py-2 rounded-xl transition-all"
        >
          <Plus className="w-3 h-3" />
          {t('cake.addToCart')}
        </button>
      </div>
    </div>
  );
}
