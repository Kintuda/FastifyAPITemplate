import fastify, { FastifyInstance } from 'fastify'
import { IncomingMessage, Server, ServerResponse } from 'http'
import fp from 'fastify-plugin'
import database from './plugins/database'

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify()

app.register(fp(database))
app.register(require('fastify-helmet'))
app.register(require('fastify-cors'))

export default app