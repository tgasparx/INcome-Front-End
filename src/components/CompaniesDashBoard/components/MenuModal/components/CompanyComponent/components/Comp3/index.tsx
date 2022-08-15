import {Label, Container, Button, Input} from './styles'
export function Comp3(){

    return (
        <>
        <Container>
           <Label>Senha antiga</Label>
           <Input value=""/>
           <Label>Nova senha</Label>
           <Input value=""/>
           <Label>Repetir nova senha</Label>
           <Input value=""/>
           <Button>Confirmar</Button>
        </Container>
        </>
    )
}