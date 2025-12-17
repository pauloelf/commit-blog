export type Post = {
  id: number
  title: string
  description: string
  slug: string
  createdAt: {
    seconds: number
  }
  tags: string[]
  image: {
    src: string
    alt_text: string
  }
  content: string
}
