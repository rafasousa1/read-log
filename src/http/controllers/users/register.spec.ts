import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import request from 'supertest'

describe('Register', () => {
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
            email: 'hugoo@email.com',
            password: '123456'
        })

        expect(response.statusCode).toEqual(201)
    })
})