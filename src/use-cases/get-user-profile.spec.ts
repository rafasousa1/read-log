import { InMemoryUsersRepository } from '@/repositories/in-memory-database/in-memory-database-user'
import { beforeEach, describe, it, expect } from 'vitest'
import { GetUserProfileUseCase } from './get-user-profile'
import { hash } from 'bcryptjs'
import { ProfileNotFoundError } from './errors/profile-not-found-error'

let usersRepository: InMemoryUsersRepository
let sut: GetUserProfileUseCase

describe('Get User Profile Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new GetUserProfileUseCase(usersRepository)
    })

    it('Should be able to show a user profile', async () => {
        const createdUser = await usersRepository.create({
            name: 'Horácio',
            email: 'horácio@email.com',
            password_hash: await hash('123456', 6)
        })

        const { user } = await sut.execute({
            userId: createdUser.id
        })

        expect(user.name).toEqual('Horácio')
    })

    it('Should not be able to show a user with wrong id', async () => {
        await expect(() => 
            sut.execute({
                userId: 'id-not-found'
            })
        ).rejects.toBeInstanceOf(ProfileNotFoundError)
    })
})