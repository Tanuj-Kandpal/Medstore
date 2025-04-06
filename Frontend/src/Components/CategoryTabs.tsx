import { useDispatch } from "react-redux";
import { filteredItem, isFilteredClicked } from "../Slices/ProductSlice";

const categories = [
  "Baby Care",
  "Skin Care",
  "Hair Care",
  "Oral Care",
  "Bath & Body",
  "Sun Protection",
  "Mens Grooming",
  "Deodrant & Fragrance",
  "Herbal & Ayurvedic",
];

function CategoryTabs() {
  const dispatch = useDispatch();
  function handleProducts(e: React.MouseEvent<HTMLButtonElement>) {
    const tabContent = e.currentTarget.textContent?.trim().toLowerCase() || "";
    dispatch(filteredItem(tabContent));
    dispatch(isFilteredClicked());
  }

  return (
    <>
      <div className="w-full py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex gap-2 sm:gap-3 mt-2 sm:mt-4 items-center min-w-max md:justify-center">
              {categories.map(function (category) {
                return (
                  <button
                    key={category}
                    onClick={handleProducts}
                    className="bg-[#458400] text-white rounded-xl py-2 px-3 sm:py-2 sm:px-4 cursor-pointer text-sm sm:text-base whitespace-nowrap shadow-md hover:bg-[#3a7000] transition-colors"
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryTabs;
