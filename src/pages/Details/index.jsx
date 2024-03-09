import { Container } from './style'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Details (){
  return(
    <Container>

    <Header/>

    {/*<Button title="Logar" loading/>*/}
    <Button title="Voltar"/>
    
    </Container>
  )
}