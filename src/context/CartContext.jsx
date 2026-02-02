import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'startkit-cart';

const loadCart = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage full or unavailable
  }
};

function cartReducer(state, action) {
  let newState;
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.findIndex(
        item => item.kitId === action.payload.kitId && item.tier === action.payload.tier
      );
      if (existingIndex >= 0) {
        newState = state.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newState = [...state, { ...action.payload, quantity: 1 }];
      }
      break;
    }
    case 'REMOVE_ITEM': {
      newState = state.filter(
        item => !(item.kitId === action.payload.kitId && item.tier === action.payload.tier)
      );
      break;
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        newState = state.filter(
          item => !(item.kitId === action.payload.kitId && item.tier === action.payload.tier)
        );
      } else {
        newState = state.map(item =>
          item.kitId === action.payload.kitId && item.tier === action.payload.tier
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
      break;
    }
    case 'CLEAR_CART':
      newState = [];
      break;
    default:
      return state;
  }
  saveCart(newState);
  return newState;
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  const addItem = (kit, tierName, tierPrice) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        kitId: kit.id,
        kitName: kit.name,
        kitIcon: kit.icon,
        tier: tierName,
        price: tierPrice,
      }
    });
  };

  const removeItem = (kitId, tier) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { kitId, tier } });
  };

  const updateQuantity = (kitId, tier, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { kitId, tier, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
