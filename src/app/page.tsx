import ProductList from "@/components/product-list/ProductList";
import getProducts from "@/services/getProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Pikado Store",
  description:
    "Browse our collection of high-quality products. Find the best deals and latest arrivals.",
};

export default function Home() {
  return (
    <main>
      <header className="flex flex-col items-center justify-center my-8">
        <h1 className="text-2xl font-bold bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Welcome to Pikado Store
        </h1>
      </header>
      <ProductList />
    </main>
  );
}
