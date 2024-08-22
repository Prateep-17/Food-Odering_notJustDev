// import { Children, PropsWithChildren, createContext, useContext, useState } from "react";
// import { CartItem, Product } from '../app/types';

// type CartType = {
//   items: CartItem[];
//   addItem: (product: Product, size: CartItem['size']) => void;
//   updateQuantity: (itemId: string, amount: -1|1 ) => void;
//   total: number
// };
// export const CartContext = createContext<CartType>({
//     items: [],
//     addItem: () => {},
//     updateQuantity: () => {},
//     total: 0
// })

// const CartProvider = ({children} :PropsWithChildren) => {
//     const [items, setItems] = useState<CartItem[]>([])

//     const addItem = (product: Product, size: CartItem["size"]) =>{
//         const existingItem = items.find(
//             (item) => item.product.id === product.id && item.size === size
//           );
//           if (existingItem) {
//             updateQuantity(existingItem.id, 1);
//             return;
//           }
      
//         const newCartItem :CartItem = {
//             id: Math.random().toString(),
//             product,
//             product_id: product.id,
//             size,
//             quantity: 1
//         }
//         setItems([...items, newCartItem])
//     }
//     const updateQuantity = (itemId: string, amount: -1|1) =>{
//         const updatedItems = items.map((data) => {
//             if(data.id == itemId)
//                 data.quantity += amount 
//             return data
//         }).filter((data) => data.quantity > 0)
//         setItems(updatedItems)
//     }
//     const total = items.reduce((sum, item)=> (sum += item.product.price * item.quantity),0)
//     return(
//     <CartContext.Provider value={{items, addItem, updateQuantity, total}}>
//         {children}
//     </CartContext.Provider>
//     )
// }

// export default CartProvider

// export const useCart= () => useContext(CartContext)

import { store } from "./store";
import { Provider } from "react-redux";

export function ReduxProvider({ children }: any) {
    return <Provider store={store}>
          {children}
    </Provider>
}
