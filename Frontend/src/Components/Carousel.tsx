import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="w-full">
      <SwiperSlide>
        <div className="relative w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px]">
          <img
            src="https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/banners/blog_sea-moss_031925_001hden-us.jpg"
            alt="Banner Image"
            className="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px]">
          <img
            src="https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/banners/supplbanner0319_001hden-us.jpg"
            alt="Banner Image"
            className="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px]">
          <img
            src="https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cms/banners/herbspbanner0319_001hden-us.jpg"
            alt="Banner Image"
            className="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
