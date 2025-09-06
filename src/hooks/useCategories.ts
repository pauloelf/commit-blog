import { useQuery } from "@tanstack/react-query"
import api from "@/lib/axios"

const fetchCategories = async () => {
  const response = await api.get("/categories")
  return response.data.data
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
