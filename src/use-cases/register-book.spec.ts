import { beforeEach, describe, it, expect } from 'vitest'
import { InMemoryBooksRepository } from '@/repositories/in-memory-database/in-memory-database-books'
import { RegisterBookUseCase } from './register-book'

let booksRepository: InMemoryBooksRepository
let sut: RegisterBookUseCase

describe('Register Book Use Case', () => {
    beforeEach(() => {
        booksRepository = new InMemoryBooksRepository()
        sut = new RegisterBookUseCase(booksRepository)
    })

    it('Should be able to register a book', async () => {
        const { book } = await sut.execute({
           title: 'Noites Brancas',
           author: 'Fiódor Dostoiévski',
           description: 'Romance Russo',
           pages: 1
        })

        expect(book.id).toEqual(expect.any(String))
    })
})