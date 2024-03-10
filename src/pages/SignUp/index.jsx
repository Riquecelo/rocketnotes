import { Container, Form, Background } from './styles';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp(){
    return(
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua Conta</h2>

                <Input
                    placerolder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placerolder="Email"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placerolder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar" />

            <a href="#">
                Volte para o login
            </a>

            </Form>

        </Container>
    )
}
