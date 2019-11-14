import mongoose, { ConnectionOptions } from 'mongoose'
import { FastifyInstance } from 'fastify'
import config from '../bootstrap/configuration'
import logger from '../utils/logger'

const createConnection = async (instance: FastifyInstance) => {
    const defaultConfig: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoReconnect: true,
        reconnectTries: 3,
        ssl: true
    }
    const connectionString = `mongodb+srv://${config.db.user}:${config.db.pass}@${config.db.host}/${config.db.database}`
    const connection = await mongoose.connect(connectionString, defaultConfig)
    instance.addHook('onClose', () => connection.disconnect())
    logger.info('Database connected')
}

export default createConnection