import { beforeEach, describe, it, expect } from 'vitest'
import { InMemoryBooksRepository } from '@/repositories/in-memory-database/in-memory-database-books'
import { SearchBookUseCase } from './search-book'

let booksRepository: InMemoryBooksRepository
let sut: SearchBookUseCase

describe('Register Book Use Case', () => {
    beforeEach(() => {
        booksRepository = new InMemoryBooksRepository()
        sut = new SearchBookUseCase(booksRepository)
    })

    it('Should be able to search a book by name', async () => {
        await booksRepository.create({
            title: 'A Marca da Vitória',
            author: 'Ernest Hemingway',
            description: 'Autobiografia',
            pages: 1
        })

        await booksRepository.create({
            title: 'O Velho e o Mar',
            author: 'Phil Knight',
            description: 'Pescador',
            pages: 1
        })

        const { books } = await sut.execute({
            title: 'O Velho',
            page: 1
        })

        expect(books).toHaveLength(1)
        expect(books).toEqual([
            expect.objectContaining({title: 'O Velho e o Mar',})
        ])
    })
})