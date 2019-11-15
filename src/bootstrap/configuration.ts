const {
    NODE_ENV,
    MONGO_HOST_DEV,
    MONGO_PORT_DEV,
    MONGO_USER_DEV,
    MONGO_PASS_DEV,
    MONGO_DATABASE_DEV,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_USER,
    MONGO_PASS,
    PORT,
    MONGO_DATABASE,
    JWT_DEV,
    JWT_PROD
} = process.env

export enum Environments {
    DEV = 'development',
    PROD = 'production'
}

interface Config {
    env: Environments
    secret: string
    port: number
    db: {
        host: string
        port: string
        user: string
        pass: string
        database: string
    }
}
const port = Number.parseInt(PORT || '3000')

const config: { [index: string]: Config } = {
    development: {
        port: port,
        secret: JWT_DEV || '',
        env: Environments.DEV,
        db: {
            host: MONGO_HOST_DEV || '',
            port: MONGO_PORT_DEV || '',
            user: MONGO_USER_DEV || '',
            pass: MONGO_PASS_DEV || '',
            database: MONGO_DATABASE_DEV || '',
        }
    },
    production: {
        port: port,
        secret: JWT_PROD || '',
        env: Environments.PROD,
        db: {
            host: MONGO_HOST || '',
            port: MONGO_PORT || '',
            user: MONGO_USER || '',
            pass: MONGO_PASS || '',
            database: MONGO_DATABASE || '',
        }
    }
}

export default config[NODE_ENV || 'development']