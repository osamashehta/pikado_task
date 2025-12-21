import ProductList from "@/components/product-list/ProductList";
import getProducts from "@/services/getProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Pikado Store",
  description: "Browse our collection of high-quality products. Find the best deals and latest arrivals.",
};

export default function Home() {


  return <ProductList />;
}
