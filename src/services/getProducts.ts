const getProducts = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  return fetch(`${apiUrl}/products?limit=12`)
    .then((res) => res.json())
    .then((data) => data);
};

export default getProducts;
