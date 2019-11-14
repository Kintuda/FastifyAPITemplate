import app from './app'
import logger from './utils/logger'
import config from './bootstrap/configuration'

process.on('uncaughtException', (error: Error) => {
    logger.error(`UncaughtException event: ${error && error.message}`, {
        stack: error.stack
    })
    process.exit(1)
})

process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
    logger.warn(`unhandledRejection event: ${JSON.stringify(reason)}`)
    process.exit(1)
})

const startServer = async () => {
    try {
        await app.listen(config.port, '0.0.0.0')
        logger.info(`🚀  Server started on port ${config.port}`)
        app.oas()
    } catch (error) {
        logger.error(`Error while starting the server ${error && error.message}`, {
            stack: error.stack
        })
    }
}

startServer()