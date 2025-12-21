import { Product, ProductsResponse } from "@/types/Products";

interface GetProductsParams {
  limit: number;
  skip: number;
}

const getProducts = async ({
  limit,
  skip,
}: GetProductsParams): Promise<ProductsResponse> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(
    `${apiUrl}/products?limit=${limit}&skip=${skip}`
  );
  return response.json();
};

export default getProducts;
