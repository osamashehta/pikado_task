"use client";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const ProductGallery = ({ images }: { images: string[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="w-full h-100 relative border border-gray-200 rounded-[29px] p-4">
          <Image
            width={400}
            height={400}
            className="object-contain"
            src={image}
            alt={`Product Image ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductGallery;
