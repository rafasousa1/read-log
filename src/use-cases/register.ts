import { User } from '@prisma/client'
import { UserRepository } from '@/repositories/user-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

interface RegisterUseCaseRequest {
    name: string,
    email: string,
    password: string
}

interface RegisterUseCaseResponse {
    user: User
}

export class RegisterUseCase {
    constructor(private user: UserRepository) {}

    async execute({ name, email, password }: RegisterUseCaseRequest): Promise <RegisterUseCaseResponse> {

        const userWithSameEmail = await this.user.findByEmail(email)

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError()
        }

        const password_hash = await hash(password, 6) // hash da senha

        const user = await this.user.create({
            name,
            email,
            password_hash
        })

        return { user }
    }
}
