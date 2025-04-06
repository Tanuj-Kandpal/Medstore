import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export type State = {
  items: ProductDetails[];
};

export type Action = {
  type: string;
  payload: number;
};

export type ProductDetails = {
  id?: number;
  name?: string;
  category?: string;
  mrp?: number;
  sellingPrice?: number;
  image?: string;
  quantity?: number;
};

export type ProductList = ProductDetails[];
