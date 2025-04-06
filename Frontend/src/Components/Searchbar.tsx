import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
function Searchbar() {
  const [text, setText] = useState("");

  return (
    <>
      <>
        <div className="flex items-center rounded-lg flex-wrap bg-white overflow-hidden w-80">
          <input
            className="flex-grow text-sm text-gray-700 outline-none"
            type="text"
            placeholder="Search Health Item"
            onChange={(e) => setText(e.target.value)}
          />
          <button className="flex items-center justify-center h-16 p-5 bg-[#73A14E] cursor-pointer">
            <IoMdSearch className="fill-white text-lg" />
          </button>
        </div>
      </>
    </>
  );
}

export default Searchbar;
