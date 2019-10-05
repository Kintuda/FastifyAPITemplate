const {
    MONGO_HOST_PROD,
    MONGO_PORT_PROD,
    MONGO_USER_PROD,
    MONGO_PASS_PROD,
    MONGO_DATABASE_PROD,
    PORT,
    MONGO_URI_PROD,
    NODE_ENV
} = process.env

module.exports = {
    db: {
        host: MONGO_HOST_PROD,
        port: MONGO_PORT_PROD,
        user: MONGO_USER_PROD,
        pass: MONGO_PASS_PROD,
        database: MONGO_DATABASE_PROD,
        uri: MONGO_URI_PROD
    }
}