import { FastifyInstance } from 'fastify'

import { registerBook } from './register'
import { searchBook } from './search'

export default async function bookRoutes(app: FastifyInstance) {

    app.get('/books/search', searchBook)
    app.post('/books', registerBook)
}