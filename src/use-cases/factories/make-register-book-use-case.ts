import { PrismaBooksRepository } from '@/repositories/prisma/prisma-books-repository'
import { RegisterBookUseCase } from '../register-book'

export function makeRegisterBookUseCase() {
    const booksRepository = new PrismaBooksRepository()
    const registerBookUseCase = new RegisterBookUseCase(booksRepository)

    return registerBookUseCase
}