import { FastifyInstance } from 'fastify'

import { registerBook } from './register'

export default async function bookRoutes(app: FastifyInstance) {
    app.post('/books', registerBook)
}