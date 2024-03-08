import { Container } from './style'
import { Button } from '../../components/Button'

export function Details (){
  return(
    <Container>
    <h1>Hello World</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ea maiores, nulla, aut quasi ad, fuga eveniet soluta consequuntur quisquam laudantium. Sit, ea. Sequi optio repudiandae amet fuga ad autem.</p>

    <Button title="Logar" loading/>
    <Button title="Sair"/>
    <Button title="Enviar"/>
    </Container>
  )
}