import { Book, Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { BookRepository } from '../book-repository'

export class PrismaBooksRepository implements BookRepository {
    
    async create(data: Prisma.BookCreateInput) {
        const user = await prisma.book.create({
            data
        })

        return user
    }

    async searchMany(title: string, page: number) {
        const books = await prisma.book.findMany({
            where: {
                title: {
                    contains: title
                },
            },

            take: 20,
            skip: (page -1) * 20
        })

        return books
    }
}