import { afterAll, beforeAll, describe, expect, it, test } from 'vitest'
import { app } from '@/app'
import request from 'supertest'

describe('Register (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should be able to register', async () => {
        const response = await request(app.server)
        .post('/users')
        .send({
            name: 'Hugo',
            email: 'huggo@email.com',
            password: '123456'
        })

        expect(response.statusCode).toEqual(201)
    })
})