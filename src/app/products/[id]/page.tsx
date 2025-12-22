import ProductContent from "@/components/product-details/ProductContent";
import ProductContentSkeleton from "@/components/product-details/ProductContentSkeleton";
import ProductGallery from "@/components/product-details/ProductGallery";
import ProductReviews from "@/components/product-details/ProductReviews";
import ProductReviewsSkeleton from "@/components/product-details/ProductReviewsSkeleton";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Container from "@/components/shared/Container";
import getProductDetails from "@/services/getProductDetails";
import { Product } from "@/types/Products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface pageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: pageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const product: Product = await getProductDetails(id);

    return {
      title: `${product.title} - Product Details`,
      description: product.description,
      keywords: [product.brand, product.category, ...product.tags],
    };
  } catch (error: any) {
    if (error?.cause?.status === 404) {
      return {
        title: "Product Not Found",
        description: "The requested product does not exist.",
      };
    }

    return {
      title: "Error",
      description: "An error occurred while loading the product.",
    };
  }
}

const page = async ({ params }: pageProps) => {
  const { id } = await params;
  let product: Product;
  try {
    product = await getProductDetails(id);
  } catch (error: any) {
    if (error?.cause?.status === 404) {
      notFound();
    }
    throw error;
  }

  return (
    <Container className="my-8">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: product.title }]}
      />
      <div className="grid grid-cols-3 gap-y-8 gap-x-10">
        <div className="gallery col-span-3 md:col-span-1">
          <Suspense
            fallback={
              <div className="w-full h-100 bg-slate-200 animate-pulse" />
            }
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
      </div>
    </Container>
  );
};

export default page;
