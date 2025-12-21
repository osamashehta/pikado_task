"use client";
import { Review } from "@/types/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { StarIcon } from "../icons/StarIcon";

interface ProductReviewsProps {
  reviews: Review[];
}

const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-secondary">
        Customer Reviews
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full pb-12"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="border border-[#00000017] bg-primary shadow-[0px_0px_10px_rgba(0,0,0,0.08)] rounded-[29px] p-6 h-full flex flex-col gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-secondary text-sm flex-grow line-clamp-4">
                "{review.comment}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-secondary">
                  {review.reviewerName}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductReviews;
