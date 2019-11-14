import { FastifyInstance } from 'fastify'
import oas from 'fastify-oas'

const openApiDefinition = async (instance: FastifyInstance) => {
    const config = {
        routePrefix: '/documentation',
        swagger: {
            info: {
                title: 'Template',
                description: 'Template',
                version: '1.0.0',
            },
            externalDocs: {
                url: 'https://swagger.io',
                description: 'Find more info here',
            },
            consumes: ['application/json'],
            produces: ['application/json'],
        },
    }
    return instance.register(oas, config)
}

export default openApiDefinition