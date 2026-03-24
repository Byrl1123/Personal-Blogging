import {Article} from '../models/article'
import { CreateArticleInput } from '../types/articles.types'

export function findAll() {
    return Article.find()
}

export function findById(id: string) {
    return Article.findById(id)
}

export function create(data: CreateArticleInput) {
    return Article.create(data)
}