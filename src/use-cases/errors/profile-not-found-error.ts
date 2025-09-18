export class ProfileNotFoundError extends Error {
    constructor() {
        super('Profile Not Found, please try again')
    }
}