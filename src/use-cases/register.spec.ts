import { InMemoryUsersRepository } from '@/repositories/in-memory-database/in-memory-database-user'
import { beforeEach, describe, it, expect } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

let usersRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new RegisterUseCase(usersRepository)
    })

    it('Should be able to create a user', async () => {
        const { user } = await sut.execute({
            name: 'Hugo',
            email: 'hugo@email.com',
            password: '123456'
        })

        expect(user.id).toEqual(expect.any(String))
    })

    it('Should be able to hash a password', async () => {
        const { user } = await sut.execute({
            name: 'Hugo',
            email: 'hugo@email.com',
            password: '123456'
        })

        const isPasswordHash = await compare('123456', user.password_hash)

        expect(isPasswordHash).toBe(true)
    })

    it('Should be able to verify if the email has been registered twice', async () => {
        const email = 'hugo@email.com'

        await sut.execute({
            name: 'Hugo',
            email: email,
            password: '123456'
        })

        await expect(() => 
            sut.execute({
            name: 'Hugo',
            email: email,
            password: '123456'
        })
        ).rejects.toBeInstanceOf(UserAlreadyExistsError)
    })
})