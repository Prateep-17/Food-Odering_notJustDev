import products from "./assets/products";

export type Product = {
    id: number;
    image: string | null;
    name: string;
    price: number;
  };
  
  export type PizzaSize = 'S' | 'M' | 'L' | 'XL';
  
  export type CartItem = {
    id: string;
    product: Product;
    product_id: number;
    size: PizzaSize;
    quantity: number;
  };
  
  export const OrderStatusList: OrderStatus[] = [
    'New',
    'Cooking',
    'Delivering',
    'Delivered',
  ];
  
  export type OrderStatus = 'New' | 'Cooking' | 'Delivering' | 'Delivered';
  
  export type Order = {
    id: number;
    created_at: string;
    total: number;
    user_id: string;
    status: OrderStatus;
  
    order_items?: OrderItem[];
  };
  
  export type OrderItem = {
    id: number;
    product_id: number;
    products: Product;
    order_id: number;
    size: PizzaSize;
    quantity: number;
  };
  
  export type Profile = {
    id: string;
    group: string;
  };

  export type Credentials = {
    userName: string,
    password: string
  }

  export const findName = (pId :any) => {
    const obj = products.find((data :any)=> data.id == pId)
    return obj?.name
  }

  export const API_ENDPOINT = 'http://10.0.2.2:3000';