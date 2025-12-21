import { Product } from "@/types/Products";
import Image from "next/image";
import { StarIcon } from "../icons/StarIcon";
interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border border-[#00000017] bg-primary shadow-[0px_0px_10px_rgba(0,0,0,0.08)] rounded-[29px] px-4 py-5 flex flex-col items-center gap-3 relative group hover:shadow-[0px_0px_14px_rgba(0,0,0,0.1)] transition-all hover:border-[#00000033] duration-300">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={160}
        className="group-hover:scale-[1.2] transition-all duration-300 rounded-[29px]"
      />
      <h2 className="font-semibold  md:text-lg mt-4 text-center text-secondary">
        {product.title}
      </h2>
      <div className="w-full flex items-center justify-center gap-3 ">
        <span className="text-secondary font-medium text-xl">
          ${product.price}
        </span>
        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
          {product.availabilityStatus}
        </span>
      </div>
      <div className="text-secondary  text-[14px] line-clamp-2 ">
        {product.description}
      </div>
      <span className=" absolute top-4 right-4 text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full flex items-center gap-1">
        {product.rating}
        <StarIcon />
      </span>
    </div>
  );
};

export default ProductCard;
