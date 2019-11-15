import fastify, { FastifyInstance } from 'fastify'
import { IncomingMessage, Server, ServerResponse } from 'http'
import fp from 'fastify-plugin'
import database from './plugins/database'
import errorHandle from './plugins/errorHandle'
import oas from './plugins/openApi'
import v1Routes from './apiv1'

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify()

app.register(fp(oas))
app.register(fp(database))
app.register(require('fastify-helmet'))
app.register(require('fastify-cors'))
app.setErrorHandler(errorHandle)
app.register(v1Routes, { prefix: 'api/v1' })

export default app