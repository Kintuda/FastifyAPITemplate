import mongoose, { ConnectionOptions } from 'mongoose'
import { FastifyInstance } from 'fastify'
import config from '../bootstrap/configuration'

const createConnection = async (instance: FastifyInstance) => {
    const defaultConfig: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    const connection = await mongoose.connect(config.db.uri || '', defaultConfig)
    instance.decorate('conn', connection)
    instance.addHook('onClose', () => connection.disconnect())
}

export default createConnection