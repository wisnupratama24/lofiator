import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { BASE_URL } from "~/lib/setupApi";

export default function DetailFindProducerImage({
  images,
}: {
  images: {
    image: string;
  }[];
}) {
  return (
    <div className='max-w-3xl'>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'>
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='h-64'>
                <img
                  src={`${BASE_URL}/${image.image}`}
                  alt={`producer image ${index}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
