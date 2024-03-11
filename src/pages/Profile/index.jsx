import { Container, Form, Avatar } from './styles';
import { FiArrowLeft,FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile(){
    return(
        <Container>
            <header>
                <FiArrowLeft/>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/Riquecelo.png" 
                        alt="Imagem do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>
                    </label>
                    <input id='avatar' type="file" />
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input 
                    placeholder="Email"
                    type="email"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}