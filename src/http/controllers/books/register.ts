import { makeRegisterBookUseCase } from '@/use-cases/factories/make-register-book-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerBook(req: FastifyRequest, reply: FastifyReply) {
    const registerBookBodySchema = z.object({
        title: z.string(),
        author: z.string(),
        description: z.string().nullable(),
        pages: z.number().int().nullable()
    })

    const { title, author, description, pages } = registerBookBodySchema.parse(req.body)

        const registerBookUseCase = makeRegisterBookUseCase()

        await registerBookUseCase.execute({
            title, author, description, pages
        })
        
    return reply.status(201).send()
}