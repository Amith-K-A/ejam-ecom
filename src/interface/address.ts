export interface Address {
    firstName: string;
    secondName: string;
    pin: number;
    phoneNumber: number;
    shippingAddress: string;
}

export interface AddressInterface {
    address: Address;
    setAddress(arg: Address): any;
    totalPrice: number;
  }
