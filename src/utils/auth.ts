import { Iuser } from '../apiv1/user/model'
import jwt from 'jsonwebtoken'

export const jwtSign = (user: Iuser) => {
    const expiration = Math.floor(Date.now() / 1000) + (60 * 60)
    const token = jwt.sign({
        exp: expiration,
        data: user._id
    }, 'secret')
    return { token, expiration }
}

export const comparePassword = () => {

}

export const parseBasic = (basic: string) => {
    const [_, base64] = basic.split(' ')
    const credentials = Buffer.from(base64, 'base64').toString()
    const [email, pass] = credentials.split(':')
    return { email, pass }
}