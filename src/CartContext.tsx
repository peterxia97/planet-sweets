import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Cake } from './types';

export type CakeWithSize = Cake & { selectedSize?: '6' | '8' };

interface CartItem {
  cake: CakeWithSize;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  remark: string;
  addToCart: (cake: CakeWithSize) => void;
  removeFromCart: (cakeId: number, size: string) => void;
  updateQuantity: (cakeId: number, size: string, quantity: number) => void;
  clearCart: () => void;
  setRemark: (remark: string) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [remark, setRemark] = useState('');

  const getPrice = (cake: CakeWithSize) => {
    const size = cake.selectedSize === '8' ? '8' : '6';
    return size === '8' ? cake.price8 : cake.price6;
  };

  const getKey = (cake: CakeWithSize) => `${cake.id}-${cake.selectedSize || '6'}`;

  const addToCart = useCallback((cake: CakeWithSize) => {
    const key = getKey(cake);
    setItems(prev => {
      const existing = prev.find(item => getKey(item.cake) === key);
      if (existing) {
        return prev.map(item =>
          getKey(item.cake) === key
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { cake, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((cakeId: number, size: string) => {
    setItems(prev => prev.filter(item => {
      const itemSize = item.cake.selectedSize || '6';
      return !(item.cake.id === cakeId && itemSize === size);
    }));
  }, []);

  const updateQuantity = useCallback((cakeId: number, size: string, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(item => {
        const itemSize = item.cake.selectedSize || '6';
        return !(item.cake.id === cakeId && itemSize === size);
      }));
    } else {
      setItems(prev =>
        prev.map(item => {
          const itemSize = item.cake.selectedSize || '6';
          if (item.cake.id === cakeId && itemSize === size) {
            return { ...item, quantity };
          }
          return item;
        })
      );
    }
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setRemark('');
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + getPrice(item.cake) * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, remark, addToCart, removeFromCart, updateQuantity, clearCart, setRemark, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
