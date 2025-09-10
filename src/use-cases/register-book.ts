import { BookRepository } from "@/repositories/book-repository"
import { Book } from "@prisma/client"

interface RegisterBookUseCaseRequest {
    title: string
    author: string
    description: string | null
    pages: number | null
}

interface RegisterBookUseCaseResponse {
    book: Book
}

export class RegisterBookUseCase {
    constructor(private book: BookRepository) {}

    async execute({ title, author, description, pages }: RegisterBookUseCaseRequest): Promise <RegisterBookUseCaseResponse> {

        const book = await this.book.create({
            title,
            author,
            description,
            pages,
        })

        return { book }
    }
}
