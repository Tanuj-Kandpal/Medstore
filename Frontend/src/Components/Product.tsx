import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice.js";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { Items } from "../Helper/Items.js";

function Product() {
  const dispatch = useDispatch();

  const filteredProduct = useSelector((store) => store.product.filteredItems);

  const filtereItemDisplayed = useSelector(
    (store) => store.product.filteredItemsDisplayed
  );

  function handleAddItem(singleProduct) {
    const { id, name, category, mrp, sellingPrice, image, quantity } =
      singleProduct;
    dispatch(
      addItem({ id, name, category, mrp, sellingPrice, image, quantity })
    );
  }

  function AllProducts() {
    return (
      <>
        {Items.map(function (singleProduct) {
          return (
            <div key={singleProduct.id} className="w-full sm:w-[350px] md:w-[400px] border hover:shadow-2xl transition-shadow flex flex-col justify-center items-center p-4 sm:p-8">
              <p className="font-medium text-sm sm:text-base text-center">{singleProduct.name}</p>
              <h1 className="font-bold mt-2 sm:mt-4 flex items-center">
                <LiaRupeeSignSolid />
                {singleProduct.mrp}
              </h1>
              <span className="mt-2 sm:mt-4"></span>
              <img className="h-40 sm:h-60 mt-3 sm:mt-5 object-contain" src={singleProduct.image} alt={singleProduct.name} />
              <button
                onClick={() => handleAddItem(singleProduct)}
                className="p-1 bg-[#99c46b] text-black mt-4 sm:mt-7 rounded-md text-sm sm:text-base"
              >
                Add to Basket
              </button>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      {filtereItemDisplayed ? (
        filteredProduct.map(function (singleProduct) {
          return (
            <div key={singleProduct.id} className="w-full sm:w-[350px] md:w-[400px] border hover:shadow-2xl transition-shadow flex flex-col justify-center items-center p-4 sm:p-8">
              <p className="font-medium text-sm sm:text-base text-center">{singleProduct.name}</p>
              <h1 className="font-bold mt-2 sm:mt-4 flex items-center">
                <LiaRupeeSignSolid />
                {singleProduct.mrp}
              </h1>
              <span className="mt-2 sm:mt-4"></span>
              <img className="h-40 sm:h-60 mt-3 sm:mt-5 object-contain" src={singleProduct.image} alt={singleProduct.name} />
              <button
                onClick={() => handleAddItem(singleProduct)}
                className="p-1 bg-[#99c46b] text-black mt-4 sm:mt-7 rounded-md text-sm sm:text-base"
              >
                Add to Basket
              </button>
            </div>
          );
        })
      ) : (
        <AllProducts />
      )}
    </>
  );
}

export default Product;
