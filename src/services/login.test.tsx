import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    const mockPass = '123456'
    it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        const response = await login(mockEmail,mockPass)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com',mockPass)
        expect(response).toBeFalsy()
    })

    it('Deve exibir um erro caso a senha seja inválida', async() => {
        const response = await login(mockEmail,'1234567')
        expect(response).toBeFalsy()
    })
    it('Deve exibir um erro caso senha e email sejam inválidos', async() => {
        const response = await login('nath@dio.me','1234567')
        expect(response).toBeFalsy()
    })
})