import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

// 買い物カゴの初期化
const initialState = {
  cartItems: [...cartItems],
  amount: cartItems.length,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      return {
        cartItems: [],
        amount: 0,
        total: 0,
      };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const newCartItems = state.cartItems.filter((item) => item.id !== itemId);
      return {
        cartItems: newCartItems,
        amount: newCartItems.length,
        total: 0,
      };
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount + 1;
      // state.cartItems = state.cartItems.map((item) => {
      //   if (item.id === itemId) {
      //     return {
      //       ...item,
      //       amount: item.amount + 1,
      //     };
      //   } else {
      //     return item;
      //   }
      // });
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.map((item) => {
        amount += item.amount;
        total += item.amount * item.price;
        return null;
      });
      state.amount = amount;
      state.total = total;
      // state.total = state.cartItems.reduce((prevTotal, item) => {
      //   return prevTotal + item.price * item.amount;
      // }, 0);
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
