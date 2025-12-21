import { Product } from "@/types/Products";
interface ProductContentProps {
  product: Product;
}
const ProductContent = ({ product }: ProductContentProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-secondary">
        {product.title}
      </h1>
      <p className="text-secondary mb-6">{product.description}</p>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-semibold text-secondary">
            {product.price} $
          </span>
          <span className="text-[14px] font-medium  bg-red-600 text-white px-2 py-1 rounded-full">
            {product.discountPercentage}%
          </span>
        </div>
        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
          {product.availabilityStatus}
        </span>
      </div>
      <div className="text-secondary text-sm space-y-2">
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>SKU:</strong> {product.sku}
        </p>
        <p>
          <strong>Weight:</strong> {product.weight} kg
        </p>
        <p>
          <strong>Dimensions:</strong> {product.dimensions.width} x{" "}
          {product.dimensions.height} x {product.dimensions.depth} cm
        </p>
        <p>
          <strong>Warranty Information:</strong> {product.warrantyInformation}
        </p>
        <p>
          <strong>Shipping Information:</strong> {product.shippingInformation}
        </p>
        <p>
          <strong>Return Policy:</strong> {product.returnPolicy}
        </p>
        <p>
          <strong>Minimum Order Quantity:</strong>{" "}
          {product.minimumOrderQuantity}
        </p>
      </div>
    </>
  );
};

export default ProductContent;
