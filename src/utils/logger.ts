import pino, { Logger, LoggerOptions } from 'pino'
const { NODE_ENV } = process.env

const createLogger = (): Logger => {
    const defaultConfig: LoggerOptions = {
        prettyPrint: NODE_ENV === 'development'
    }
    return pino(defaultConfig)
}

export default createLogger()