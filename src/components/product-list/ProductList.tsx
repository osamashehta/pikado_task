"use client";

import { useProductList } from "@/hooks/useProductList";
import Container from "../sheard/Container";
import ProductCard from "./ProductCard";
import { Product } from "@/types/Products";
import ProductSkeletonCard from "./ProductSkeletonCard";
import EmptyState from "./EmptyState";
import ErrorState from "./ErrorState";
import { useEffect, useRef } from "react";

const ProductList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useProductList();

  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const products = data?.pages.flatMap((page) => page.products) ?? [];
  const totalProducts = data?.pages[0]?.total ?? 0;

  return (
    <>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeletonCard key={index} />
          ))
        ) : isError ? (
          <ErrorState />
        ) : products.length > 0 ? (
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <EmptyState />
        )}
      </Container>

      <div
        ref={observerTarget}
        className="my-20 flex items-center justify-center"
      >
        {isFetchingNextPage && (
          <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
        )}
        {!hasNextPage && products.length > 0 && (
          <div className="text-center text-gray-500">
            Showing all {totalProducts} products
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
