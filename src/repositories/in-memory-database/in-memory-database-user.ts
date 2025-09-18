import { User, Prisma } from '@prisma/client'
import { UserRepository } from '../user-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryUsersRepository implements UserRepository {
    public values: User[] = []

    async create(data: Prisma.UserCreateInput) {
        const user = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            password_hash: data.password_hash,
            created_at: new Date()
        }

        this.values.push(user)

        return user
    }

    async findByEmail(email: string) {
        const user = this.values.find((item) => item.email === email)

        if (!user) {
            return null
        }

        return user
    }

    async findById(id: string) {
        const user = this.values.find((item) => item.id === id)

        if (!user) {
            return null
        }

        return user
    }
}