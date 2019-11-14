import { FastifyInstance } from "fastify";
import notFoundHandler from "./plugins/notFoundHandler";

const createRoutes = async (instance: FastifyInstance) => {
    instance.setNotFoundHandler(notFoundHandler)
    instance.register({
        url: ''
    })
}