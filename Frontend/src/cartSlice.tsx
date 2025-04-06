import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action, ProductDetails, State } from "./Helper/types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: function (state: State, action: PayloadAction<ProductDetails>) {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    clearCart: function (state: State) {
      state.items = [];
    },
    removeItem: function (state: State, action: Action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload // Ensure the correct item is removed
      );
    },
    increaseItemQuantity: function (state: State, action: Action) {
      const item = state.items.find((item) => item.id === action.payload);
      console.log(state.items);

      if (item) {
        item.quantity++;
      }
    },
    decreaseItemQuantity: function (state: State, action: Action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
