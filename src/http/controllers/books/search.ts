import { makeSearchBookUseCase } from '@/use-cases/factories/make-search-book-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function searchBook(req: FastifyRequest, reply: FastifyReply) {
    const searchBookQuerySchema = z.object({
        title: z.string(),
        page: z.coerce.number().min(1).default(1)
    })

    const { title, page } = searchBookQuerySchema.parse(req.query)

        const searchBookUseCase = makeSearchBookUseCase()

        const { books } = await searchBookUseCase.execute({
            title, page
        })
        
    return reply.status(200).send(
        { books }
    )
}