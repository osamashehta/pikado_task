const getProductDetails = async (id: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/products/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Product not found", { cause: { status: 404 } });
    }
    throw new Error("Failed to fetch product");
  }

  return response.json();
};

export default getProductDetails;
