import { BookRepository } from '@/repositories/book-repository'
import { Book } from '@prisma/client'

interface SearchBookUseCaseRequest {
    title: string
    page: number
}

interface SearchBookUseCaseResponse {
    books: Book[]
}

export class SearchBookUseCase {
    constructor(private bookRepository: BookRepository) {} 

    async execute({ title, page }: SearchBookUseCaseRequest) : Promise <SearchBookUseCaseResponse> {

        const books = await this.bookRepository.searchMany(title, page)

        return { books }
    }
}