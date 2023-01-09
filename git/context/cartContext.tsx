import { createContext, ReactNode, useContext, useState } from "react";

type cartProviderProps = {
  children: ReactNode;
};

type cartContect = {
  getItemQuantity: (id: number) => number;
  removeFromCart: (id: number) => void;
};

type cartItem = {
  id: number;
  quantity: number;
};

const cartContext = createContext({});

export function useCart() {
  return useContext(cartContext);
}

export function CartProvider({ children }: cartProviderProps) {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  
  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  return <cartContext.Provider value={{getItemQuantity}}>{children}</cartContext.Provider>;
  
}
