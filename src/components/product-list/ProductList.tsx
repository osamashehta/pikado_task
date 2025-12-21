"use client";

import { useProductList } from "@/hooks/useProductList";
import Container from "../sheard/Container";
import ProductCard from "./ProductCard";
import { Product } from "@/types/Products";
import ProductSkeletonCard from "./ProductSkeletonCard";

const ProductList = () => {
  const { data: products, isLoading, isError } = useProductList();
  console.log("products", products);

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {isLoading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeletonCard key={index} />
        ))
      ) : products && products.products.length > 0 ? (
        products.products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div>No products found.</div>
      )}
    </Container>
  );
};

export default ProductList;
