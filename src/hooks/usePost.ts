import { useQuery } from "@tanstack/react-query"
import api from "@/lib/axios"

const fetchPost = async (slug: string) => {
  const response = await api.get(`/posts`, {
    params: {
      populate: "images",
      filters: { slug: { $eq: slug } },
    },
  })
  return response.data
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
