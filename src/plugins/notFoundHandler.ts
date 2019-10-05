import { FastifyRequest, FastifyReply } from "fastify";
import { ServerResponse } from "http";

const notFoundHandler = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    return reply.code(404).send({ code: 404, message: 'Rota não encontrada' })
}

export default notFoundHandler