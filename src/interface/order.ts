export interface CardDetails {
  number: Number;
  date: Number ;
  cvv: Number;
}

export interface Order {
  cardDetails: CardDetails;
  address: string;
  items: string;
}

export interface PlaceOrderInterface {
  address: any;
  totalPrice: number;
  items: any;
  clearCart(): any;
}
