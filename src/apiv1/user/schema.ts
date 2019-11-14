import { RouteSchema } from 'fastify'


export const loginUserSchema: RouteSchema = {
    headers: {
        type: 'object',
        required: [
            'authorization'
        ],
        properties: {
            'authorization': { type: 'string' }
        }
    },
    response: {
        '2xx': {
            type: 'object',
            properties: {
                token: { type: 'string' },
                expiration: { type: 'number' }
            }
        },
        '422': {
            type: 'object',
            properties: {
                'status': { type: 'string' },
                'message': { type: 'string' },
                'errors': {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            message: { type: 'string' }
                        }
                    }
                }
            }
        },
        '403': {
            type: 'object',
            properties: {
                status: { type: 'number' },
                message: { type: 'string' }
            }
        },
        '401': {
            type: 'object',
            properties: {
                status: { type: 'number' },
                message: { type: 'string' }
            }
        }
    }
}

export const createUserSchema: RouteSchema = {
    body: {
        type: 'object',
        required: [
            'firstName',
            'lastName',
            'phone',
            'password',
            'email',
            'location',
            'dateBirthday',
        ],
        properties: {
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            phone: { type: 'string' },
            password: { type: 'string' },
            email: { type: 'string', format: 'email' },
            location: {
                type: 'object',
                required: [
                    'cep'
                ],
                properties: {
                    cep: { type: 'string' }
                }
            },
            dateBirthday: { type: 'string' },
        }
    },
    response: {
        '201': {
            type: 'object',
            properties: {
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                phone: { type: 'string' },
                password: { type: 'string' },
                email: { type: 'string' },
                location: {
                    type: 'object', properties: {
                        type: { type: 'string' },
                        coordinates: { type: 'array', items: { type: 'string' } },
                        city: { type: 'string' },
                        street: { type: 'string' },
                        streetNumber: { type: 'string' },
                        cep: { type: 'string' },
                        state: { type: 'string' },
                        neighborhood: { type: 'string' },
                        complement: { type: 'string' },
                    }
                },
                dateBirthday: { type: 'string' }
            }
        },
        '403': {
            type: 'object',
            properties: {
                status: { type: 'number' },
                message: { type: 'string' }
            }
        },
        '401': {
            type: 'object',
            properties: {
                status: { type: 'number' },
                message: { type: 'string' }
            }
        },
        '422': {
            type: 'object',
            properties: {
                'status': { type: 'string' },
                'message': { type: 'string' },
                'errors': {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            message: { type: 'string' }
                        }
                    }
                }
            }
        }
    }
}