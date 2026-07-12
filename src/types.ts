export interface Cake {
  id: number;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  price6: number;       // 6 inch price
  price8: number;       // 8 inch price (0 = not available)
  singlePrice?: number; // single price (hides size selector)
  image: string;
  tag?: string;         // e.g. "热销", "新品"
  tagEn?: string;       // e.g. "Hot", "New"
  hidden?: boolean;     // set true to hide from frontend
  outOfStock?: boolean; // set true to show as sold out
  categoryId: number;
  alsoIn?: number[];    // additional category IDs
}

export interface Category {
  id: number;
  name: string;
  nameEn?: string;
  icon: string;
  description: string;
  descriptionEn?: string;
}

export interface CartItem {
  cake: Cake;
  quantity: number;
}
