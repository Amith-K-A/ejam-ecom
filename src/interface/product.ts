export interface Product {
  name: string;
  price: number;
  currency: string;
  description: string;
  id: number;
  imageUrl: string;
  qty: number;
  shippingPrice: number;
}

export interface ProductInterface {
  product: Product;
  isInCart: boolean;
  addToCart(args: Product): any;
}

export interface ProductListInterface {
  products: Product[];
  cartItems: [];
}
