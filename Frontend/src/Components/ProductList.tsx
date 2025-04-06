import type React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center py-2 border-b last:border-b-0"
        >
          <div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-gray-600">
              Quantity: {product.quantity}
            </p>
          </div>
          <p className="font-medium">${product.price * product.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
