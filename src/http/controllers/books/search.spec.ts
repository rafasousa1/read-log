import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import request from 'supertest'

describe('Search Book (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should be able to search a book by title', async () => {
        // autenticação aq!!!!

        await request(app.server)
        .post('/books')
        .send({
            title: 'Crime e Castigo',
            author: 'Fiódor Dostoiévski',
            description: 'Romance Russo',
            pages: 1
        })

        await request(app.server)
        .post('/books')
        .send({
            title: 'Livro 2',
            author: 'Phil Knight',
            description: 'Pescador',
            pages: 1
        })

        const response = await request(app.server)
        .get('/books/search')
        .query({
            search: 'Crime'
        })
        .send()

        expect(response.statusCode).toEqual(200)

        expect(response.body.books).toHaveLength(1)
        expect(response.body.books).toEqual([
            expect.objectContaining({
                title: 'Crime e Castigo'
            })
        ])
    })
})