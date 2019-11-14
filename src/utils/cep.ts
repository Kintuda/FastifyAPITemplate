import axios, { AxiosRequestConfig } from 'axios'
import { UnprocessableEntity } from '../types/Errors'


interface viaCep {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    unidade: string
    ibge: string
    gia: string
}

const fetchDataFromCep = async (cep: string): Promise<viaCep> => {
    const defaultConfig: AxiosRequestConfig = {
        url: `https://viacep.com.br/ws/${cep || ''}/json`,
        timeout: 30000,
        method: 'GET'
    }
    const { data } = await axios(defaultConfig)
    if (data && data.erro) {
        throw new UnprocessableEntity([{ message: 'CEP inválido' }])
    }
    return data
}

export default fetchDataFromCep
