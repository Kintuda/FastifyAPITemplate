import { FastifyInstance } from "fastify";
import { createUserSchema, loginUserSchema } from "./schema";
import { registerUser, userInfo, login } from "./controller";

const createUserRouter = async (instance: FastifyInstance) => {
    instance.route({
        url: '/user',
        method: 'POST',
        schema: createUserSchema,
        handler: registerUser
    })

    instance.route({
        url: '/user',
        method: 'GET',
        handler: userInfo
    })

    instance.route({
        url: '/login',
        method: 'POST',
        schema: loginUserSchema,
        handler: login
    })
}

export default createUserRouter