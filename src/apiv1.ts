import { FastifyInstance } from "fastify";
import { notFoundHandler } from "./plugins/errorHandle"
import createUserRouter from "./apiv1/user/router";

const createRoutes = async (instance: FastifyInstance) => {
    instance.setNotFoundHandler(notFoundHandler)
    instance.register(createUserRouter)
}

export default createRoutes