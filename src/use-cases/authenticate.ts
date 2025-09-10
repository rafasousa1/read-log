import { User } from '@prisma/client'
import { UserRepository } from '@/repositories/user-repository'
import { compare } from 'bcryptjs'
import { InvalidCredentialError } from './errors/invalid-credential-error'

interface AuthenticateUseCaseRequest {
    email: string
    password: string
}

interface AuthenticateUseCaseResponse {
    user: User
}

export class AuthenticateUseCase {
    constructor(private user: UserRepository) {}

    async execute({ email, password }: AuthenticateUseCaseRequest) : Promise<AuthenticateUseCaseResponse> {

        const user = await this.user.findByEmail(email)

        if (!user) {
            throw new InvalidCredentialError()
        }

        const doesPasswordMatches = await compare(password, user.password_hash)

        if (!doesPasswordMatches) {
            throw new InvalidCredentialError()
        }

        return { user }
    }
}