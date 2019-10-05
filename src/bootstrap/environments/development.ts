const {
    MONGO_HOST_DEV,
    MONGO_PORT_DEV,
    MONGO_USER_DEV,
    MONGO_PASS_DEV,
    MONGO_DATABASE_DEV,
    MONGO_OPTS,
    MONGO_URI_DEV
} = process.env

module.exports = {
    db: {
        host: MONGO_HOST_DEV,
        port: MONGO_PORT_DEV,
        user: MONGO_USER_DEV,
        pass: MONGO_PASS_DEV,
        database: MONGO_DATABASE_DEV,
        uri: MONGO_URI_DEV
    }
}