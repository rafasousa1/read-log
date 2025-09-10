import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { BookRepository } from '../book-repository'

export class PrismaBooksRepository implements BookRepository {
    
    async create(data: Prisma.BookCreateInput) {
        const user = await prisma.book.create({
            data
        })

        return user
    }
}