import { UserRepository } from '@/repositories/user-repository'
import { User } from '@prisma/client'
import { ProfileNotFoundError } from './errors/profile-not-found-error'

interface GetUserProfileUseCaseRequest {
    userId: string
}

interface GetUserProfileUseCaseResponse {
    user: User
}

export class GetUserProfileUseCase {
    constructor(private user: UserRepository) {}

    async execute({ userId }: GetUserProfileUseCaseRequest) : Promise<GetUserProfileUseCaseResponse> {
        const user = await this.user.findById(userId)

        if (!user) {
            throw new ProfileNotFoundError()
        }

        return { user }
    }
}