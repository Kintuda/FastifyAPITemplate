import { FastifyRequest, FastifyReply } from "fastify"
import { ServerResponse } from "http"
import infoServices from '../services/userBundle/info'

export const registerUser = (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    const { body } = req
}

export const userInfo = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    const { query } = req
}

export const login = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    const { headers } = req
}