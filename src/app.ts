import fastify from 'fastify'
import userRoutes from './http/controllers/users/routes'
import bookRoutes from './http/controllers/books/routes'

export const app = fastify()

app.register(userRoutes)
app.register(bookRoutes)