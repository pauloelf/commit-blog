import { useQuery } from "@tanstack/react-query"
import api from "@/lib/axios"

const fetchPosts = async (category?: string, currentPage?: number) => {
  const response = await api.get(`/posts`, {
    params: {
      populate: "images",
      sort: "createdAt:desc",
      pagination: { page: currentPage, pageSize: 6 },
      filters:
        category && category !== "todos"
          ? { category: { slug: { $eq: category } } }
          : {},
    },
  })
  return response.data
}

export function usePosts(category?: string, currentPage?: number) {
  return useQuery({
    queryKey: ["posts", category, currentPage],
    queryFn: () => fetchPosts(category, currentPage),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchOnWindowFocus: false,
  })
}
