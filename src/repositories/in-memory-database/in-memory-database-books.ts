import { Book, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { BookRepository } from '../book-repository'

export class InMemoryBooksRepository implements BookRepository {
    public values: Book[] = []

    async create(data: Prisma.BookCreateInput) {
        const book = {
            id: data.id ?? randomUUID(),
            title: data.title,
            author: data.author,
            description: data.description ?? null,
            pages: data.pages ?? null,
            created_at: new Date()
        }

        this.values.push(book)

        return book
    }
}