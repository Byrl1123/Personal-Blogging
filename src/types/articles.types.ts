export interface CreateArticleInput {
  title: string
  content: string
  author: string
  tags?: string[]
  publishedDate?: Date
}
