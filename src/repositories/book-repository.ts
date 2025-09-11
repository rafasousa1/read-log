import { Book, Prisma } from '@prisma/client'

export interface BookRepository {
    create(data: Prisma.BookCreateInput) : Promise <Book>
    searchMany(title: string, page: number) : Promise <Book[]>
}