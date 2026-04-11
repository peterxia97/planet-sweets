import { X, Plus, Minus, Trash2, ShoppingBag, ChevronRight, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../CartContext';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onContact: () => void;
}

export default function CartDrawer({ open, onClose, onContact }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems, remark, setRemark } = useCart();
  const [copied, setCopied] = useState(false);

  const handleCheckout = async () => {
    if (items.length === 0) return;

    // 生成订单文本
    const orderLines = items.map(item => {
      if (item.cake.singlePrice) {
        return `${item.cake.name} x${item.quantity} - $${item.cake.singlePrice * item.quantity}`;
      }
      const size = item.cake.selectedSize || '6';
      const price = size === '8' ? item.cake.price8 : item.cake.price6;
      return `${item.cake.name} ${size}寸 x${item.quantity} - $${price * item.quantity}`;
    });

    const orderText = [
      '🍰 多糖星球 Planet Sweets 订单',
      '━━━━━━━━━━━━━━━━',
      ...orderLines,
      '━━━━━━━━━━━━━━━━',
      `💰 合计：$${totalPrice.toFixed(2)}`,
      remark ? `📝 备注：${remark}` : '',
      '━━━━━━━━━━━━━━━━',
      '请扫描上方二维码或搜索微信号添加客服确认订单 ❤️',
    ].filter(Boolean).join('\n');

    try {
      await navigator.clipboard.writeText(orderText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: 打开联系我们
      onClose();
      onContact();
    }

    setTimeout(() => {
      onClose();
      onContact();
    }, 500);
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-rose-500" />
            <h2 className="text-lg font-bold text-gray-800">购物车</h2>
            {totalItems > 0 && (
              <span className="bg-rose-100 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}件
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-gray-400 hover:text-rose-500 transition-colors"
              >
                清空
              </button>
            )}
            <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-400">
              <ShoppingBag className="w-16 h-16 text-rose-100" />
              <p className="text-sm">购物车空空如也</p>
              <button
                onClick={onClose}
                className="text-rose-500 text-sm font-medium hover:underline"
              >
                去挑选蛋糕 →
              </button>
            </div>
          ) : (
            items.map(item => {
              const isSingle = !!item.cake.singlePrice;
              const size = item.cake.selectedSize || '6';
              const price = isSingle ? item.cake.singlePrice! : (size === '8' ? item.cake.price8 : item.cake.price6);
              return (
                <div key={`${item.cake.id}-${size}`} className="flex gap-3 bg-rose-50/50 rounded-xl p-3">
                  <img
                    src={item.cake.image}
                    alt={item.cake.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/80/fda4af/ffffff?text=Cake`;
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-semibold text-gray-800 text-sm leading-snug">{item.cake.name}</h4>
                      <button
                        onClick={() => removeFromCart(item.cake.id, size)}
                        className="p-1 hover:bg-rose-100 rounded-full transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-rose-500" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      {!isSingle && (
                        <span className="text-xs bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded">{size}寸</span>
                      )}
                      <span className="text-rose-500 font-bold text-sm">${price}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.cake.id, size, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-rose-200 flex items-center justify-center hover:bg-rose-100 transition-colors"
                        >
                          <Minus className="w-3 h-3 text-rose-500" />
                        </button>
                        <span className="text-sm font-semibold text-gray-700 w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cake.id, size, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center hover:bg-rose-600 transition-colors"
                        >
                          <Plus className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-4 space-y-3">
            {/* 备注输入 */}
            <div>
              <textarea
                placeholder="添加备注（如：忌口、配送时间、贺卡内容等）"
                value={remark}
                onChange={e => setRemark(e.target.value)}
                rows={2}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm resize-none focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-colors"
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">合计</span>
              <span className="text-2xl font-bold text-rose-500">${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>已复制订单信息！</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>立即下单 · 复制订单信息</span>
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-400">点击后自动复制订单信息，请打开微信联系客服粘贴确认</p>
          </div>
        )}
      </div>
    </>
  );
}
