import { FastifyRequest, FastifyReply } from "fastify"
import * as articleService from "../services/article.services"
import { CreateArticleInput } from "../types/articles.types"

export async function getArticles(
  _: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const articles = await articleService.findAll()
    reply.send(articles)
  } catch(error) {
      reply.status(500).send({
      error:"Failed to Fetch articles",
      message: error instanceof Error ? error.message: "Unknown error :("
    })
  }
}

export async function getArticleById(
  request: FastifyRequest<{ Params: { articleId: string } }>,
  reply: FastifyReply
) {
  try { 
  const article = await articleService.findById(request.params.articleId)

  if (!article) {
    return reply.status(404).send({ message: "Article not found" })
  }
 
  reply.send(article)

    } catch (error) {
      reply.status(500).send({
      error: "Failed to get Articles",
      message: error instanceof Error ? error.message: "Couldn't get the Id"
      })
    }
  }


export async function createArticle(
  request: FastifyRequest<{ Body: CreateArticleInput }>,
  reply: FastifyReply
) {
  try { 
    const article = await articleService.create(request.body)
    reply.status(201).send(article)
    } catch(error) {
      reply.status(400).send({
        error: "Couldn't create article",
        message: error instanceof Error ? error.message: "Couldn't create the article. Unknown error."
      })
    }
  }
