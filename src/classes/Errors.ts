interface ISubErrors {
    field: string
    code: number
    message: string
}

interface CommonAttributes {
    message: string
    code: number
    errors?: Array<ISubErrors>
    toResponse(): Object
}

export class BadRequest extends Error implements CommonAttributes {
    code: number
    errors: Array<ISubErrors>
    message: string
    constructor(errors: Array<ISubErrors>) {
        super('Invalid request')
        this.message = 'Invalid request'
        this.code = 400
        this.errors = errors
    }

    toResponse(): Object {
        return { code: this.code, message: this.message, errors: this.errors }
    }
}

export class UnprocessableEntity extends Error implements CommonAttributes {
    code: number
    errors?: ISubErrors[] | undefined
    constructor(errors: Array<ISubErrors>) {
        super('Invalid request')
        this.message = 'Invalid request'
        this.code = 400
        this.errors = errors
    }
    toResponse(): Object {
        return { code: this.code, message: this.message, errors: this.errors }
    }
}

export class Unathorize extends Error implements CommonAttributes {
    code: number
    message: string
    constructor(message: string) {
        super(message)
        this.message = message
        this.code = 401
    }
    toResponse(): Object {
        return { code: this.code, message: this.message }
    }
}

export class Forbidden extends Error implements CommonAttributes {
    code: number
    message: string
    constructor(message: string) {
        super(message)
        this.message = message
        this.code = 403
    }
    toResponse(): Object {
        return { code: this.code, message: this.message }
    }
}

export class NotFound extends Error implements CommonAttributes {
    code: number
    message: string
    constructor(message: string) {
        super(message)
        this.message = message
        this.code = 404
    }
    toResponse(): Object {
        return { code: this.code, message: this.message }
    }
}