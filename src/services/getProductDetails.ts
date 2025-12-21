const getProductDetails = async (id: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/products/${id}`);
  return response.json();
};

export default getProductDetails;
