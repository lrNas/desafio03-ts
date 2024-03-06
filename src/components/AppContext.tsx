import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"
import { UserData } from "../pages/Conta";

interface IAppContext {
    userinfo?: UserData,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
    setUserinfo: (userinfo: UserData) => void

}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [userinfo,setUserinfo] = useState({} as UserData)

    
    useEffect(() => {
      const storage = getAllLocalStorage()
      if(storage){
        const { login,userinfo } = JSON.parse(storage)
        setIsLoggedIn(login)
        if(login){
          setUserinfo(userinfo)
        }
      }
    }, [])

    
  
    return (
      <AppContext.Provider value={{ userinfo, isLoggedIn, setIsLoggedIn ,setUserinfo}}>
        { children }
      </AppContext.Provider>
    )
}
