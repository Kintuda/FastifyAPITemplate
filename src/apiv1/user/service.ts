import User from './model'
import Location from '../../sharedModel/location'
import fetchDataFromCep from '../../utils/cep'
import { parseBasic, jwtSign, userFromToken } from '../../utils/auth'
import bcrypt from 'bcryptjs'
import { Unathorize } from '../../types/Errors'

export const createNewUser = async (body: any) => {
    const user = new User(body)
    const location = await fetchDataFromCep(body.location.cep)
    user.location = new Location({
        city: location.localidade,
        street: location.logradouro,
        cep: location.cep,
        state: location.uf,
        neighborhood: location.bairro,
        complement: location.complemento
    })
    return user.save()
}

export const loginUser = async (headers: any) => {
    const { authorization } = headers
    const { email, pass } = parseBasic(authorization)
    const user = await User.findOne({ email })
    if (!user) throw new Unathorize('Usuário não encontrado')
    if (bcrypt.compareSync(pass, user.password)) throw new Unathorize('credenciais inválidas')
    const { token, expiration } = jwtSign(user)
    return { token, expiration }
}

export const getUserInfo = async (headers: any) => {
    const { authorization } = headers
    const [_, content ] = authorization.split(' ')
    return userFromToken(content)
}