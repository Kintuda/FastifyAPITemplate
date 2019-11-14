import { FastifyRequest, FastifyReply } from "fastify"
import { ServerResponse } from "http"
import { createNewUser, loginUser } from "./service"
// import infoServices from '../services/userBundle/info'

export const registerUser = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    const { body } = req
    const result = await createNewUser(body)
    return reply.code(201).send(result)
}

export const userInfo = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    const { query } = req
}

export const login = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    const { headers } = req
    const data = await loginUser(headers)
    return reply.code(200).send(data)
}