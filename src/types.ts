export interface Cake {
  id: number;
  name: string;
  description: string;
  price6: number;       // 6寸价格
  price8: number;       // 8寸价格（0表示无此规格）
  singlePrice?: number; // 不区分尺寸的单价（有此字段则隐藏尺寸选择）
  image: string;
  tag?: string;         // 如"热销"、"新品"等
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface CartItem {
  cake: Cake;
  quantity: number;
}
