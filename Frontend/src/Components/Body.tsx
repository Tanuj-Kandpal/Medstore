import Carousel from "./Carousel";
import CategoryTabs from "./CategoryTabs";
import Product from "./Product";

function Body() {
  return (
    <>
      <Carousel />
      <CategoryTabs />
      <div className="flex justify-center w-full px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-9 mt-4 sm:mt-7 w-full">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
