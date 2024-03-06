import { api } from "../api"
import { UserData } from "../pages/Conta"

export const login = async (email: string,pass:string): Promise<false|UserData> => {
    const data: any = await api

    if(email !== data.email && pass !== data.pass) {
        return false
    }

    return data
}
