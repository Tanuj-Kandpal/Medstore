import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../Helper/Items";
import { ProductDetails } from "../Helper/types";

// ✅ Define the type of the initial state
interface ProductState {
  items: ProductDetails[];
  filteredItems: ProductDetails[];
  filteredItemsDisplayed: boolean;
}

//Setting up the initial state
const initialState: ProductState = {
  items: Items || [],
  filteredItems: [],
  filteredItemsDisplayed: false,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filteredItem: function (state, action) {
      state.filteredItems = state.items.filter(function (item) {
        return item.category?.trim().toLowerCase() === action.payload;
      });
    },
    isFilteredClicked: function (state) {
      state.filteredItemsDisplayed = true;
    },
  },
});

export const { filteredItem, isFilteredClicked } = ProductSlice.actions;
export default ProductSlice.reducer;
