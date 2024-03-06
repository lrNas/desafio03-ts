import { Box, Button, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../components/AppContext"

const ContaInfo = () => { 
    const {userinfo } = useContext(AppContext)

    return (
        <>
        <Box 
        backgroundColor="white" 
        minHeight="120px" 
        padding={8}
        margin={8}
        borderRadius="25px"
        maxWidth={"40%"}
    >

            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <Text fontSize='1xl' fontWeight='bold'>
                Nome do usuário: {userinfo?.name}
            </Text>
            <Text fontSize='1xl' fontWeight='bold'>
                Email do usuário: {userinfo?.email}
            </Text>
            <Link to='/conta/1'>
                <Button fontSize='xl'>
                     Voltar à página da conta
                </Button>
            </Link>
    </Box>
        </>
    )
}

export default ContaInfo
