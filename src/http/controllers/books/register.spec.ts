import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import request from 'supertest'

describe('Register Book (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should be able to register a book', async () => {
        const response = await request(app.server)
        .post('/books')
        .send({
            title: 'Crime e Castigo',
            author: 'Fiódor Dostoiévski',
            description: 'Romance Russo',
            pages: 1
        })

        expect(response.statusCode).toEqual(201)
    })
})