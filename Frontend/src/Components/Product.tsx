import { useAppDispatch, useAppSelector } from "../Helper/types";
import { addItem } from "../cartSlice";
import type { ProductDetails } from "../Helper/types";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { IoMdCart } from "react-icons/io";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const filteredProduct = useAppSelector((state) => state.product.filteredItems);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleAddItem = (item: ProductDetails) => {
    const productWithImage: ProductDetails = {
      ...item,
      image: item.image || "https://m.media-amazon.com/images/I/61YFLf-Z0cL._AC_UL480_FMwebp_QL65_.jpg",
    };
    dispatch(addItem(productWithImage));
  };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: newQuantity,
    }));
  };

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProduct.map((singleProduct) => {
          const currentQuantity = quantities[singleProduct.id] || 1;
          return (
              <div
                  key={singleProduct.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4">
                  <img
                      src={singleProduct.image}
                      alt={singleProduct.name}
                      className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{singleProduct.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">MRP: ₹{singleProduct.mrp}</span>
                    <span className="text-green-600 font-semibold">
                  ₹{singleProduct.sellingPrice}
                </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                          onClick={() =>
                              handleQuantityChange(
                                  singleProduct.id,
                                  Math.max(1, currentQuantity - 1)
                              )
                          }
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <IoMdRemove />
                      </button>
                      <span className="w-8 text-center">{currentQuantity}</span>
                      <button
                          onClick={() =>
                              handleQuantityChange(singleProduct.id, currentQuantity + 1)
                          }
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <IoMdAdd />
                      </button>
                    </div>
                    <button
                        onClick={() => handleAddItem(singleProduct)}
                        className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                    >
                      <IoMdCart />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
  );
};

export default ProductList;
