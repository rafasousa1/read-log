import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { UserRepository } from '../user-repository'

export class PrismaUsersRepository implements UserRepository {
    
    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data
        })

        return user
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return user
    }
}