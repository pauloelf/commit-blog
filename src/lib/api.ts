import api from "./axios"

export const fetchPost = async (slug: string) => {
  const response = await api.get(`/posts`, {
    params: {
      filters: { slug: { $eq: slug } },
    },
  })
  return response.data
}
