import { FastifyError } from 'fastify'

export interface ISubErrors {
    message: string
}

export interface CustomFastifyError extends FastifyError {
    errors?: Array<ISubErrors> | undefined
}

interface CommonAttributes {
    message: string
    statusCode: number
    errors?: Array<ISubErrors>
    toResponse(): Object
}

export class BadRequest extends Error implements CommonAttributes {
    statusCode: number
    errors: Array<ISubErrors>
    message: string
    constructor(errors: Array<ISubErrors>) {
        super('Invalid request')
        this.message = 'Invalid request'
        this.statusCode = 400
        this.errors = errors
    }

    toResponse(): Object {
        return { code: this.statusCode, message: this.message, errors: this.errors }
    }
}

export class UnprocessableEntity extends Error implements CommonAttributes {
    statusCode: number
    errors?: ISubErrors[] | undefined
    constructor(errors: Array<ISubErrors>) {
        super('Invalid request')
        this.message = 'Invalid request'
        this.statusCode = 422
        this.errors = errors
    }
    toResponse(): Object {
        return { code: this.statusCode, message: this.message, errors: this.errors }
    }
}

export class Unathorize extends Error implements CommonAttributes {
    statusCode: number
    message: string
    constructor(message: string) {
        super(message)
        this.message = message
        this.statusCode = 401
    }
    toResponse(): Object {
        return { code: this.statusCode, message: this.message }
    }
}

export class Forbidden extends Error implements CommonAttributes {
    statusCode: number
    message: string
    constructor(message: string) {
        super(message)
        this.message = message
        this.statusCode = 403
    }
    toResponse(): Object {
        return { code: this.statusCode, message: this.message }
    }
}

export class NotFound extends Error implements CommonAttributes {
    statusCode: number
    message: string
    constructor(message: string) {
        super(message)
        this.message = message
        this.statusCode = 404
    }
    toResponse(): Object {
        return { code: this.statusCode, message: this.message }
    }
}
