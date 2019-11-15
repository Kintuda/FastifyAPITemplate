import { Iuser } from '../apiv1/user/model'
import jwt from 'jsonwebtoken'
import config from '../bootstrap/configuration'
import { Unathorize } from '../types/Errors'

export const jwtSign = (user: Iuser) => {
    const expiration = Math.floor(Date.now() / 1000) + (60 * 60)
    const token = jwt.sign({
        exp: expiration,
        data: user
    }, config.secret)
    return { token, expiration }
}

export const userFromToken = (token: string): Iuser => {
    try {
        const content = jwt.verify(token, config.secret)
        return content && content.data
    } catch (error) {
        throw new Unathorize('token inválido')
    }
}

export const parseBasic = (basic: string) => {
    const [_, base64] = basic.split(' ')
    const credentials = Buffer.from(base64, 'base64').toString()
    const [email, pass] = credentials.split(':')
    return { email, pass }
}