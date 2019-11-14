import { FastifyRequest, FastifyReply } from "fastify";
import { ServerResponse } from "http";
import logger from "../utils/logger";
import { FastifyError } from "fastify";
import { ISubErrors, UnprocessableEntity, CustomFastifyError } from "../types/Errors"

export const notFoundHandler = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    return reply.code(404).send({ code: 404, message: 'Rota não encontrada' })
}

export const adapterAjv = (error: FastifyError): UnprocessableEntity => {
    const errors = error.validation || []
    const subErrors: Array<ISubErrors> = errors.map((ajvError) => {
        switch (ajvError.keyword) {
            case 'required': {
                const errorMessage: string = `Campo ${ajvError.params.missingProperty} é obrigatório`
                return { message: errorMessage }
            }
            default: {
                return { message: ajvError.message }
            }
        }
    })
    return new UnprocessableEntity(subErrors)
}

const customErrorHandler = (error: CustomFastifyError, req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    console.log(error);
    if (error.validation) {
        return reply.code(422).send(adapterAjv(error).toResponse())
    }
    switch (error.statusCode) {
        case 422:
        case 400:
            return reply.code(error.statusCode).send({ code: error.statusCode, message: 'Invalid request', errors: error.errors || [] })
        case 401:
        case 403:
            return reply.code(error.statusCode).send({ code: error.statusCode, message: error.message })
        default: {
            logger.error(`Internal server error ${error.message}`, { stack: error.stack })
            return reply.code(error.statusCode || 500).send({ code: error.statusCode || 500, message: 'Internal server error, try again later' })
        }
    }
}

export default customErrorHandler
