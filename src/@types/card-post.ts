export type Post = {
  id: number
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  tags: string
  images: {
    id: number
    url: string
    alternativeText: string
    height: number
    width: number
    formats: {
      thumbnail: {
        url: string
        width: number
        height: number
      }
      small: {
        url: string
        width: number
        height: number
      }
      medium: {
        url: string
        width: number
        height: number
      }
      large: {
        url: string
        width: number
        height: number
      }
    }
  }[]
  content: string
}
