import { PrismaBooksRepository } from '@/repositories/prisma/prisma-books-repository'
import { SearchBookUseCase } from '../search-book'

export function makeSearchBookUseCase() {
    const bookRepository = new PrismaBooksRepository()
    const searchBookUseCase = new SearchBookUseCase(bookRepository)

    return searchBookUseCase
}