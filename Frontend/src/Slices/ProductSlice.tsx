import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../Helper/Items";

// ✅ Define the type of a product item
interface Product {
  id: number;
  name: string;
  category: string;
  mrp: number | null; // ✅ Allow null values
  sellingPrice: number | null; // ✅ Allow null values
  quantity?: number;
  image?: string;
}

// ✅ Define the type of the initial state
interface ProductState {
  items: Product[];
  filteredItems: Product[];
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

export const { filteredItem,isFilteredClicked } = ProductSlice.actions;
export default ProductSlice.reducer;
