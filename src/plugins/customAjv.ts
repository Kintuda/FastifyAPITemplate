import { FastifyInstance } from "fastify";
import Ajv, { Options } from 'ajv'

const customAjvPlugin = (instance: FastifyInstance) => {
    const defaultConfig: Options = {
        allErrors: true,
        useDefaults: true,
        coerceTypes: true,
    }
    const ajv = new Ajv(defaultConfig)
    require('ajv-errors')(ajv)
    instance.setSchemaCompiler((schema) => ajv.compile(schema))
}

export default customAjvPlugin