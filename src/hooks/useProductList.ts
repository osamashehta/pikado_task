import getProducts from "@/services/getProducts";
import { useInfiniteQuery } from "@tanstack/react-query";

const LIMIT = 12;

export const useProductList = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 0 }) =>
      getProducts({ limit: LIMIT, skip: pageParam }),
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam: 0,
  });
};
