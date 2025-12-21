import getProducts from "@/services/getProducts"
import { useQuery } from "@tanstack/react-query"

export const useProductList = () => {
    return  useQuery({
        queryKey: ['products'],
        queryFn: async () => getProducts(),
    })
}

