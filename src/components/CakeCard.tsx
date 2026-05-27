import { Plus } from 'lucide-react';
import type { Cake } from '../types';
import { useCart } from '../CartContext';
import { useLanguage } from '../i18n/LanguageContext';

interface CakeCardProps {
  cake: Cake;
}

const tagColors: Record<string, string> = {
  '热销': 'bg-rose-500 text-white',
  'Hot': 'bg-rose-500 text-white',
  '新品': 'bg-emerald-500 text-white',
  'New': 'bg-emerald-500 text-white',
  '人气': 'bg-amber-500 text-white',
  'Popular': 'bg-amber-500 text-white',
  '定制': 'bg-purple-500 text-white',
  'Custom': 'bg-purple-500 text-white',
  '爆款': 'bg-orange-500 text-white',
  'Bestseller': 'bg-orange-500 text-white',
  '推荐': 'bg-blue-500 text-white',
  'Pick': 'bg-blue-500 text-white',
  '高价': 'bg-purple-500 text-white',
  'Premium': 'bg-purple-500 text-white',
  '秋日限定': 'bg-amber-600 text-white',
  'Autumn': 'bg-amber-600 text-white',
};

export default function CakeCard({ cake }: CakeCardProps) {
  const { addToCart, items } = useCart();
  const { tCakeName, tCakeDesc, tTag, t } = useLanguage();
  const cartItem = items.find(i => i.cake.id === cake.id);
  const isSinglePrice = !!cake.singlePrice;
  const defaultSize = isSinglePrice ? 'single' : (cartItem ? (cartItem.cake.selectedSize as '6' | '8') || '6' : '6');

  const handleAdd = (size: '6' | '8' | 'single', e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ ...cake, selectedSize: size });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Image - 方形容器，图片完整显示 */}
      <div className="relative bg-gray-50" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://via.placeholder.com/400/fda4af/ffffff?text=${encodeURIComponent(cake.name)}`;
          }}
        />
        {cake.tag && (
          <span className={`absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${tagColors[tTag(cake.tag)] || 'bg-gray-500 text-white'}`}>
            {tTag(cake.tag)}
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
        <h3 className="font-semibold text-gray-800 text-xs leading-snug">{tCakeName(cake.id)}</h3>
        {cake.description && (
          <p className="text-[10px] text-gray-400 mt-0.5 leading-tight line-clamp-2">{tCakeDesc(cake.id)}</p>
        )}

        {isSinglePrice ? (
          /* 单一价格：直接显示价格，无尺寸选择 */
          <div className="mt-2 flex items-center justify-between">
            <span className="text-rose-600 font-bold text-sm">${cake.singlePrice}</span>
            <span className="text-[10px] text-gray-400">{t('cake.each')}</span>
          </div>
        ) : (
          /* 双尺寸价格选择 */
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
          onClick={(e) => handleAdd(defaultSize as '6' | '8' | 'single', e)}
          className="mt-2 w-full flex items-center justify-center gap-1 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white text-xs font-medium py-2 rounded-xl transition-all"
        >
          <Plus className="w-3 h-3" />
          {t('cake.add')}
        </button>
      </div>
    </div>
  );
}

