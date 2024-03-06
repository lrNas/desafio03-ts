import { UserData } from "../pages/Conta";

interface IDIoBank {
    login: boolean;
    userinfo: undefined|UserData
}

const dioBank = {
    login: false,
    userinfo:{} as UserData
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
