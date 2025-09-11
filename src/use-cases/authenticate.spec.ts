import { InMemoryUsersRepository } from '@/repositories/in-memory-database/in-memory-database-user'
import { beforeEach, describe, it, expect } from 'vitest'
import { compare, hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { AuthenticateUseCase } from './authenticate'
import { InvalidCredentialError } from './errors/invalid-credential-error'

let usersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new AuthenticateUseCase(usersRepository)
    })

    it('Should be able to authenticate a user', async () => {
        await usersRepository.create({
            name: 'Hugo',
            email: 'hugo@email.com',
            password_hash: await hash('123456', 6)
        })

        const { user } = await sut.execute({
            email: 'hugo@email.com',
            password: '123456'
        })

        expect(user.id).toEqual(expect.any(String))
    })

    it('Should not be able to authenticate with wrong email', async () => {
        await expect(() => 
            sut.execute({
                email: 'horacio@email.com',
                password: '123456'
            })
        ).rejects.toBeInstanceOf(InvalidCredentialError)
    })

    it('Should not be able to authenticate with wrong password', async () => {
        await usersRepository.create({
            name: 'Hugo',
            email: 'hugo@email.com',
            password_hash: await hash('123456', 6)
        })

        await expect(() => 
            sut.execute({
            email: 'hugo@email.com',
            password: '123123'
        })
        ).rejects.toBeInstanceOf(InvalidCredentialError)
    })
})