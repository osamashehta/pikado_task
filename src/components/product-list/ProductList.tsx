"use client";

import { useProductList } from "@/hooks/useProductList";
import Container from "../sheard/Container";
import ProductCard from "./ProductCard";
import { Product } from "@/types/Products";
import ProductSkeletonCard from "./ProductSkeletonCard";
import EmptyState from "./EmptyState";
import ErrorState from "./ErrorState";

const ProductList = () => {
  const { data: products, isLoading, isError } = useProductList();

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {isLoading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeletonCard key={index} />
        ))
      ) : isError ? (
        <ErrorState />
      ) : products && products.products.length > 0 ? (
        products.products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <EmptyState />
      )}
    </Container>
  );
};

export default ProductList;
