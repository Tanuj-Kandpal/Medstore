import { useState } from "react";
import { useDispatch } from "react-redux";
import { filteredItem, isFilteredClicked } from "../Slices/ProductSlice";

function Searchbar() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
    dispatch(filteredItem(e.target.value.toLowerCase()));
    dispatch(isFilteredClicked());
  }

  return (
      <div className="relative">
        <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={handleSearch}
            className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#458400] focus:border-transparent"
        />
      </div>
  );
}

export default Searchbar;
