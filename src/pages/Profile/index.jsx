import { Container, Form } from './styles';
import { FiArrowLeft,FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile(){
    return(
        <Container>
            <header>
                <FiArrowLeft/>
            </header>

            <Form>

            <Input 
                placerolder="Nome"
                type="password"
                icon={FiUser}
            />
            <Input 
                placerolder="Email"
                type="email"
                icon={FiMail}
            />

            <Input 
                placerolder="Senha atual"
                type="password"
                icon={FiLock}
            />

            <Input 
                placerolder="Nova senha"
                type="password"
                icon={FiLock}
            />

            <Button title="Salvar"/>
            </Form>
        </Container>
    )
}