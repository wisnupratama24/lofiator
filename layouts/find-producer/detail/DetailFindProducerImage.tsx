import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function DetailFindProducerImage() {
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
        <SwiperSlide>
          <div className='h-60 bg-red-200'>SLIDE 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-60 bg-red-200'>SLIDE 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-60 bg-red-200'>SLIDE 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-60 bg-red-200'>SLIDE 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-60 bg-red-200'>SLIDE 5</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
