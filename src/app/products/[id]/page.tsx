import ProductContent from "@/components/product-details/ProductContent";
import ProductContentSkeleton from "@/components/product-details/ProductContentSkeleton";
import ProductGallery from "@/components/product-details/ProductGallery";
import ProductReviews from "@/components/product-details/ProductReviews";
import ProductReviewsSkeleton from "@/components/product-details/ProductReviewsSkeleton";
import Container from "@/components/shared/Container";
import getProductDetails from "@/services/getProductDetails";
import { Product } from "@/types/Products";
import { Metadata } from "next";
import { Suspense } from "react";

interface pageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: pageProps): Promise<Metadata> {
  const { id } = await params;
  const product: Product = await getProductDetails(id);

  return {
    title: `${product.title} - Product Details`,
    description: product.description,
    keywords: [product.brand, product.category, ...product.tags],
  };
}

const page = async ({ params }: pageProps) => {
  const { id } = await params;
  const product: Product = await getProductDetails(id);

  return (
    <Container className="grid grid-cols-3 my-8 gap-y-8 gap-x-10">
      <div className="gallery col-span-3 md:col-span-1">
        <Suspense
          fallback={<div className="w-50 h-100 bg-slate-200 animate-pulse" />}
        >
          <ProductGallery images={product.images} />
        </Suspense>
      </div>
      <div className="content col-span-3 md:col-span-2">
        <Suspense fallback={<ProductContentSkeleton />}>
          <ProductContent product={product} />
        </Suspense>
      </div>

      <div className="col-span-3">
        <Suspense fallback={<ProductReviewsSkeleton />}>
          <ProductReviews reviews={product.reviews} />
        </Suspense>
      </div>
    </Container>
  );
};

export default page;
