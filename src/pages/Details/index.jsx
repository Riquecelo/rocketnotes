import { Container, Links } from './style'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export function Details (){
  return(
    <Container>
      <Header/>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
        </Links>

      </Section>

      {/*<Button title="Logar" loading/>*/}
      <Button title="Voltar"/>
    
    </Container>
  )
}