import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="http://github.com/Riquecelo.png" alt="foto do usuário" />
                <div>
                    <span>Bem vindo,</span>
                    <strong>Marcelo Santos</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}