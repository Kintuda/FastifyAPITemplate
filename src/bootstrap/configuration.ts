import 'dotenv/config'
const { NODE_ENV, PORT, NAME, SECRET } = process.env
const env = NODE_ENV || 'development'

const envConfig = require('./environments/' + env)

const config = {
    app: {
        env: env,
        port: PORT,
        appName: NAME,
        secret: SECRET
    }
}

export default { ...config, ...envConfig }