import Fastify, { FastifyInstance } from 'fastify';
import {
    getArticles,
    getArticleById,
    createArticle
} from '../controllers/article.controllers';


// Declaring the GET /articles route
export async function articleRoutes(fastify: FastifyInstance) {
    fastify.get('/', getArticles)
    fastify.get('/:articleId', getArticleById)
    fastify.post('/', createArticle)
}